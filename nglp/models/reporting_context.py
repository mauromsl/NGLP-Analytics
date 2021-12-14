from nglp.lib.seamless import SeamlessMixin
from nglp.models import reporting_context_structs
from nglp.dao import BaseDAO, MAPPING_OPTS
from nglp.lib import es_data_mapping


class ReportingContextObject(SeamlessMixin, BaseDAO):

    __index_type__ = "reporting_context"

    __SEAMLESS_COERCE__ = reporting_context_structs.COERCE

    def __init__(self, raw=None):
        raw = self._enforce_type(raw)
        super(ReportingContextObject, self).__init__(raw=raw)

    def _enforce_type(self, raw):
        if raw is None:
            raw = {}
        raw["type"] = self.TYPE
        return raw

    def mappings(self):
        return es_data_mapping.create_mapping(self.__seamless_struct__.raw, MAPPING_OPTS)

    @property
    def source_id(self):
        return self.__seamless__.get_single("source_id")

    @source_id.setter
    def source_id(self, val):
        self.__seamless__.set_with_struct("source_id", val)

    @property
    def data(self):
        return self.__seamless__.data

    @property
    def id(self):
        return self.__seamless__.get_single("id")

    @id.setter
    def id(self, val):
        self.__seamless__.set_with_struct("id", val)

    @property
    def last_updated(self):
        return self.__seamless__.get_single("record_last_updated")

    @last_updated.setter
    def last_updated(self, val):
        self.__seamless__.set_with_struct("record_last_updated", val)

    @property
    def created_date(self):
        return self.__seamless__.get_single("record_created")

    @created_date.setter
    def created_date(self, val):
        self.__seamless__.set_with_struct("record_created", val)

    @property
    def contained_by(self):
        # NOTE: not all ReportingContextObjects support contained_by, and
        # in those cases this will just return None
        return self.__seamless__.get_single("contained_by", None)

    @classmethod
    def find_by_identifiers(cls, identifiers):
        # FIXME: we are just doing a single page query, assuming that we're going to get everything with 100
        # containers.  That's almost certainly true, but depending on what happens with the reporting
        # context later, we may need to scroll these values to get everything out
        q = FindByIdentifiers(identifiers, size=100)
        res = cls.query(q.query())
        return [ReportingContextFactory.make(o.get("_source")) for o in res.get("hits", {}).get("hits", [])]


class Publisher(ReportingContextObject):
    TYPE = "publisher"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT
    ]

    def __init__(self, raw=None):
        super(Publisher, self).__init__(raw=raw)


class Journal(ReportingContextObject):
    TYPE = "journal"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT,
        reporting_context_structs.JOURNAL_STRUCT
    ]

    def __init__(self, raw=None):
        super(Journal, self).__init__(raw=raw)


class Issue(ReportingContextObject):
    TYPE = "issue"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT
    ]

    def __init__(self, raw=None):
        super(Issue, self).__init__(raw=raw)


class Article(ReportingContextObject):
    TYPE = "article"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT,
        reporting_context_structs.ARTICLE_STRUCT
    ]

    def __init__(self, raw=None):
        super(Article, self).__init__(raw=raw)


class Author(ReportingContextObject):
    TYPE = "author"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT,
        reporting_context_structs.AUTHOR_STRUCT
    ]

    def __init__(self, raw=None):
        super(Author, self).__init__(raw=raw)


class User(ReportingContextObject):
    TYPE = "user"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT
    ]

    def __init__(self, raw=None):
        super(User, self).__init__(raw=raw)


class GenericContainer(ReportingContextObject):
    TYPE = "generic_container"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT
    ]

    def __init__(self, raw=None):
        super(GenericContainer, self).__init__(raw=raw)


class Organisation(ReportingContextObject):
    TYPE = "organisation"

    __SEAMLESS_STRUCT__ = [
        reporting_context_structs.ENTITY_STRUCT,
        reporting_context_structs.CONTAINABLE_STRUCT
    ]

    def __init__(self, raw=None):
        super(Organisation, self).__init__(raw=raw)


class ReportingContextFactory:
    map = {
        Publisher.TYPE: Publisher,
        Journal.TYPE: Journal,
        Issue.TYPE: Issue,
        Article.TYPE: Article,
        Author.TYPE: Author,
        User.TYPE: User,
        GenericContainer.TYPE: GenericContainer,
        Organisation.TYPE: Organisation
    }

    @classmethod
    def get(cls, t):
        return cls.map.get(t)

    @classmethod
    def make(cls, raw):
        t = raw.get("type")
        clazz = cls.get(t)
        return clazz(raw)


#######################################################
# ES Queries

class FindByIdentifiers:
    def __init__(self, identifiers, size=100):
        self._identifiers = identifiers
        self._size = size

    def query(self):
        return {
            "query" : {
                "bool" : {
                    "must" : [
                        {"terms" : {"identifiers.exact" : self._identifiers}}
                    ]
                }
            },
            "size" : self._size
        }