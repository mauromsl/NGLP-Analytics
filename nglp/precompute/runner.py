import time
import json
import faust
import threading, queue

from nglp.precompute.workflow import Workflow
from nglp.config import settings

wait_time = 5
q = queue.Queue()


def process(object_oid, runner):
    previous_time = object_oid["timestamp"]
    time_now = int(time.time())
    diff = time_now - previous_time

    if diff >= wait_time:
        runner.run(object_oid["oids"])
        return
    else:
        time.sleep(wait_time - diff)
        process(object_oid, runner)


def worker():
    r = Runner()
    while True:
        item = q.get()
        process(item, r)
        q.task_done()


class Runner:
    tasks = [
        Workflow()
    ]

    def run(self, object_ids):
        for oid in object_ids:
            for t in self.tasks:
                t.run(oid)


app = faust.App('oids_handler', broker=settings.kafka_broker, value_serializer='json')
app.conf.web_port = 16066
topic_oid = app.topic('oids')


@app.agent(topic_oid)
async def handle_oid(stream):
    async for oid in stream:
        object_oid = json.loads(oid)
        object_oid["timestamp"] = int(time.time())
        q.put(object_oid)

threading.Thread(target=worker, daemon=True).start()

if __name__ == '__main__':
    app.main()
