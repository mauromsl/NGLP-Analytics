from unittest import TestCase
from unittest.mock import patch
from test.fixtures.events import EventFixtureFactory
from nglp.models import events
from nglp.precompute.workflow import Workflow
from datetime import datetime


class TestWorkflow(TestCase):

    def _delta(self, first, second):
        start = datetime.strptime(first.occurred_at, "%Y-%m-%dT%H:%M:%S.%fZ")
        end = datetime.strptime(second.occurred_at, "%Y-%m-%dT%H:%M:%S.%fZ")
        return (end - start).total_seconds()

    @patch("nglp.models.events.CoreEvent.find")
    @patch("nglp.models.events.CoreEvent.bulk")
    def test_01_simple_workflow(self, bulk, find):
        states = [
            "submit",
            "first_decision",
            "review",
            "accept",
            "publish"
        ]
        workflow_events = [
            events.CoreEvent(wf)
            for wf in EventFixtureFactory.workflow_transition_core_set(
                states,
                first_occurred_at="2020-01-01T00:00:00.000Z",
                last_occurred_at="2021-01-01T00:00:00.000Z"
            )
        ]
        find.return_value = workflow_events

        workflow = Workflow()
        workflow.run(workflow_events[0].object_ids[0])

        assert bulk.called

        results = [events.CoreEvent(x) for x in bulk.call_args[0][0]]
        expectations = {}
        for i, s in enumerate(states):
            f = (None, None)
            fb = (None, None)
            if i > 0:
                wfe = workflow_events[i-1]
                f = (wfe.event, self._delta(wfe, workflow_events[i]))
            if len(workflow_events) > i + 1:
                wfe = workflow_events[i+1]
                fb = (wfe.event, wfe.occurred_at)
            expectations[s] = {
                "f" : f,
                "fb" : fb
            }

        for r in results:
            exp = expectations[r.event]
            assert exp["f"] == r.workflow_follows
            assert exp["fb"] == r.workflow_followed_by

    @patch("nglp.models.events.CoreEvent.find")
    @patch("nglp.models.events.CoreEvent.bulk")
    def test_02_complex_workflow(self, bulk, find):
        states = [
            "submit",
            "first_decision",
            "submit",
            "first_decision",
            "review",
            "accept",
            "publish",
            "review",
            "accept"
        ]
        workflow_events = [
            events.CoreEvent(wf)
            for wf in EventFixtureFactory.workflow_transition_core_set(
                states,
                first_occurred_at="2020-01-01T00:00:00.000Z",
                last_occurred_at="2021-01-01T00:00:00.000Z"
            )
        ]
        find.return_value = workflow_events

        workflow = Workflow()
        workflow.run(workflow_events[0].object_ids[0])

        assert bulk.called

        results = [events.CoreEvent(x) for x in bulk.call_args[0][0]]
        expectations = {
            "submit" : {
                "pos" : 0,
                "f" : (None, None),
                "fb" : ("first_decision", workflow_events[3].occurred_at)
            },
            "first_decision" : {
                "pos" : 3,
                "f": ("submit", self._delta(workflow_events[0], workflow_events[3])),
                "fb": ("review", workflow_events[7].occurred_at)
            },
            "review" : {
                "pos" : 7,
                "f" : ("first_decision", self._delta(workflow_events[3], workflow_events[7])),
                "fb" :("accept", workflow_events[8].occurred_at)
            },
            "accept" : {
                "pos" : 8,
                "f" : ("review", self._delta(workflow_events[7], workflow_events[8])),
                "fb" : (None, None)
            }
        }

        for i, r in enumerate(results):
            exp = expectations.get(r.event)
            if exp is not None and exp.get("pos") == i:
                assert exp["f"] == r.workflow_follows
                assert exp["fb"] == r.workflow_followed_by
            else:
                assert r.workflow_follows == (None, None)
                assert r.workflow_followed_by == (None, None)





