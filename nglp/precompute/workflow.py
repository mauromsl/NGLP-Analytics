from datetime import datetime

from nglp.precompute.precompute import Precompute
from nglp.models.events import CoreEvent
from nglp.config import settings


class Workflow(Precompute):
    def run(self, object_id: str):
        for source in settings.sources:
            self._process_source(object_id, source)

    def _process_source(self, object_id, source):
        events = CoreEvent.find(object_ids=[object_id], source_ids=[source.get("identifier")], categories=["workflow"])
        if len(events) == 0:
            return

        self._clear_workflow_annotations(events)
        events.sort(key = lambda x: x.occurred_at)

        pos = 0
        while True:
            first, second, pos = self._scan(events, pos, source)
            if second is None:
                break
            self._annotate_events(first, second)

        CoreEvent.bulk([e.raw for e in events])

    def _clear_workflow_annotations(self, events):
        for e in events:
            e.clear_workflow_annotations()

    def _annotate_events(self, first, second):
        first.set_workflow_followed_by(second.event, second.occurred_at)
        second.set_workflow_follows(first.event, self._delta(first, second))

    def _delta(self, first, second):
        start = self._to_datetime(first.occurred_at)
        end = self._to_datetime(second.occurred_at)
        return (end - start).total_seconds()

    def _to_datetime(self, date_expr: str):
        try:
            return datetime.strptime(date_expr, "%Y-%m-%dT%H:%M:%S.%fZ")
        except:
            pass

        try:
            return datetime.strptime(date_expr, "%Y-%m-%dT%H:%M:%SZ")
        except:
            raise ValueError("Could not convert string {val} to UTC Datetime".format(val=date_expr))

    def _scan(self, events, start_pos, source):
        start = events[start_pos]
        next = None
        next_pos = start_pos
        offset = 0
        while next is None:
            offset += 1
            next_type = self._get_next_event_type(start.event, offset, source)
            if next_type is None:
                break
            for i, e in enumerate(events[start_pos + 1:]):
                if e.event == next_type:
                    next = e
                    next_pos = i + start_pos + 1
        return start, next, next_pos

    def _get_next_event_type(self, current_type, offset, source):
        source_id = source.get("identifier")
        transitions = settings.workflow_transitions[source_id]
        pos = transitions.index(current_type)
        if len(transitions) > pos + offset:
            return transitions[pos + offset]
        return None