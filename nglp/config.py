from pydantic import BaseSettings
from typing import List
from nglp.lib import paths


class Settings(BaseSettings):
    ##########################################
    # Properties you MUST override in .env

    # We are using the Maxmind geo database (e.g. http://www.maxmind.com/app/geolitecity)
    # You will need to register with them, and download either their free database GeoLiteCity
    # or their paid-for database GeoIP2.  https://dev.maxmind.com/geoip/docs/databases/city-and-country?lang=en
    geo_database: str = None

    ##########################################
    ## Application
    version: str = "1.0.0"
    host: str = "0.0.0.0"
    port: str = "8000"  # This is a string to match when passed in via environment variable

    ##########################################
    ## ES Connection

    es_hosts: List[str] = ["https://localhost:9200"]
    es_verify_certs: bool = True
    es_index_namespace: str = ""

    ##########################################
    ## File storage

    event_log_dir: str = paths.rel2abs(__file__, "..", "store", "logs")
    pipeline_output_dir: str = paths.rel2abs(__file__, "..", "store", "pipeline")
    event_log_max_bytes: int = 1024

    store_impl: str = "nglp.lib.store.StoreLocal"
    store_impl_tmp: str = "nglp.lib.store.TempStore"

    store_s3_scopes: dict = {
        "origins_archive" : {
            "aws_access_key_id" : "put this in your .env",
            "aws_secret_access_key" : "put this in your .env"
        }
    }

    store_local_dir: str = paths.rel2abs(__file__, "..", "store", "local")
    store_local_write_buffer_size: int = 16777216

    store_tmp_dir: str = paths.rel2abs(__file__, "..", "store", "tmp")
    store_tmp_write_buffer_size: int = 16777216

    origins_archive_container: str = "origins_archive"

    ##########################################
    ## Source systems

    # The list of sources that can send events to the system.  This list
    # of sources should be reflected in the workflow events configuration
    # below too
    #
    # NOTE: this entire configuration is for testing, you need to set your own
    # in your .env
    sources: List[dict] = [
        {
            "type" : "WDP",
            "identifier": "http://wdp.example.com/"
        },
        {
            "type": "WDP",
            "identifier": "http://example.com/wdp"
        },
        {
            "type": "Janeway",
            "identifier": "http://janeway.example.com"
        },
        {
            "type": "Test",
            "identifier": "http://cottagelabs.com"
        }
    ]

    ##########################################
    ## Workflow events configuration

    # This holds all the workflow events that can be emitted / recorded by
    # the specified source.  If you are adding a source you MUST update the
    # configuration to reflect its workflow, otherwise workflow events will
    # not be detected and categorised
    #
    # NOTE: this entire configuration is just for testing, you need to set your
    # own in your .env
    workflow_transitions: dict = {
        "http://cottagelabs.com" : [
            "submit",
            "first_decision",
            "review",
            "accept",
            "publish"
        ],
        "http://example.com/wdp": [
            "submit",
            "first_decision",
            "review",
            "accept",
            "publish"
        ],
        "http://janeway.example.com" : [
            "submit",
            "review",
            "accept",
            "publish"
        ],
        "http://wdp.example.com/" : [
            "submit",
            "publish"
        ]
    }

    # This holds a slightly different set of information to the above workflow_transitions
    # configuration, directed specifically at the UI.  Note that it MUST have the same structure
    # as the workflow_transitions configuration, except that each workflow label must be in a
    # 2 element array with the second element being the label to appear in the UI.
    #
    # TODO: I don't love that this is a separate but almost identical configuration, but as it
    # is for the UI rather than the backend pipeline/precompute cycles, it also feels like
    # it should be separate.  For now we just have to take care that they match, and in the future
    # maybe we will merge them
    #
    # NOTE: this entire configuration is just for testing, you need to set your
    # own in your .env
    workflow_transitions_ui_labels: dict = {
        "http://cottagelabs.com" : [
            ["submit", "Submitted"],
            ["first_decision", "First Decision"],
            ["review", "Reviewed"],
            ["accept", "Accepted"],
            ["publish", "Published"]
        ],
        "http://example.com/wdp": [
            ["submit", "Submitted"],
            ["first_decision", "First Decision"],
            ["review", "Reviewed"],
            ["accept", "Accepted"],
            ["publish", "Published"]
        ],
        "http://janeway.example.com" : [
            ["submit", "Submitted"],
            ["review", "Reviewed"],
            ["accept", "Accepted"],
            ["publish", "Published"]
        ],
        "http://wdp.example.com/" : [
            ["submit", "Submitted"],
            ["publish", "Published"]
        ]
    }

    ###########################################
    ## Query route configuration
    query_route: dict = {
        "public" : {
            "event" : {
                "auth" : False,
                "role" : None,
                "dao" : "nglp.models.events.CoreEvent"
            }
        }
    }

    ###########################################
    ## Kafka Broker configuration
    kafka_broker = "KAFKA URL"

    # Precompute wait time in seconds
    precompute_wait_time = 30

    class Config:
        env_file = paths.rel2abs(__file__, "..", ".env")


settings = Settings()
