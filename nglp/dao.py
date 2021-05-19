STRING_EXACT = {
    "type": "text",
    "fields": {
        "exact": {
            "type": "keyword"
        }
    }
}

SEAMLESS_TO_MAPPING_DEFAULTS = {
    "unicode": STRING_EXACT,
    "unicode_upper": STRING_EXACT,
    "unicode_lower": STRING_EXACT,
    "integer": {
        "type": "long"
    },
    "float": {
        "type": "float"
    },
    "url": STRING_EXACT,
    "bool": {
        "type": "boolean"
    },
    "datetime": {
        "type": "date",
        "format": "dateOptionalTime"
    },
    "ip" : {"type" : "ip"}
}

MAPPING_OPTS = {
    "dynamic": None,
    "coerces": SEAMLESS_TO_MAPPING_DEFAULTS,
    "exceptions": {
        "location" : {
            "type" : "geo_point"
        }
    }
}

class BaseDAO(object):
    """Basic Data Access Object to be used by any objects which need to persist their
    state in Elasticsearch"""
    def mappings(self):
        raise NotImplementedError()