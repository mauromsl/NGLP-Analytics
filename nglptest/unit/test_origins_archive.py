from unittest import TestCase
from nglptest.fixtures.events import EventFixtureFactory
from nglp.pipeline.origins_archive import OriginsArchive
from nglp.config import settings
from nglp.models import events
from nglp.lib.store import StoreFactory

from copy import deepcopy
import json


class TestOriginsArchive(TestCase):

    def setUp(self) -> None:
        self.ids_to_remove = []
        self.store = StoreFactory.get("origins_archive")

    def tearDown(self) -> None:
        for id in self.ids_to_remove:
            self.store.delete_file(settings.origins_archive_container, id + ".json")

    def test_01_store(self):
        request = EventFixtureFactory.request_event()
        compare = deepcopy(request)
        object = events.PipelineEvent(raw=request)

        oa = OriginsArchive()
        result = oa.run(event=object)
        self.ids_to_remove.append(result.id)
        assert result.archive_id is not None

        fh = self.store.get(settings.origins_archive_container, result.id + ".json")
        archived_copy = json.loads(fh.read())
        del archived_copy["id"]

        assert archived_copy == compare

