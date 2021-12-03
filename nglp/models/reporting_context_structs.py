from nglp.lib import seamless
from nglp.lib import coerce

COERCE = {
    "unicode": seamless.to_utf8_unicode,
    "unicode_upper": seamless.to_unicode_upper,
    "unicode_lower": seamless.to_unicode_lower,
    "integer": seamless.intify,
    "float": seamless.floatify,
    "url": seamless.to_url,
    "bool": seamless.to_bool,
    "datetime": seamless.to_datetime,
    "ip": coerce.to_ip
}


ENTITY_STRUCT = {
    "fields" : {
        "id" : {"coerce" : "unicode"},
        "record_created" : {"coerce" : "datetime"},
        "record_last_updated" : {"coerce" : "datetime"},
        "type" : {"coerce" : "unicode"},
        "source_id" : {"coerce" : "unicode"},
    },
    "lists" : {
        "identifiers" : {"contains" : "field", "coerce" : "unicode"}
    }
}

CONTAINABLE_STRUCT = {
    "lists" : {
        "contained_by" : {"contains" : "field", "coerce" : "unicode"}
    }
}

JOURNAL_STRUCT = {
    "objects" : ["journal"],
    "structs" : {
        "journal" : {
            "fields" : {
                "is_sponsored" : {"coerce" : "bool"},
                "academic_status" : {"coerce" : "unicode"},
                "publisher_id" : {"coerce" : "unicode"}
            }
        }
    }

}

ARTICLE_STRUCT = {
    "objects" : ["article"],
    "structs" : {
        "article" : {
            "fields" : {
                "publication_status" : {"coerce" : "unicode"}
            }
        }
    }

}

AUTHOR_STRUCT = {
    "objects" : ["author"],
    "structs" : {
        "author" : {
            "lists" : {
                "article_ids" : {"contains" : "field", "coerce" : "unicode"}
            }
        }
    }

}

SOURCE_STRUCT = {
    "fields" : {
        "type" : {"coerce" : "unicode"}
    },
    "lists" : {
        "identifiers" : {"contains" : "field", "coerce" : "unicode"}
    }
}