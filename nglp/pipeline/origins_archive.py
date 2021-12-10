from nglp.pipeline.pipeline import PipelineProcessor, UnacceptableEvent
from nglp.models.events import PipelineEvent
from nglp.config import settings
from nglp.lib.store import StoreFactory
from nglp.dao import BaseDAO

from io import StringIO
import json


class OriginsArchive(PipelineProcessor):
    def run(self, event: PipelineEvent) -> PipelineEvent:
        store = StoreFactory.get("origins_archive")
        container = settings.origins_archive_container

        if event.id is None:
            event.id = BaseDAO.makeid()

        stream = StringIO(json.dumps(event.raw))

        store.store(container, event.id + ".json", source_stream=stream)
        archive_id = store.url(container, event.id + ".json")

        event.archive_id = archive_id
        return event


