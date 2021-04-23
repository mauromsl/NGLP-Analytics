from nglp.lib.seamless import SeamlessMixin
from nglp.models.structs import REQUEST_EVENT_STRUCT, COERCE, INVESTIGATION_EVENT_STRUCT


class RequestEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ = [
        REQUEST_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = COERCE

    def __init__(self, raw=None):
        super(RequestEvent, self).__init__(raw=raw)


class InvestigationEvent(SeamlessMixin):
    __SEAMLESS_STRUCT__ =  [
        INVESTIGATION_EVENT_STRUCT
    ]

    __SEAMLESS_COERCE__ = COERCE

    def __init__(self, raw=None):
        super(InvestigationEvent, self).__init__(raw=raw)