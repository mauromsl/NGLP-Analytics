from fastapi import APIRouter, HTTPException, Request, Response
import json
import urllib.request
from urllib.parse import urlparse
from nglp.lib.query import QueryService

router = APIRouter(
    prefix="/query"
)

@router.get("/{path:path}", include_in_schema=False)
@router.post("/{path:path}", include_in_schema=False)
async def query(path: str, request: Request, response: Response):
    pathparts = path.strip('/').split('/')
    if len(pathparts) < 2:
        raise HTTPException(status_code=400)
    domain = pathparts[0]
    index_type = pathparts[1]

    q = None
    # if this is a POST, read the contents out of the body
    if request.method == "POST":
        q = request.json()
    # if there is a source param, load the json from it
    elif 'source' in request.query_params:
        q = json.loads(urllib.parse.unquote(request.query_params['source']))

    queryService = QueryService()
    res = queryService.search(domain, index_type, q, None, request.values)

    # if we need jsonp, issue it
    callback = request.query_params.get('callback', False)
    if callback:
        content = str(callback) + '(' + json.dumps(res) + ')'
        return Response(content=content, media_type="application/javascript")
    else:
        return res

    # try:
    #     account = None
    #     if current_user is not None and not current_user.is_anonymous:
    #         account = current_user._get_current_object()
    #     queryService = DOAJ.queryService()
    #     res = queryService.search(domain, index_type, q, account, request.values)
    # except exceptions.AuthoriseException as e:
    #     abort(403)
    # except exceptions.NoSuchObjectException as e:
    #     abort(404)
    #
    # resp = make_response(json.dumps(res))
    # resp.mimetype = "application/json"
    # return resp