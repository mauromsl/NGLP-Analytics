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

    ##########################################
    ## Source systems
    sources: List[dict] = [ # for reasons unclear, I have been unable to override this in .env
        {
            "type" : "WDP",
            "identifier": "http://example.com/wdp"
        }
    ]

    ##########################################
    ## Workflow events configuration
    workflow_transitions: List[str] = [
        "submit",
        "first_decision",
        "review",
        "accept",
        "publish"
    ]

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
    ## Kafka Broker configuration #todo: pass this as enviroment variable since it currently has container specific info
    kafka_broker = "kafka://kafka:19092"

    class Config:
        env_file = paths.rel2abs(__file__, "..", ".env")


settings = Settings()
