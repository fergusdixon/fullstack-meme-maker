from typing import Any, List

from fastapi import APIRouter, HTTPException

from app import schemas
from app.core.config import base_images

router = APIRouter()


@router.get("/", response_model=List[schemas.Image])
async def get_image_list() -> Any:
    """
    Gets the list of images to generate memes from
    """
    with open("app/assets/base_meme_definition.json") as image_list:
        return list(base_images.values())


@router.post("/", responses={200: {"content": {"image/png": {}}, "description": "The generated meme"}})
async def create_meme(meme: schemas.Meme) -> Any:
    """ "
    Create a meme from a base image
    """
    if not base_images.get(str(meme.uuid)):
        raise HTTPException(status_code=404, detail=f"Image {meme.uuid} not found")
