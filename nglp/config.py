from pydantic import BaseSettings
from typing import List
from nglp.lib import paths


class Settings(BaseSettings):
    es_hosts: List[str] = ["https://localhost:9200"]
    es_verify_certs: bool = True
    version: str = "1.0.0"
    event_log_dir: str = paths.rel2abs(__file__, "..", "store", "logs")
    event_log_max_bytes: int = 1024
    workflow_transitions: List[str] = [
        "submit",
        "first_decision",
        "review",
        "accept",
        "publish"
    ]
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
        env_file = ".env"


settings = Settings()