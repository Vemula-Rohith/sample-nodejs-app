# Node.js API (Docker)

A small Express service for local development and container workflows.

**Source:** clone this repository to get `app.js`, the Dockerfile, and everything needed to run or debug the app locally (for example, inspect process logs, test without Docker, or change how the process listens and starts).

## Build the image

```bash
docker build -t sample-nodejs-app .
```

## Run the container

```bash
docker run --rm sample-nodejs-app
```

Pass through any environment variables your deployment needs as usual (for example with `-e` or `--env-file`).

## Use the API

Run the container and access the API from your machine (for example with a browser or `curl`).

- `GET /` — plain text service status
- `GET /health` — JSON health check
- `GET /debug` — JSON with selected environment values

## Run without Docker

```bash
npm install
DB_HOST=localhost npm start
```
