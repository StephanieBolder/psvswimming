FROM node:lts-alpine

RUN yarn global add serve

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 8080
CMD [ "serve", "--single", "--listen", "8080", "8081" "dist" ]
