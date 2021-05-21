from nglp.lib.seamless import SeamlessMixin
from nglp.models import structs
from nglp.dao import BaseDAO, MAPPING_OPTS
from nglp.lib import es_data_mapping


class RequestEvent(SeamlessMixin):
    """Event which represents a "Request" event, which is a file download"""
    __SEAMLESS_STRUCT__ = [
        structs.REQUEST_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(RequestEvent, self).__init__(raw=raw)


class InvestigationEvent(SeamlessMixin):
    """Event which represents an "Investigation" event, which is a page view"""
    __SEAMLESS_STRUCT__ =  [
        structs.INVESTIGATION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(InvestigationEvent, self).__init__(raw=raw)


class WorkflowTransitionEvent(SeamlessMixin):
    """Event which represents one of the range of workflow transition events"""
    __SEAMLESS_STRUCT__ =  [
        structs.WORKFLOW_TRANSITION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(WorkflowTransitionEvent, self).__init__(raw=raw)


class ExportEvent(SeamlessMixin):
    """Event which represents a metadata export from an item (e.g. for a reference manager)"""
    __SEAMLESS_STRUCT__ =  [
        structs.EXPORT_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(ExportEvent, self).__init__(raw=raw)


class JoinEvent(SeamlessMixin):
    """Event which represents a staff member joining the editorial team for a journal"""
    __SEAMLESS_STRUCT__ =  [
        structs.JOIN_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(JoinEvent, self).__init__(raw=raw)


class LeaveEvent(SeamlessMixin):
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