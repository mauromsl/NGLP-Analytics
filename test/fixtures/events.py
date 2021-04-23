from copy import deepcopy


class EventFixtureFactory(object):

    @classmethod
    def request_event(cls):
        return deepcopy(REQUEST_EVENT)


REQUEST_EVENT = {
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