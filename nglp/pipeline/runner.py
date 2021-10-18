"""
This file is mostly for testing.  Actually running the functions for real should
be the job of a scaleable import pipeline
"""
import json
import os

from nglp.pipeline.pipeline import UnacceptableEvent
from nglp.pipeline.categorise import Categorise
from nglp.pipeline.geolocate import Geolocate
from nglp.models.events import PipelineEvent
from nglp.config import settings
from datetime import datetime


class Runner:
    pipe = [
        Categorise(),
        Geolocate()
    ]

    def process_event(self, event: PipelineEvent) -> PipelineEvent:
        for inst in self.pipe:
            inst.run(event)
        return event

    def process_stream(self, stream_in, stream_out, oid_stream):
        oids = set()
        for line in stream_in:
            if line == "":
                continue
            obj = json.loads(line)
            event = PipelineEvent(obj)

            try:
                self.process_event(event)
            except UnacceptableEvent:
                continue

            out = json.dumps(event.raw)
            stream_out.write(out + "\n")

            oids.update(event.object_ids)

        oid_stream.write("\n".join(oids))

    def process_file(self, input_path, output_path, oidsfile):
        with open(input_path, "r") as i, \
                open(output_path, "w") as o, \
                open(oidsfile, "w") as d:
            self.process_stream(i, o, d)


if __name__ == "__main__":
    logs = [f for f in os.listdir(settings.event_log_dir) if f.startswith("events.log")]
    r = Runner()
    i = 0
    datestamp = datetime.utcnow().strftime("%Y%m%d%H%M%S")
    for l in logs:
        outfile = os.path.join(settings.pipeline_output_dir, "processed.{d}.{x}.log".format(d=datestamp, x=i))
        oidsfile = os.path.join(settings.pipeline_output_dir, "oids.{d}.{x}.log".format(d=datestamp, x=i))
        infile = os.path.join(settings.event_log_dir, l)
        r.process_file(infile, outfile, oidsfile)
