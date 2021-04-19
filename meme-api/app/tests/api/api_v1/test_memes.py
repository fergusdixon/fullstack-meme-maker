from fastapi.testclient import TestClient

from app.core.config import settings

# TODO expand these


def test_get_images(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/memes")
    assert response.status_code == 200
    images = response.json()
    assert isinstance(images, list)
    assert isinstance(images[0], dict)
    assert images[0].get("thumbnail_path") == "/api/static/thumbnails/9f483da6-63d6-4370-b70c-04a59faa208d.png"
