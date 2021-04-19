from fastapi.testclient import TestClient

from app.core.config import settings


def test_get_images(client: TestClient) -> None:
    response = client.get(f"{settings.API_V1_STR}/memes/images")
    assert response.status_code == 200
    images = response.json()
    assert isinstance(images, list)
    assert isinstance(images[0], dict)
    assert images[0].get("path") == "/test"
