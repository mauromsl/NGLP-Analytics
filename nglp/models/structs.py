from nglp.lib import seamless
from nglp.lib import coerce

COERCE = {
    "unicode": seamless.to_utf8_unicode,
    "unicode_upper": seamless.to_unicode_upper,
    "unicode_lower": seamless.to_unicode_lower,
    "integer": seamless.intify,
    "float": seamless.floatify,
    "url": seamless.to_url,
    "bool": seamless.to_bool,
    "datetime": seamless.to_datetime,
    "ip": coerce.to_ip
}

SOURCE = {
    "objects" : ["source"],
    "structs" : {
        "source" : {
            "fields": {
                "type": {"coerce": "unicode_lower"},
                "identifier": {"coerce": "unicode"}
            }
        }
    }
}


"""
Example Request event

{
    "event": "request",
    "object_type": "File",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format": "application/pdf",
    "url": "/article/12345/download.pdf",
    "method": "get",
    "referrer": "https://cottagelabs.com/nglp",
    "user_agent": "Mozilla",
    "ip": "255.255.255.255"
}
"""

REQUEST_EVENT_STRUCT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["request"]},
        "object_type" : {"coerce" : "unicode_lower", "allowed_values" : ["file"]},
        "format" : {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer" : {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce": "ip"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "format",
        "url",
        "ip"
    ]
}


"""
Example Investigation event
{
    "event": "investigation",
    "object_type": "splash page",
    "object_id": ["12345"],
    "url": "/community/university-x/",
    "method": "get",
    "referrer": "https://cottagelabs.com/nglp",
    "user_agent": "Mozilla",
    "ip": "255.255.255.255"
}
"""

INVESTIGATION_EVENT_STRUCT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["investigation"]},
        "object_type": {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer": {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce" : "ip"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "url",
        "ip"
    ]
}


"""
Example Workflow Transition Event in JSON
{
  "event": "first_decision",
  "object_type": "article",
  "object_id": ["wdp:1234", "doi:10.1234/example"],
  "user_id": "user123",
}

"""

WORKFLOW_TRANSITION_EVENT_STRUCT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower"},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["article"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}


"""
Example Export Event in JSON
{
  "event": "export",
  "object_type": "article",
  "object_id": ["wdp:1234", "doi:10.1234/example"],
  "format": "application/x-research-info-systems",
  "url": "https://wdp.org/article/1234/export.ris",
  "method": "get",
  "referrer": "https://cottagelabs.com/nglp",
  "user_agent": "Mozilla ...",
  "ip": "255.255.255.255"
}
"""

EXPORT_EVENT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["export"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["article"]},
        "format" : {"coerce" : "unicode"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer": {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce" : "ip"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "format",
        "ip"
    ]
}


"""
Example Join Event in JSON
{
  "event": "join",
  "object_type": "journal",
  "object_id": ["wdp:1234", "doi:10.1234/example"],
  "user_id": "user123",
}
"""

JOIN_EVENT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["join"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["journal"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}


"""
Example Leave Event in JSON
{
  "event": "leave",
  "object_type": "journal",
  "object_id": ["wdp:1234", "doi:10.1234/example"],
  "user_id": "user123",
}

"""

LEAVE_EVENT = {
    "fields" : {
        "occurred_at" : {"coerce" : "datetime"},
        "event" : {"coerce" : "unicode_lower", "allowed_values" : ["leave"]},
        "object_type": {"coerce" : "unicode_lower", "allowed_values" : ["journal"]},
        "user_id" : {"coerce" : "unicode"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"}
    },
    "objects": [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "user_id"
    ]
}

"""
Example core data model event (using all the fields, even if they're not strictly allowed)
 
{
    "occurred_at": "2021-04-29T12:00:00Z",
    "category": "usage",
    "event": "request",
    "object_type": "file",
    "object_id": ["12345", "doi:10.12345/hello"],
    "format": "application/pdf",
    "container": ["12346", "12347", "12348"],
    "search_keywords": ["science", "subject:medicine"],
    "share": {
        "source_id": "twitter",
        "subj_id": "https://twitter.com/tweet/2"
    },
    "url": "/article/12345/download.pdf",
    "method": "get",
    "referrer": "https://cottagelabs.com/nglp",
    "user_agent": "Mozilla",
    "user_id": "test321",
    "user_org": ["ror:sjdfwefwqlk"],
    "ip": "255.255.255.255",
    "location": {
        "lat": "55.95",
        "lon": "3.19",
    }
    "city": "Edinburgh"
    "country": "gbr",
    "source": {
        "identifier": "https://cdl.dspace.org",
        "type": "DSpace",
        "archive_id": "12345"
    }
    "workflow": {
        "follows": {
            "state": "workflow state previous to this",
            "transition_time": 12345
        },
        "followed_by": {
            "state": "workflow state that follows this",
            "date": "2021-05-29T12:00:00Z",
        }
    }
}

"""

CORE_EVENT_REQUIRED = {
    "objects": ["source"],
    "structs": {
        "source": {
            "required": [
                "identifier",
                "type"#,
                #"archive_id"   # Removing this for the time being, as this part of the pipeline has not yet been developed
            ]
        }
    },
    "required": [
        "occurred_at",
        "category",
        "event",
        "object_type",
        "object_id",
        "source"
    ]
}


CORE_EVENT_STRUCTURE = {
    "fields": {
        "id" : {"coerce" : "unicode"},
        "occurred_at": {"coerce": "datetime"},
        "event": {"coerce": "unicode_lower"},
        "category": {"coerce": "unicode_lower"},
        "object_type": {"coerce": "unicode_lower"},
        "format": {"coerce": "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method": {"coerce": "unicode_lower"},
        "referrer": {"coerce": "unicode"},
        "user_agent": {"coerce": "unicode"},
        "user_id": {"coerce": "unicode"},
        "ip": {"coerce": "ip"},
        "city": {"coerce": "unicode"},
        "country": {"coerce": "unicode"},
        "user_org": {"coerce": "unicode"},
        "record_created": {"coerce": "datetime"},
        "record_last_updated" : {"coerce" : "datetime"}
    },
    "lists": {
        "object_id": {"contains": "field", "coerce": "unicode"},
        "container": {"contains": "field", "coerce": "unicode"},
        "search_keywords": {"contains": "field", "coerce": "unicode_lower"}  # Ask CIC if they have a plan for
        # capitalisation in search queries
    },
    "objects": ["share", "location", "source", "workflow"],
    "structs": {
        "share": {
            "fields": {
                "source_id": {"coerce": "unicode"},
                "subj_id": {"coerce": "unicode"}
            }
        },
        "location": {
            "fields": {
                "lat": {"coerce": "float"},
                "lon": {"coerce": "float"}
            }
        },
        "source": {
            "fields": {
                "type": {"coerce": "unicode_lower"},
                "identifier": {"coerce": "unicode"},
                "archive_id": {"coerce": "unicode"}
            }
        },
        "workflow": {
            "objects": ["follows", "followed_by"],
            "structs": {
                "follows": {
                    "fields": {
                        "state": {"coerce": "unicode"},
                        "transition_time": {"coerce": "integer"}
                    }
                },
                "followed_by": {
                    "fields": {
                        "state": {"coerce": "unicode"},
                        "date": {"coerce": "datetime"}
                    }
                }
            }
        }
    }
}

