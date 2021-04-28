from copy import deepcopy


class EventFixtureFactory(object):

    @classmethod
    def request_event(cls):
        return deepcopy(REQUEST_EVENT)

    @classmethod
    def investigation_event(cls):
        return deepcopy(INVESTIGATION_EVENT)

    @classmethod
    def workflow_transition_event(cls):
        return deepcopy(WORKFLOW_TRANSITION_EVENT)

    @classmethod
    def export_event(cls):
        return deepcopy(EXPORT_EVENT)

    @classmethod
    def join_event(cls):
        return deepcopy(JOIN_EVENT)

    @classmethod
    def leave_event(cls):
        return deepcopy(LEAVE_EVENT)


REQUEST_EVENT = {
    "event" : "request",
    "object_type" : "File",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format" : "application/pdf",
    "url" : "/article/12345/download.pdf",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "ip" : "255.255.255.255"
}

INVESTIGATION_EVENT = {
    "event" : "investigation",
    "object_type" : "splash page",
    "object_id": ["12345"],
    "url" : "/community/university-x/",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "ip" : "255.255.255.255"
}

WORKFLOW_TRANSITION_EVENT = {
  "event" : "first_decision",
  "object_type" : "article",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}

EXPORT_EVENT = {
  "event" : "export",
  "object_type" : "article",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "format" : "application/x-research-info-systems",
  "url" : "https://wdp.org/article/1234/export.ris",
  "method" : "get",
  "referrer" : "https://cottagelabs.com/nglp",
  "user_agent" : "Mozilla ...",
  "ip" : "255.255.255.255"
}

JOIN_EVENT = {
  "event" : "join",
  "object_type" : "journal",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}

LEAVE_EVENT = {
  "event" : "leave",
  "object_type" : "journal",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}
