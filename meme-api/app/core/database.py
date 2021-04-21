import motor.motor_asyncio

from app.core.config import settings

MONGO_DETAILS = f"mongodb://{settings.MONGO_USER}:{settings.MONGO_PASS}@mongodb:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.memes

meme_collection = database.get_collection("meme_collection")
