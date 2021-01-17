# PSV Swimming
This project is part of the PSV Swimming new application. This repository contains the services needed for the backend. This project is focused on the frontend, but also has the files needed to connect to the backend. For the repository that only inludes the frontend, see the link below.

## Status
Finishing touches

## Installation
Create a repository and clone this repository with `git clone https://github.com/StephanieBolder/psvswimming`. Use `npm install` and `npm run serve` for your own repository server. For additional opties use `npm run setup`, to also register the name of your site.

## Authors
- Stephanie Bolder, Fontys FHICT student
- Max van Hattum, Fontys FHICT student

## Build with:
- HTML
- CSS
- Javascript
- Tailwind CSS
- Vue.JS
- Create Vue project with CLI

## Template used:
- [Create Vue.JS project](https://cli.vuejs.org/guide/creating-a-project.html)

## Clone this repository by using:
`git clone https://github.com/StephanieBolder/psvswimming`

## Programs used:
- Visual Studio Code
- Git CMD
- Node.JS Command Prompt
- Google Chrome
- Adobe XD

## PSV Swimming project excluding backend
- [PSVSwimming](https://github.com/StephanieBolder/psv-swimming)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


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