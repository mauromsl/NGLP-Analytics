from elasticsearch import Elasticsearch, NotFoundError, TransportError
import uuid
import time
import json
from datetime import datetime

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

    def __init__(self, raw=None):
        pass

    @classmethod
    def index_name(cls):
        return settings.es_index_namespace + cls.__index_type__

    def mappings(self):
        raise NotImplementedError()

    @property
    def data(self):
        raise NotImplementedError()

    def set_id(self, id=None):
        """Set the id if one is passed, or set a default id if one doesn't already exist"""
        if id is None:
            if self.id is None:
                self.id = self.makeid()
        else:
            self.id = self.makeid()

    @property
    def id(self):
        raise NotImplementedError()

    @id.setter
    def id(self, val):
        raise NotImplementedError()

    @property
    def last_updated(self):
        raise NotImplementedError()

    @last_updated.setter
    def last_updated(self, val):
        raise NotImplementedError()

    @property
    def created_date(self):
        raise NotImplementedError()

    @created_date.setter
    def created_date(self, val):
        raise NotImplementedError()

    def initialise_index(self):
        mappings = self.mappings()
        if not CONNECTION.indices.exists(index=self.index_name()):
            CONNECTION.indices.create(index=self.index_name(), body={
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
                r = CONNECTION.search(body=qobj, index=cls.index_name())
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
            data += json.dumps(r) + "\n"
        return CONNECTION.bulk(body=data, index=cls.index_name())

    def save(self):
        self.set_id()
        now = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
        self.last_updated = now
        if not self.created_date:
            self.created_date = now

        d = json.dumps(self.data)
        return CONNECTION.index(self.index_name(), body=d, id=self.id)

    @classmethod
    def pull(cls, id):
        try:
            # out = requests.get(cls.target() + id_)
            out = CONNECTION.get(cls.index_name(), id)
        except NotFoundError:
            return None
        except TransportError as e:
            raise Exception("ES returned an error: {x}".format(x=json.dumps(e.info)))
        except Exception as e:
            return None
        if out is None:
            return None

        return cls(out.get("_source"))