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
    ## Application versioning
    version: str = "1.0.0"

    ##########################################
    ## ES Connection

    es_hosts: List[str] = ["https://localhost:9200"]
    es_verify_certs: bool = True

    ##########################################
    ## File storage
    event_log_dir: str = paths.rel2abs(__file__, "..", "store", "logs")
    pipeline_output_dir: str = paths.rel2abs(__file__, "..", "store", "pipeline")
    event_log_max_bytes: int = 1024

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
    query_route = {
        "public" : {
            "event" : {
                "auth" : False,
                "role" : None,
                "dao" : "nglp.models.events.CoreEvent"
            }
        }
    }

    class Config:
        env_file = paths.rel2abs(__file__, "..", ".env")


settings = Settings()