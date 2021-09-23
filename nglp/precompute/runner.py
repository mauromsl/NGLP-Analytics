import os

from nglp.precompute.workflow import Workflow
from nglp.config import settings


class Runner:
    tasks = [
        Workflow()
    ]

    def run(self, object_ids):
        for oid in object_ids:
            for t in self.tasks:
                t.run(oid)

    def process_file(self, oid_file):
        with open(oid_file, "r") as f:
            ids = [i.strip() for i in f]
        self.run(ids)


if __name__ == "__main__":
    oid_files = [f for f in os.listdir(settings.pipeline_output_dir) if f.startswith("oids.")]
    oid_files.sort(reverse=True)
    oid_file = oid_files[0]

    r = Runner()
    r.process_file(os.path.join(settings.pipeline_output_dir, oid_file))
