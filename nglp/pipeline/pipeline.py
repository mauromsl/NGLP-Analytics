from nglp.models.events import PipelineEvent


class PipelineProcessor:
    def run(self, event: PipelineEvent) -> PipelineEvent:
        raise NotImplementedError()