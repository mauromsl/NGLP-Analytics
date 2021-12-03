from copy import deepcopy

class ReportingContextFixtureFactory:
    @classmethod
    def publisher(cls):
        return deepcopy(PUBLISHER)

    @classmethod
    def journal(cls):
        return deepcopy(JOURNAL)

    @classmethod
    def issue(cls):
        return deepcopy(ISSUE)

    @classmethod
    def article(cls):
        return deepcopy(ARTICLE)

    @classmethod
    def author(cls):
        return deepcopy(AUTHOR)

    @classmethod
    def user(cls):
        return deepcopy(USER)

    @classmethod
    def generic_container(cls):
        return deepcopy(GENERIC_CONTAINER)

    @classmethod
    def organisation(cls):
        return deepcopy(ORGANISATION)


PUBLISHER = {
    "id" : "publisher1",
    "type" : "publisher",
    "source_id" : "test_source",
    "identifiers" : [
        "ror:12345/pub"
    ]
}

JOURNAL = {
    "id" : "journal1",
    "type" : "journal",
    "source_id" : "test_source",
    "identifiers" : [
        "1234-5678",
        "9876-987X"
    ],
    "contained_by" : [
        "ror:12345/pub"
    ],
    "journal" : {
        "is_sponsored" : True,
        "academic_status" : "academic",
        "publisher_id" : "ror:12345/pub"
    }
}

ISSUE = {
    "id" : "issue1",
    "type" : "issue",
    "source_id" : "test_source",
    "identifiers" : [
        "https://example.com/1234-5678/issue7"
    ],
    "contained_by" : [
        "1234-5678",
        "9876-987X"
    ]
}

ARTICLE = {
    "id" : "article1",
    "type" : "article",
    "source_id" : "test_source",
    "identifiers" : [
        "doi:10.1234/xxjhh"
    ],
    "contained_by" : [
        "https://example.com/1234-5678/issue7"
        "1234-5678",
        "9876-987X"
    ],
    "article" : {
        "publication_status" : "published"
    }
}

AUTHOR = {
    "id" : "author1",
    "type" : "author",
    "source_id" : "test_source",
    "identifiers" : [
        "orcid:1111-1111-1111-1111"
    ],
    "contained_by" : [
        "ror:9876/uni"
    ],
    "author" : {
        "article_ids" : [
            "doi:10.1234/xxjhh"
        ]
    }
}

USER = {
    "id" : "user1",
    "type" : "user",
    "source_id" : "test_source",
    "identifiers" : [
        "miasw4iow9"
    ],
    "contained_by" : [
        "ror:9876/uni"
    ]
}

GENERIC_CONTAINER = {
    "id" : "generic_container1",
    "type" : "generic_container",
    "source_id" : "test_source",
    "identifiers" : [
        "ror:82392/dept"
    ],
    "contained_by" : [
        "ror:9876/uni"
    ]
}

ORGANISATION = {
    "id" : "organisation1",
    "type" : "organisation",
    "source_id" : "test_source",
    "identifiers" : [
        "ror:9876/uni"
    ],
    "contained_by" : [
        "ror:9876/unigroup"
    ]
}


