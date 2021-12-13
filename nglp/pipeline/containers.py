from nglp.pipeline.pipeline import PipelineProcessor
from nglp.models.events import PipelineEvent
from nglp.models.reporting_context import ReportingContextObject


class Containers(PipelineProcessor):
    def run(self, event: PipelineEvent) -> PipelineEvent:
        next_lookup = event.object_ids
        containers = []

        while len(next_lookup) > 0:
            rcos = ReportingContextObject.find_by_identifiers(next_lookup)
            next_lookup = []
            for rco in rcos:
                cbs = rco.contained_by
                for cb in cbs:
                    if cb not in containers:
                        containers.append(cb)
                        next_lookup.append(cb)

        event.container = containers
        return event
