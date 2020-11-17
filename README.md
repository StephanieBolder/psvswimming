# frontend

## Project setup
```
yarn install
```

## Compiles and hot-reloads for development
```
yarn serve
```

## Build and run PSV-Zwemmen frontend using Docker

### Building a Docker image

Navigate to the project directory, where `package.json` is located and build the Docker image. It used the Dockerfile present in the project directory.

```
docker build -t psvzwemmen/psvzwemmen-frontend .
```

## Running the Docker image

Run the Docker image. The frontend is now accessible on port 8080.

```
docker run -p 8080:8080 -t psvzwemmen/psvzwemmen-frontend
```