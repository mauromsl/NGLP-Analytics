from copy import deepcopy
from datetime import datetime, timedelta


class EventFixtureFactory(object):

    @classmethod
    def request_event(cls):
        return deepcopy(REQUEST_EVENT)

    @classmethod
    def investigation_event(cls):
        return deepcopy(INVESTIGATION_EVENT)

    @classmethod
    def workflow_transition_event(cls, state="first_decision", occurred_at=None, source_id=None):
        event = deepcopy(WORKFLOW_TRANSITION_EVENT)
        event["event"] = state
        if occurred_at is not None:
            event["occurred_at"] = occurred_at
        if source_id:
            event["source"] = {"identifier" : source_id}
        return event

    @classmethod
    def export_event(cls):
        return deepcopy(EXPORT_EVENT)

    @classmethod
    def join_event(cls):
        return deepcopy(JOIN_EVENT)

    @classmethod
    def leave_event(cls):
        return deepcopy(LEAVE_EVENT)

    @classmethod
    def request_core_event(cls):
        return deepcopy(REQUEST_CORE_EVENT)

    @classmethod
    def investigation_core_event(cls):
        return deepcopy(INVESTIGATION_CORE_EVENT)

    @classmethod
    def workflow_transition_core_event(cls, state="first_decision", occurred_at=None):
        event = deepcopy(WORKFLOW_TRANSITION_CORE_EVENT)
        event["event"] = state
        if occurred_at is not None:
            event["occurred_at"] = occurred_at
        return event

    @classmethod
    def workflow_transition_core_set(cls, states, first_occurred_at, last_occurred_at, workflow_annotations=False):
        start = datetime.strptime(first_occurred_at, "%Y-%m-%dT%H:%M:%S.%fZ")
        end = datetime.strptime(last_occurred_at, "%Y-%m-%dT%H:%M:%S.%fZ")
        delta = (end - start).total_seconds()
        interval = delta / len(states)
        return [
            cls.workflow_transition_core_event(
                state,
                datetime.strftime(start + timedelta(seconds=(interval * i)), "%Y-%m-%dT%H:%M:%S.%fZ")
            )
            for i, state in enumerate(states)
        ]

    @classmethod
    def export_core_event(cls):
        return deepcopy(EXPORT_CORE_EVENT)

    @classmethod
    def join_core_event(cls):
        return deepcopy(JOIN_CORE_EVENT)

    @classmethod
    def leave_core_event(cls):
        return deepcopy(LEAVE_CORE_EVENT)


REQUEST_EVENT = {
    "event" : "request",
    "object_type" : "file",
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
  "user_id" : "user123"
}

LEAVE_EVENT = {
  "event" : "leave",
  "object_type" : "journal",
  "object_id" : ["wdp:1234", "doi:10.1234/example"],
  "user_id" : "user123",
}

REQUEST_CORE_EVENT = {
    "occurred_at" : "2021-04-29T12:00:00Z",
    "category" : "usage",
    "event" : "request",
    "object_type" : "file",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format" : "application/pdf",
    "container": ["12346", "12347", "12348"],
    "search_keywords": [],
    "share" : {},
    "url" : "https://community/university-x/article/12345/download.pdf",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "user_id" : None,
    "user_org" : None,
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "https://cdl.dspace.org",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}

INVESTIGATION_CORE_EVENT = {
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "usage",
    "event" : "investigation",
    "object_type" : "splash page",
    "object_id": ["12345"],
    "format": None,
    "url" : "https://community/university-x/",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "user_id" : None,
    "user_org" : None,
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "https://cdl.dspace.org",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}

WORKFLOW_TRANSITION_CORE_EVENT = {
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "workflow",
    "event" : "first_decision",
    "object_type" : "article",
    "object_id" : ["wdp:1234", "doi:10.1234/example"],
    "format": None,
    "url" : "https://community/university-x/",
    "method" : None,
    "referrer" : None,
    "user_agent" : None,
    "user_id" : "user123",
    "user_org" : ["university-x"],
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "http://cottagelabs.com",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}

EXPORT_CORE_EVENT = {
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "usage",
    "event" : "export",
    "object_type" : "article",
    "object_id" : ["wdp:1234", "doi:10.1234/example"],
    "format" : "application/x-research-info-systems",
    "url" : "https://wdp.org/article/1234/export.ris",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla ...",
    "user_id" : None,
    "user_org" : None,
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "http://cottagelabs.com",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}

JOIN_CORE_EVENT = {
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "audit",
    "event" : "join",
    "object_type" : "journal",
    "object_id" : ["wdp:1234", "doi:10.1234/example"],
    "format" : None,
    "url" : None,
    "method" : "get",
    "referrer" : None,
    "user_agent" : "Mozilla ...",
    "user_id" : "user123",
    "user_org" : ["university-x"],
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "http://cottagelabs.com",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}

LEAVE_CORE_EVENT = {
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "audit",
    "event" : "leave",
    "object_type" : "journal",
    "object_id" : ["wdp:1234", "doi:10.1234/example"],
    "format" : None,
    "url" : None,
    "method" : "get",
    "referrer" : None,
    "user_agent" : "Mozilla ...",
    "user_id" : "user123",
    "user_org" : ["university-x"],
    "ip" : "255.255.255.255",
    "location" : {
        "lat" : "55.95",
        "lon" : "3.19",
    },
    "city" : "Edinburgh",
    "country" : "gbr",
    "source" : {
        "identifier" : "http://cottagelabs.com",
        "type": "DSpace",
        "archive_id" : "12345"
    }
}
