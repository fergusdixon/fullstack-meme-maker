from typing import Any, List

from fastapi import APIRouter

from app import schemas
from app.core.config import base_images

router = APIRouter()


@router.get("", response_model=List[schemas.Image])
def get_image_list() -> Any:
    """
    Gets the list of images to generate memes from
    """
    with open("app/assets/base_meme_definition.json") as image_list:
        return list(base_images.values())
