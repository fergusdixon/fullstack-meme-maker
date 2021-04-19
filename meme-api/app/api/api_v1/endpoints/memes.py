from typing import Any, List

from fastapi import APIRouter

from app import schemas

router = APIRouter()


@router.get("/images", response_model=List[schemas.Image])
async def get_image_list() -> Any:
    """
    Gets the logged in user's transactions
    """
    return [{"path": "/test"}]
