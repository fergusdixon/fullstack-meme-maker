from typing import Optional

from pydantic import BaseModel, confloat, conint


class TextField(BaseModel):
    value: Optional[str] = ""
    order: conint(ge=0)
    width: confloat(ge=0, le=1)
    height: confloat(ge=0, le=1)
    distance_to_left: confloat(ge=0, le=1)
    distance_to_right: confloat(ge=0, le=1)
    rotation: confloat(ge=0, le=1)
