from nglp.lib import seamless
from nglp.lib import coerce

COERCE = {
    "unicode": seamless.to_utf8_unicode,
    "unicode_upper" : seamless.to_unicode_upper,
    "unicode_lower" : seamless.to_unicode_lower,
    "integer": seamless.intify,
    "float": seamless.floatify,
    "url": seamless.to_url,
    "bool": seamless.to_bool,
    "datetime" : seamless.to_datetime,
    "ip" : coerce.to_ip
}

"""
Example Request event

{
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
"""

REQUEST_EVENT_STRUCT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower"},
        "object_type" : {"coerce" : "unicode_lower", "allowed_values" : ["file"]},
        "format" : {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer" : {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce": "ip"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce" : "unicode"}
    },
    "objects" : [],
    "required" : [
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
    "event" : "investigation",
    "object_type" : "splash page",
    "object_id": ["12345"],
    "url" : "/community/university-x/",
    "method" : "get",
    "referrer" : "https://cottagelabs.com/nglp",
    "user_agent" : "Mozilla",
    "ip" : "255.255.255.255"
}
"""


INVESTIGATION_EVENT_STRUCT = {
    "fields" : {
        "event" : {"coerce" : "unicode_lower"},
        "object_type": {"coerce" : "unicode_lower"},
        "url" : {"coerce" : "unicode"},
        "method" : {"coerce" : "unicode_lower", "allowed_values" : ["get"]},
        "referrer": {"coerce" : "unicode"},
        "user_agent" : {"coerce" : "unicode"},
        "ip" : {"coerce" : "ip"}
    },
    "lists" : {
        "object_id" : {"contains" : "field", "coerce": "unicode"}
    },
    "objects" : [],
    "required": [
        "event",
        "object_type",
        "object_id",
        "url",
        "ip"
    ]
}