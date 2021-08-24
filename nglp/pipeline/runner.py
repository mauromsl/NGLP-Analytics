"""
This finle is mostly for testing.  Actually running the functions for real should
be the job of a scaleable import pipeline
"""
import json
import os
import logging
import faust

from nglp.pipeline.pipeline import UnacceptableEvent
from nglp.pipeline.categorise import Categorise
from nglp.pipeline.geolocate import Geolocate
from nglp.models.events import PipelineEvent
from nglp.config import settings
from datetime import datetime

LOG = logging.getLogger("event_handler")


class Runner:
    pipe = [
        Categorise(),
        Geolocate()
    ]

    def __init__(self):
        self.datestamp = None
        self.stream_out = None
        self.oid_stream = None
        self.create_output_file()

    def process_event(self, event: PipelineEvent) -> PipelineEvent:
        for inst in self.pipe:
            inst.run(event)
        return event

    # TODO: Remove the code once verified
    # def process_stream(self, stream_in, stream_out, oid_stream):
    #     oids = set()
    #     for line in stream_in:
    #         obj = json.loads(line)
    #         event = PipelineEvent(obj)
    #
    #         try:
    #             self.process_event(event)
    #         except UnacceptableEvent:
    #             continue
    #
    #         out = json.dumps(event.raw)
    #         stream_out.write(out + "\n")
    #
    #         oids.update(event.object_ids)
    #
    #     oid_stream.write("\n".join(oids))

    def process_log(self, event):
        obj = json.loads(event)
        event_obj = PipelineEvent(obj)
        try:
            self.process_event(event_obj)
        except UnacceptableEvent as exp:
            LOG.error(exp)
        out = json.dumps(event_obj.raw)

        self.create_output_file()
        self.stream_out.write(out + "\n")
        self.stream_out.flush()
        self.oid_stream.write("\n".join(event_obj.object_ids))
        self.oid_stream.flush()

    def create_output_file(self):
        today = datetime.utcnow().strftime("%Y%m%d")

        if not today == self.datestamp:
            self.datestamp = datetime.utcnow().strftime("%Y%m%d")
            outfile = os.path.join(settings.pipeline_output_dir, "processed.{d}.log".format(d=self.datestamp))
            oidsfile = os.path.join(settings.pipeline_output_dir, "oids.{d}.log".format(d=self.datestamp))
            if self.stream_out:
                self.stream_out.close()
            self.stream_out = open(outfile, "a+")
            self.oid_stream = open(oidsfile, "a+")

    def close_file(self):
        if self.stream_out:
            self.stream_out.close()
        if self.oid_stream:
            self.oid_stream.close()

    # TODO: Remove the code once verified
    # def process_file(self, input_path, output_path, oidsfile):
    #     with open(input_path, "r") as i, \
    #             open(output_path, "w") as o, \
    #             open(oidsfile, "w") as d:
    #         self.process_stream(i, o, d)


app = faust.App('events_handler', broker=settings.kafka_broker, value_serializer='json')
topic = app.topic('events')


@app.agent(topic)
async def handle_event(stream):
    r = Runner()
    try:
        async for event in stream:
            r.process_log(event)
    finally:
        r.close_file()


# TODO: Remove the code once verified
# if __name__ == "__main__":
#     logs = [f for f in os.listdir(settings.event_log_dir) if f.startswith("events.log")]
#     r = Runner()
#     i = 0
#     datestamp = datetime.utcnow().strftime("%Y%m%d%H%M%S")
#     for l in logs:
#         outfile = os.path.join(settings.pipeline_output_dir, "processed.{d}.{x}.log".format(d=datestamp, x=i))
#         oidsfile = os.path.join(settings.pipeline_output_dir, "oids.{d}.{x}.log".format(d=datestamp, x=i))
#         infile = os.path.join(settings.event_log_dir, l)
#         r.process_file(infile, outfile, oidsfile)
