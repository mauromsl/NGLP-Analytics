from elasticsearch import Elasticsearch

from nglp.config import settings

CONNECTION = Elasticsearch(
    settings.es_hosts,
    verify_certs=settings.es_verify_certs
)

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

    """The name of the index to be created - subclasses should override"""
    __index_type__ = "index_type"

    def mappings(self):
        raise NotImplementedError()

    def initialise_index(self):
        mappings = self.mappings()
        if not CONNECTION.indices.exists(index=self.__index_type__):
            CONNECTION.indices.create(index=self.__index_type__, body={
                "mappings" : mappings
            })