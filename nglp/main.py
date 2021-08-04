import uvicorn

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from nglp.routers import query, api
from nglp.config import settings
from nglp.lib import paths

app = FastAPI()
app.include_router(query.router)
app.include_router(api.router)
app.mount("/static", StaticFiles(directory=paths.rel2abs(__file__, "static")), name="static")

templates = Jinja2Templates(directory=paths.rel2abs(__file__, "templates"))

@app.get("/", include_in_schema=False)
async def root():
    return {"message": "Welcome to the NGLP Analytics Application"}


@app.get("/search", response_class=HTMLResponse, include_in_schema=False)
async def search(request: Request):
    return templates.TemplateResponse("search.html", {"request": request, "config": settings})


@app.get("/g001", include_in_schema=False)
async def g001(request: Request):
    return templates.TemplateResponse("g001.html", {"request" : request, "config" : settings})


@app.get("/g014", include_in_schema=False)
async def g014(request: Request):
    return templates.TemplateResponse("g014.html", {"request" : request, "config" : settings})


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, debug=True)
