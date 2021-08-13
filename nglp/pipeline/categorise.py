from nglp.pipeline.pipeline import PipelineProcessor, UnacceptableEvent
from nglp.models.events import PipelineEvent
from nglp.config import settings
from nglp.lib.data_dictionaries import CATEGORY_TYPES


class Categorise(PipelineProcessor):
    def run(self, event: PipelineEvent) -> PipelineEvent:
        cat = self._get_category(event)
        if cat is not None:
            event.category = cat
        else:
            raise UnacceptableEvent()
        return event

    def _get_category(self, event: PipelineEvent) -> str:
        if event.event in settings.workflow_transitions:
            return CATEGORY_TYPES.get("workflow_transition")
        return CATEGORY_TYPES.get(event.event)