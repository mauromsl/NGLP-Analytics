import uvicorn

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.responses import FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from nglp.routers import query
from nglp.config import settings

app = FastAPI()
app.include_router(query.router)
app.mount("/static", StaticFiles(directory="nglp/static"), name="static")

templates = Jinja2Templates(directory="nglp/templates")


@app.get("/")
async def root():
    return {"message": "Welcome to the NGLP Analytics Application"}


@app.get("/search", response_class=HTMLResponse)
async def search(request: Request):
    return templates.TemplateResponse("search.html", {"request": request, "config": settings})


@app.get("/g001")
async def g001(request: Request):
    return templates.TemplateResponse("g001.html", {"request" : request, "config" : settings})


@app.get("/g014")
async def g014(request: Request):
    return templates.TemplateResponse("g014.html", {"request" : request, "config" : settings})


@app.get("/favicon.ico")
async def icon():
    return FileResponse('nglp/static/img/favicon.ico')


if __name__ == "__main__":
    uvicorn.run("main:app", host=settings.host, port=int(settings.port), reload=True, debug=True, proxy_headers=True,
                forwarded_allow_ips='*')
