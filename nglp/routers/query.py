from fastapi import APIRouter

router = APIRouter(
    prefix="/query"
)


@router.get("/")
async def query():
    return {"message" : "query endpoint"}