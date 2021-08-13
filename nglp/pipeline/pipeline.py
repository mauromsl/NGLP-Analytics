from nglp.models.events import PipelineEvent


class UnacceptableEvent(Exception):
    pass


class PipelineProcessor:
    def run(self, event: PipelineEvent) -> PipelineEvent:
        raise NotImplementedError()