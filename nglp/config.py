from pydantic import BaseSettings
from typing import List


class Settings(BaseSettings):
    host: str = "0.0.0.0"
    port: str = "8000"      # This is a string to match when passed in via environment variable
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
