# fullstack-meme-maker

An example of a fullstack React & FastAPI application for generating memes


## Quickstart (to develop)

Relies on [docker-compose](https://docs.docker.com/compose/)

```shell
docker-compose build
docker-compose up
```


### meme-api

Basic FastAPI (Py3.8) backend for creating memes

Available at localhost:8888 (OpenAPI docs at localhost:8888/docs)
The container has a volume set up so code changes locally will reflect in the container and be reloaded

Either work in the docker container

```shell
docker-compose exec meme-api bash
```

Or set up a virtual environment using [Poetry](https://python-poetry.org/docs/#installation)

```shell
cd meme-api
poetry install
poetry shell
```

The next commands expect you to be in either the `/app` directory in the docker container or
the `meme-api` directory of the repo if you chose to set up a virtual environment


#### Linting

Script for checking style issues

```shell
./scripts/lint.sh
```

Script for fixing style issues

```shell
./scripts/format-imports.sh
```


#### Testing

The API has 100% coverage excluding things like parsing settings files (brings it down to about 94%)
Tests only work inside the docker container due to how the static file directory is mounted,
you may run them within the container using:

```shell
./scripts/test.sh
```

Or from the root of the repo

```shell
docker-compose exec meme-api ./scripts/test.sh
```


### meme-react-frontend

React Frontend for creating memes

Available at localhost:8080 using docker-compose
For development it is recommended to use the npm script to get autoreload

From the meme-react-frontend directory:

```shell
yarn run start
```

Access on localhost:3000

#### Tests
Uses Jest

Can run a handy TDD buddy with:

```shell
yarn test
```

Or get coverage as well with:

```shell
yarn test --coverage --watchAll
```
