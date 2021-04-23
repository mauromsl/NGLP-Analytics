from unittest import TestCase
from test.fixtures.events import EventFixtureFactory
from nglp.models import events
from copy import deepcopy
from nglp.lib.seamless import SeamlessException


class TestEvents(TestCase):
    def test_01_request_event(self):
        request = EventFixtureFactory.request_event()
        request2 = deepcopy(request)

        obj = events.RequestEvent(raw=request)

        request2["object_type"] = "collection"
        with self.assertRaises(SeamlessException):
            obj2 = events.RequestEvent(raw=request2)

    def test_02_investigation_event(self):
        request = EventFixtureFactory.investigation_event()
        request2 = deepcopy(request)

        obj = events.InvestigationEvent(raw=request)
        request2["method"] = "put"
        with self.assertRaises(SeamlessException):
            obj2 = events.InvestigationEvent(raw=request2)

