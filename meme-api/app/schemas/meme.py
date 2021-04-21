from typing import List
from uuid import UUID

import pydantic
from pydantic import BaseModel

from .text_field import TextField


class Meme(BaseModel):
    uuid: UUID
    name: str
    enabled: bool
    text_fields: List[TextField]
    thumbnail_path: str = None
    high_res_path: str = None

    @pydantic.validator("thumbnail_path", pre=True, always=True)
    def get_thumbnail_path(cls, v, *, values, **kwargs):
        return f"/api/static/thumbnails/{values['uuid']}.png"

    @pydantic.validator("high_res_path", pre=True, always=True)
    def get_high_res_path(cls, v, *, values, **kwargs):
        return f"/api/static/{values['uuid']}.png"
