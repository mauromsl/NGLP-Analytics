import logging.config
import os

from fastapi import APIRouter, HTTPException, Request

from nglp.models.events import EventModelFactory
from nglp.lib.seamless import SeamlessException
from nglp.config import settings
from nglp.lib.openapi import OpenAPISupport
from nglp.models.events import RequestEvent

logging.config.dictConfig({
    "version" : 1,
    "formatters" : {
        "simple" : {
            "format": "%(message)s"
        }
    },
    "handlers" : {
        "event_file" : {
            "class" : "logging.handlers.RotatingFileHandler",
            "level" : "INFO",
            "formatter" : "simple",
            "filename" : os.path.join(settings.event_log_dir, "events.log"),
            "maxBytes" : settings.event_log_max_bytes
        }
    },
    "loggers" : {
        "event_api" : {
            "level" : "INFO",
            "handlers" : ["event_file"]
        }
    }
})
LOG = logging.getLogger("event_api")

router = APIRouter(
    prefix="/api"
)

@router.post("/", status_code=201, openapi_extra=OpenAPISupport().request_body_section(RequestEvent().__seamless_struct__))
async def event(request: Request):
    payload = await request.json()
    EventModel = EventModelFactory.get(payload.get("event"))
    if EventModel is None:
        raise HTTPException(status_code=400, detail="Unrecognised event type")
    try:
        m = EventModel(payload)
    except SeamlessException as e:
        raise HTTPException(status_code=400, detail=e.message)
    m.set_occurred_at()
    LOG.info(m.loggable())
    return {"status" : "success"}