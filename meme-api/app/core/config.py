import json
from typing import List, Union

from pydantic import AnyHttpUrl, BaseSettings, validator


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = ["http://localhost:3000", "http://localhost:8080"]  # TODO add ELB url

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)

    PROJECT_NAME: str = "Meme API"
    BASE_MEME_DEFINITION_FILE: str = "app/assets/base_meme_definition.json"

    class Config:
        case_sensitive = True


settings = Settings()

# This is our replacement for a database - Mongo would probably be best just to store simple resource declarations
# Keeping it here means the file is only opened & read once on startup
with open(settings.BASE_MEME_DEFINITION_FILE) as image_list:
    base_images = json.loads(image_list.read())
