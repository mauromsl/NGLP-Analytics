from unittest import TestCase
from nglptest.fixtures.events import EventFixtureFactory
from nglp.pipeline.categorise import Categorise
from nglp.pipeline.pipeline import UnacceptableEvent
from nglp.models import events
from nglp.lib.data_dictionaries import CATEGORY_TYPES


class TestCategorise(TestCase):

    def test_01_categorise_workflow(self):
        source = EventFixtureFactory.workflow_transition_event("publish", source_id="http://cottagelabs.com")
        cat = Categorise()
        event = events.PipelineEvent(source)
        cat.run(event)
        assert event.category == CATEGORY_TYPES.get("workflow_transition")

    def test_02_categorise_usage(self):
        source = EventFixtureFactory.request_event()
        cat = Categorise()
        event = events.PipelineEvent(source)
        cat.run(event)
        assert event.category == CATEGORY_TYPES.get("request")

    def test_03_unacceptable_event(self):
        source = EventFixtureFactory.request_event()
        source["event"] = "whatever"
        cat = Categorise()
        event = events.PipelineEvent(source)
        with self.assertRaises(UnacceptableEvent):
            cat.run(event)
