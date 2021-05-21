from elasticsearch import Elasticsearch

# FIXME: this is ok while we're still in early stage dev, but very soon this is going to need to
# go out to a configuration file, and the live version is going to need to not be committed to git
CONNECTION = Elasticsearch(
    [
        "https://admin:admin@localhost:9200/"
    ],
    verify_certs=False
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
        CONNECTION.indices.create(index=self.__index_type__, body={
            "mappings" : mappings
        })