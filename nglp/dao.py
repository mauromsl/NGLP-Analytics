from elasticsearch import Elasticsearch
import uuid
import time
import json

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

    @classmethod
    def makeid(cls):
        return str(uuid.uuid4().hex)

    @classmethod
    def query(cls, q, retry=50):
        """Perform a query on backend.
        """
        return cls._send_query(q, retry=retry)

    @classmethod
    def _send_query(cls, qobj, retry=50):
        """Actually send a query object to the backend."""
        r = None
        count = 0
        exception = None
        while count < retry:
            count += 1
            try:
                r = CONNECTION.search(body=qobj, index=cls.__index_type__)
                break
            except Exception as e:
                exception = e
            time.sleep(0.5)

        if r is not None:
            return r

        if exception is not None:
            raise exception

        raise Exception("Couldn't get the ES query endpoint to respond.  Also, you shouldn't be seeing this.")

    @classmethod
    def bulk(cls, records, idkey="id"):
        data = ""
        for r in records:
            if r.get(idkey) is None:
                r[idkey] = cls.makeid()
            data += json.dumps({"index" : {"_id": r[idkey]}}) + "\n"
            data = json.dumps(r) + "\n"
        return CONNECTION.bulk(body=data, index=cls.__index_type__)