from nglp.lib.seamless import SeamlessMixin
from nglp.models import structs


class RequestEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ = [
        structs.REQUEST_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(RequestEvent, self).__init__(raw=raw)


class InvestigationEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        structs.INVESTIGATION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(InvestigationEvent, self).__init__(raw=raw)


class WorkflowTransitionEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        structs.WORKFLOW_TRANSITION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(WorkflowTransitionEvent, self).__init__(raw=raw)


class ExportEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        structs.EXPORT_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(ExportEvent, self).__init__(raw=raw)


class JoinEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        structs.JOIN_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(JoinEvent, self).__init__(raw=raw)


class LeaveEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        structs.LEAVE_EVENT
    ]

    __SEAMLESS_COERCE__ = structs.COERCE

    def __init__(self, raw=None):
        super(LeaveEvent, self).__init__(raw=raw)