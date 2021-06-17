from pydantic import BaseSettings
from typing import List


class Settings(BaseSettings):
    es_hosts: List[str] = ["https://localhost:9200"]
    es_verify_certs: bool = True
    version: str = "1.0.0"
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