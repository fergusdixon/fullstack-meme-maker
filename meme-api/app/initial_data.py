import asyncio
import logging
from typing import List

import pydantic

from app.core.config import base_images
from app.crud import meme_crud
from app.schemas import Meme

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


async def init() -> None:
    if len(await meme_crud.retrieve_memes()) > 0:
        logger.info("Not adding dummy data as some already exists %s" % await meme_crud.retrieve_memes())
        return

    dummy_data = pydantic.parse_obj_as(List[Meme], base_images)
    logger.info("Populating dummy info")
    await meme_crud.add_memes(dummy_data)


async def main() -> None:
    logger.info("Initializing service")
    await init()
    logger.info("Service finished initializing")


if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())
