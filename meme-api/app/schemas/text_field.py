from typing import Literal, Optional

from pydantic import BaseModel, confloat, conint


class TextField(BaseModel):
    value: Optional[str] = ""
    order: conint(ge=0)
    width: confloat(ge=0, le=1)
    height: confloat(ge=0, le=1)
    distance_to_left: confloat(ge=0, le=1)
    distance_to_bottom: confloat(ge=0, le=1)
    rotation: confloat(ge=0, le=1)
    text_style: Literal["normal", "shadowed"]
