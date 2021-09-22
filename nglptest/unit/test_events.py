from unittest import TestCase
from nglptest.fixtures.events import EventFixtureFactory
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

    def test_03_workflow_transition_event(self):
        request = EventFixtureFactory.workflow_transition_event()
        request2 = deepcopy(request)

        obj = events.WorkflowTransitionEvent(raw=request)

        del request2["object_id"]
        with self.assertRaises(SeamlessException):
            obj2 = events.WorkflowTransitionEvent(raw=request2)

    def test_04_export_event(self):
        request = EventFixtureFactory.export_event()
        request2 = deepcopy(request)

        obj = events.ExportEvent(raw=request)

        request2["object_type"] = "collection"
        with self.assertRaises(SeamlessException):
            obj2 = events.WorkflowTransitionEvent(raw=request2)


    def test_05_join_event(self):
        request = EventFixtureFactory.join_event()
        request2 = deepcopy(request)

        obj = events.JoinEvent(raw=request)

        request2["object_type"] = "collection"
        with self.assertRaises(SeamlessException):
            obj2 = events.JoinEvent(raw=request2)

    def test_06_export_event(self):
        request = EventFixtureFactory.leave_event()
        request2 = deepcopy(request)

        obj = events.LeaveEvent(raw=request)

        request2["object_type"] = "collection"
        with self.assertRaises(SeamlessException):
            obj2 = events.LeaveEvent(raw=request2)


    def test_07_request_core_event(self):
        request = EventFixtureFactory.request_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)

    def test_08_investigation_core_event(self):
        request = EventFixtureFactory.investigation_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)

    def test_09_workflow_transition_core_event(self):
        request = EventFixtureFactory.workflow_transition_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)

    def test_10_export_core_event(self):
        request = EventFixtureFactory.export_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)

    def test_11_join_core_event(self):
        request = EventFixtureFactory.join_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)

    def test_12_leave_core_event(self):
        request = EventFixtureFactory.leave_core_event()
        request2 = deepcopy(request)

        obj = events.CoreEvent(raw=request)

        request2["location"] = "france"
        with self.assertRaises(SeamlessException):
            obj2 = events.CoreEvent(raw=request2)