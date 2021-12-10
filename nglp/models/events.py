import json

from typing import List

from nglp.lib.seamless import SeamlessMixin
from nglp.models import event_structs
from nglp.dao import BaseDAO, MAPPING_OPTS
from nglp.lib import es_data_mapping
from nglp.config import settings

from datetime import datetime


class EventModel(SeamlessMixin):
    def loggable(self):
        return json.dumps(self.__seamless__.data)

    def set_occurred_at(self, occurred_at=None, force=False):
        """
        Sets the occurred at date.  If no date is supplied then the occurred_at date will
        be set to the current timestamp.  If occurred_at is already present in the data
        it will not be set unless `force` is set to True.
        :return:
        """
        if self.__seamless__.get_single("occurred_at") is not None and not force:
            return

        if occurred_at is None:
            occurred_at = datetime.strftime(datetime.utcnow(), "%Y-%m-%dT%H:%M:%S.%fZ")

        self.__seamless__.set_single("occurred_at", occurred_at)

    @property
    def source(self):
        return self.__seamless__.get_single("source")

    @source.setter
    def source(self, source_record):
        self.__seamless__.set_with_struct("source", source_record)


class RequestEvent(EventModel):
    """Event which represents a "Request" event, which is a file download"""
    __SEAMLESS_STRUCT__ = [
        event_structs.REQUEST_EVENT_STRUCT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(RequestEvent, self).__init__(raw=raw)


class InvestigationEvent(EventModel):
    """Event which represents an "Investigation" event, which is a page view"""
    __SEAMLESS_STRUCT__ =  [
        event_structs.INVESTIGATION_EVENT_STRUCT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(InvestigationEvent, self).__init__(raw=raw)


class WorkflowTransitionEvent(EventModel):
    """Event which represents one of the range of workflow transition events"""
    __SEAMLESS_STRUCT__ =  [
        event_structs.WORKFLOW_TRANSITION_EVENT_STRUCT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(WorkflowTransitionEvent, self).__init__(raw=raw)


class ExportEvent(EventModel):
    """Event which represents a metadata export from an item (e.g. for a reference manager)"""
    __SEAMLESS_STRUCT__ =  [
        event_structs.EXPORT_EVENT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(ExportEvent, self).__init__(raw=raw)


class JoinEvent(EventModel):
    """Event which represents a staff member joining the editorial team for a journal"""
    __SEAMLESS_STRUCT__ =  [
        event_structs.JOIN_EVENT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(JoinEvent, self).__init__(raw=raw)


class LeaveEvent(EventModel):
    """Event which represents a staff member leaving the editorial team for a journal"""
    __SEAMLESS_STRUCT__ =  [
        event_structs.LEAVE_EVENT,
        event_structs.SOURCE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(LeaveEvent, self).__init__(raw=raw)


########################################
## Models for the full event structure

class CoreEventInterfaceMixin:
    @property
    def raw(self):
        return self.__seamless__.data

    @property
    def event(self):
        return self.__seamless__.get_single("event")

    @property
    def category(self):
        return self.__seamless__.get_single("category")

    @category.setter
    def category(self, val):
        self.__seamless__.set_with_struct("category", val)

    @property
    def object_ids(self):
        return self.__seamless__.get_list("object_id")

    @object_ids.setter
    def object_ids(self, val):
        self.__seamless__.set_with_struct("object_id", val)

    @property
    def ip(self):
        return self.__seamless__.get_single("ip")

    @property
    def city(self):
        return self.__seamless__.get_single("city")

    @city.setter
    def city(self, val):
        self.__seamless__.set_with_struct("city", val)

    @property
    def country(self):
        return self.__seamless__.get_single("country")

    @country.setter
    def country(self, val):
        self.__seamless__.set_with_struct("country", val)

    @property
    def lat_lon(self):
        return (self.__seamless__.get_single("location.lat"),
                self.__seamless__.get_single("location.lon"))

    @lat_lon.setter
    def lat_lon(self, tup):
        self.__seamless__.set_with_struct("location.lat", tup[0])
        self.__seamless__.set_with_struct("location.lon", tup[1])

    @property
    def occurred_at(self):
        return self.__seamless__.get_single("occurred_at")

    def clear_workflow_annotations(self):
        self.__seamless__.delete("workflow")

    def set_workflow_followed_by(self, state, date):
        self.__seamless__.set_with_struct("workflow.followed_by.state", state)
        self.__seamless__.set_with_struct("workflow.followed_by.date", date)

    def set_workflow_follows(self, state, delta):
        self.__seamless__.set_with_struct("workflow.follows.state", state)
        self.__seamless__.set_with_struct("workflow.follows.transition_time", delta)

    @property
    def workflow_followed_by(self):
        return (
            self.__seamless__.get_single("workflow.followed_by.state"),
            self.__seamless__.get_single("workflow.followed_by.date")
        )

    @property
    def workflow_follows(self):
        return (
            self.__seamless__.get_single("workflow.follows.state"),
            self.__seamless__.get_single("workflow.follows.transition_time")
        )

    @property
    def source_id(self):
        return self.__seamless__.get_single("source.identifier")

    @source_id.setter
    def source_id(self, val):
        self.__seamless__.set_with_struct("source.identifier", val)

    @property
    def archive_id(self):
        return self.__seamless__.get_single("source.archive_id")

    @archive_id.setter
    def archive_id(self, val):
        self.__seamless__.set_with_struct("source.archive_id", val)


class PipelineEvent(SeamlessMixin, CoreEventInterfaceMixin):
    __SEAMLESS_STRUCT__ = [
        event_structs.CORE_EVENT_STRUCTURE
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(PipelineEvent, self).__init__(raw=raw)

    @property
    def id(self):
        return self.__seamless__.get_single("id")

    @id.setter
    def id(self, val):
        self.__seamless__.set_with_struct("id", val)


class CoreEvent(SeamlessMixin, CoreEventInterfaceMixin, BaseDAO):
    """A core event model for the main analytics index, which can act as a container for
    any of the other events, plus additional context information required for analytics."""

    __index_type__ = "event"

    __SEAMLESS_STRUCT__ = [
        event_structs.CORE_EVENT_STRUCTURE,
        event_structs.CORE_EVENT_REQUIRED
    ]

    __SEAMLESS_COERCE__ = event_structs.COERCE

    def __init__(self, raw=None):
        super(CoreEvent, self).__init__(raw=raw)

    def mappings(self):
        return es_data_mapping.create_mapping(self.__seamless_struct__.raw, MAPPING_OPTS)

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

    @classmethod
    def find(cls, object_ids: List[str]=None, source_ids: List[str]=None, categories: List[str]=None, size: int=10):
        q = CoreEventQuery(object_ids, source_ids, categories, size)
        res = cls.query(q.query())
        return [cls(o.get("_source")) for o in res.get("hits", {}).get("hits", [])]


class EventModelFactory():
    model_map = {
        "request": RequestEvent,
        "investigation": InvestigationEvent,
        "export" : ExportEvent,
        "join" : JoinEvent,
        "leave" : LeaveEvent,
    }

    @classmethod
    def get(cls, event_type):
        if event_type in cls.model_map:
            return cls.model_map[event_type]
        if event_type in settings.workflow_transitions:
            return WorkflowTransitionEvent
        return None


class CoreEventQuery:
    def __init__(self, object_ids: List[str]=None, source_ids: List[str]=None, categories: List[str]=None, size: int=10):
        self._object_ids = object_ids
        self._source_ids = source_ids
        self._categories = categories
        self._size = size

    def query(self):
        musts = []
        if self._object_ids is not None:
            musts.append({"terms" : {"object_id.exact" : self._object_ids}})
        if self._source_ids is not None:
            musts.append({"terms" : {"source.identifier.exact" : self._source_ids}})
        if self._categories is not None:
            musts.append({"terms" : {"category.exact" : self._categories}})

        if len(musts) > 0:
            return {
                "query" : {
                    "bool" : {
                        "filter" : musts
                    }
                },
                "size" : self._size
            }

        return {"query" : {"match_all" : {}}, "size" : self._size}