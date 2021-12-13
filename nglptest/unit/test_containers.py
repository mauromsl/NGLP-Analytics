from unittest import TestCase
from nglptest.fixtures.events import EventFixtureFactory
from nglptest.fixtures.reporting_context import ReportingContextFixtureFactory
from nglp.pipeline.containers import Containers
from nglp.models.reporting_context import ReportingContextFactory
from nglp.models import events
from unittest.mock import patch


class TestContainers(TestCase):

    @patch('nglp.models.reporting_context.ReportingContextObject.find_by_identifiers')
    def test_01_no_containers(self, fbi):
        fbi.return_value = []
        pipe = Containers()
        source = EventFixtureFactory.request_event()
        event = events.PipelineEvent(source)
        event = pipe.run(event)
        assert len(event.container) == 0

    @patch('nglp.models.reporting_context.ReportingContextObject.find_by_identifiers')
    def test_02_one_container(self, fbi):
        source = EventFixtureFactory.request_event()
        event = events.PipelineEvent(source)

        rc = ReportingContextFixtureFactory.article()
        rc["identifiers"] = source["object_id"]

        fbi.side_effect = [[ReportingContextFactory.make(rc)], []]

        pipe = Containers()
        event = pipe.run(event)

        assert event.container == rc["contained_by"]

    @patch('nglp.models.reporting_context.ReportingContextObject.find_by_identifiers')
    def test_03_multiple_container(self, fbi):
        source = EventFixtureFactory.request_event()
        event = events.PipelineEvent(source)

        rc1 = ReportingContextFixtureFactory.article()
        rc1["identifiers"] = source["object_id"]

        rc2 = ReportingContextFixtureFactory.journal()
        rc2["identifiers"] = rc1["contained_by"]

        fbi.side_effect = [[ReportingContextFactory.make(rc1)], [ReportingContextFactory.make(rc2)], []]

        pipe = Containers()
        event = pipe.run(event)

        comp = set(rc1["contained_by"] + rc2["contained_by"])
        assert set(event.container) == comp
