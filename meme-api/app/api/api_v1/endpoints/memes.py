from typing import Any, List

from fastapi import APIRouter

from app import schemas
from app.crud import meme_crud

router = APIRouter()


@router.get("", response_model=List[schemas.Meme])
async def get_image_list() -> Any:
    """
    Gets the list of images to generate memes from
    """
    return await meme_crud.retrieve_memes()
