"""
This file is mostly for testing.  Actually running the functions for real should
be the job of a scaleable import pipeline
"""
import json
import logging
import faust
import uuid

from nglp.pipeline.pipeline import UnacceptableEvent
from nglp.pipeline.categorise import Categorise
from nglp.pipeline.geolocate import Geolocate
from nglp.pipeline.normalise import Normalise
from nglp.models.events import PipelineEvent, CoreEvent
from nglp.config import settings

LOG = logging.getLogger("event_handler")

app = faust.App('events_handler', broker=settings.kafka_broker, value_serializer='json')
topic = app.topic('events')
topic_oid = app.topic('oids')


class Runner:
    pipe = [
        Categorise(),
        Geolocate(),
        Normalise()
    ]

    def process_event(self, event: PipelineEvent) -> PipelineEvent:
        for inst in self.pipe:
            inst.run(event)
        return event

    async def process_log(self, event):
        obj = json.loads(event)
        unique_id = uuid.uuid4().hex
        obj["id"] = unique_id
        event_obj = PipelineEvent(obj)
        try:
            self.process_event(event_obj)
        except UnacceptableEvent as exp:
            LOG.error(exp)

        core = CoreEvent(event_obj.raw)
        core.save()
        send_event = json.dumps({"oids": event_obj.object_ids, "event_id" : unique_id})
        #send to oid topic
        await topic_oid.send(value=send_event)


@app.agent(topic)
async def handle_event(stream):
    r = Runner()
    async for event in stream:
        await r.process_log(event)

if __name__ == '__main__':
    app.main()
