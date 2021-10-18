from copy import deepcopy

class NormaliseFixtureFactory(object):

    @classmethod
    def broken_doi_id(cls):
        return deepcopy(BROKEN_DOI_ID)

    @classmethod
    def broken_issn_id(cls):
        return deepcopy(BROKEN_ISSN_ID)
    @classmethod
    def broken_handle_id(cls):
        return deepcopy(BROKEN_HANDLE_ID)
    @classmethod
    def broken_http_url_id(cls):
        return deepcopy(BROKEN_HTTP_URL_ID)

    @classmethod
    def single_doi_id(cls):
        return deepcopy(SINGLE_DOI_ID)

    @classmethod
    def multiple_doi_id(cls):
        return deepcopy(MULTIPLE_DOI_ID)

    @classmethod
    def multiple_handle_id(cls):
        return deepcopy(MULTIPLE_HANDLE_ID)

    @classmethod
    def multiple_issn_id(cls):
        return deepcopy(MULTIPLE_ISSN_ID)

    @classmethod
    def multiple_http_id(cls):
        return deepcopy(MULTIPLE_HTTP_URL_ID )

    @classmethod
    def multiple_mix_id(cls):
        return deepcopy(MULTIPLE_MIX_ID)

BROKEN_DOI_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https://doi.org/20.1109/5.771073",
    ]
}

BROKEN_ISSN_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "2624-59XX",
    ]
}

BROKEN_HANDLE_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https:///dx.hdl.handle.net/30.1234.bla/blaaaa",
    ]
}

BROKEN_HTTP_URL_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https:///www.etsy.com/uk/listing/896635620/baby-muslin-comforters-gift-set-new-baby?ref=hp_prn-4&frs=1&bes=1",
    ]
}

SINGLE_DOI_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https://doi.org/10.1109/5.771073",
    ]
}

MULTIPLE_DOI_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https://doi.org/10.1000/j.1541-1338.2004.00081.x",
        "hdl.handle.net/10.10002/ctpp.201400073",
        "10.1001/2012.jama.10159",
    ]
}

MULTIPLE_HANDLE_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "info:hdl/11.1234/xxxx",
        "https://dx.hdl.handle.net/30.1234/bla/blaaaa",
        "info:hdl/20.4567/someotherstuffhere",
    ]
}

MULTIPLE_ISSN_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "2624-599X",
        "2076-3387",
        "2218-273X",
    ]
}

MULTIPLE_HTTP_URL_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https://en.wikipedia.org/wiki/Handle_System",
        "http://docs.google.com/document/d/1aa02icZyr6a-qtD6pxR-lw84p2yLHlYAY/edit#",
        "https://www.etsy.com/uk/listing/896635620/baby-muslin-comforters-gift-set-new-baby?ref=hp_prn-4&frs=1&bes=1",
    ]
}

MULTIPLE_MIX_ID = {
    "event": "request",
    "object_type": "file",
    "format": "image/png",
    "url": "https://burgess.info/categories/author/",
    "ip": "154.158.158.61",
    "object_id": [
        "https://en.wikipedia.org/wiki/Handle_System",
        "10.1000/j.1541-1338.2004.00081.x",
        "2624-599X",
        "info:hdl/20.4567/someotherstuffhere",
    ]
}