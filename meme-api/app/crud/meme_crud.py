from typing import List

from app.core.database import meme_collection
from app.schemas import Meme


# Get memes
async def retrieve_memes() -> List[Meme]:
    memes = []
    async for meme in meme_collection.find():
        memes.append(Meme.parse_obj(meme))
    return memes


# Add new memes
async def add_memes(meme_data: List[Meme]) -> List[Meme]:
    await meme_collection.insert_many([meme.dict() for meme in meme_data])
    return await retrieve_memes()
