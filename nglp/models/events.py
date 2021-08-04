import json

from nglp.lib.seamless import SeamlessMixin
from nglp.models import structs
from nglp.dao import BaseDAO, MAPPING_OPTS
from nglp.lib import es_data_mapping
from nglp.config import settings

from datetime import datetime


class EventModel(SeamlessMixin):
    def loggable(self):
        return json.dumps(self.__seamless__.data)

    def set_occurred_at(self, occurred_at=None, force=False):
        """
        Sets the occurred at date.  If no date is supplied then the occurred_at date will
        be set to the current timestamp.  If occurred_at is already present in the data
        it will not be set unless `force` is set to True.
        :return:
        """
        if self.__seamless__.get_single("occurred_at") is not None and not force:
            return

        if occurred_at is None:
            occurred_at = datetime.strftime(datetime.utcnow(), "%Y-%m-%dT%H:%M:%S.%fZ")

        self.__seamless__.set_single("occurred_at", occurred_at)

class RequestEvent(EventModel):
    """Event which represents a "Request" event, which is a file download"""
    __SEAMLESS_STRUCT__ = [
        structs.REQUEST_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(RequestEvent, self).__init__(raw=raw)


class InvestigationEvent(EventModel):
    """Event which represents an "Investigation" event, which is a page view"""
    __SEAMLESS_STRUCT__ =  [
        structs.INVESTIGATION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(InvestigationEvent, self).__init__(raw=raw)


class WorkflowTransitionEvent(EventModel):
    """Event which represents one of the range of workflow transition events"""
    __SEAMLESS_STRUCT__ =  [
        structs.WORKFLOW_TRANSITION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(WorkflowTransitionEvent, self).__init__(raw=raw)


class ExportEvent(EventModel):
    """Event which represents a metadata export from an item (e.g. for a reference manager)"""
    __SEAMLESS_STRUCT__ =  [
        structs.EXPORT_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(ExportEvent, self).__init__(raw=raw)


class JoinEvent(EventModel):
    """Event which represents a staff member joining the editorial team for a journal"""
    __SEAMLESS_STRUCT__ =  [
        structs.JOIN_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(JoinEvent, self).__init__(raw=raw)


class LeaveEvent(EventModel):
    """Event which represents a staff member leaving the editorial team for a journal"""
    __SEAMLESS_STRUCT__ =  [
        structs.LEAVE_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(LeaveEvent, self).__init__(raw=raw)


class CoreEvent(SeamlessMixin, BaseDAO):
    """A core event model for the main analytics index, which can act as a container for
    any of the other events, plus additional context information required for analytics."""

    __index_type__ = "event"

    __SEAMLESS_STRUCT__ = [
        structs.CORE_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(CoreEvent, self).__init__(raw=raw)

    def mappings(self):
        return es_data_mapping.create_mapping(self.__seamless_struct__.raw, MAPPING_OPTS)


class EventModelFactory():
    model_map = {
        "request": RequestEvent,
        "investigation": InvestigationEvent,
        "export" : ExportEvent,
        "join" : JoinEvent,
        "leave" : LeaveEvent,
    }

    @classmethod
    def get(cls, event_type):
        if event_type in cls.model_map:
            return cls.model_map[event_type]
        if event_type in settings.workflow_transitions:
            return WorkflowTransitionEvent
        return None