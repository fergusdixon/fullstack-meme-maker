# fullstack-meme-maker

An example of a fullstack React & FastAPI application for generating memes

Some links:

The React frontend:

http://fulls-LoadB-16QUR6NDC2L03-1254964837.eu-west-2.elb.amazonaws.com

The API docs:

http://fulls-LoadB-16QUR6NDC2L03-1254964837.eu-west-2.elb.amazonaws.com:8080/docs

## Deploy

Uses [ECS integration](https://docs.docker.com/cloud/ecs-integration/) with docker compose, 
so ensure you have a docker context linked to your AWS account:

```shell
docker context create ecs meme-maker
```

Follow the prompts to link credentials

```shell
docker --context meme-maker compose up
```

Will create each service on AWS Fargate, with a loadbalancer pointing to the fronted on HTTP port `80` and the
API on port `8080`


## Quickstart (to develop)

Relies on the old version of [docker-compose](https://docs.docker.com/compose/) unlike the deploy
This is to take advantage of `docker-compose.override.yml` to make local dev quicker, like code reloading


```shell
docker-compose build
docker-compose up
```


### meme-api

Basic FastAPI (Py3.8) backend for creating memes

Available at localhost:8080 (OpenAPI docs at localhost:8080/docs)
The container has a volume set up so code changes locally will reflect in the container and be reloaded.

It retrieves memes from a simple MongoDB instance, the first time it starts it will populate some dummy data.

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

Available at http://localhost when using docker-compose
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


#### Monitoring

Uses a manually created Cloudwatch dashboard with alarms for monitoring:

![Screenshot 2021-04-21 at 17 51 28](https://user-images.githubusercontent.com/25303488/115584665-3c614300-a2cb-11eb-97a6-ce868a375780.png)

