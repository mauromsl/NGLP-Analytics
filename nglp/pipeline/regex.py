import re


#~~DOI:Regex~~
DOI = r"^((https?://)?((dx\.)?doi\.org/|hdl\.handle\.net/)|doi:|info:doi/|info:hdl/)?(?P<id>10\.\S+/\S+)$"
DOI_COMPILED = re.compile(DOI, re.IGNORECASE)

#~~HANDLE:Regex~~
HANDLE = r"^((https?:\/\/)?((dx\.)?hdl\.handle\.net\/)|info:hdl\/)?(?P<id>(?!10\.)\d+\.\S+\/\S+)$"
HANDLE_COMPILED = re.compile(HANDLE, re.IGNORECASE)

#~~ISSN:Regex~~
ISSN = r'(?P<id>\d{4}-\d{3}[\d|X|x]{1}$)'
ISSN_COMPILED = re.compile(ISSN)

#~~URL:Regex~~
HTTP_URL = r'^https?:\/\/(?P<id>([^\/:]+\.[a-z]{2,63}|(?:[0-9]{1,3}\.){3}[0-9]{1,3})(:[0-9]+)?(\/.*)?)$'
HTTP_URL_COMPILED = re.compile(HTTP_URL, re.IGNORECASE)


def is_match(pattern, string, *args, **kwargs):
    match = re.match(pattern, string, *args, **kwargs)
    return match is not None


def group_match(pattern, string, name, *args, **kwargs):
    match = re.match(pattern, string, *args, **kwargs)
    if match is None:
        return None
    return match.group(name)
