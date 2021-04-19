from typing import List, Literal
from uuid import UUID

from pydantic import BaseModel

from .text_field import TextField


class Meme(BaseModel):
    uuid: UUID
    text_style: Literal["normal", "shadowed"]
    text_fields: List[TextField]
