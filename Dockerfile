FROM node:13.6-alpine AS build-client-stage

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm build

# Server time

FROM node:13.6-alpine

WORKDIR /app/server

COPY --from=build-client-stage /app/client/build ./public

COPY ./server/package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY ./server .

EXPOSE 3000

ENTRYPOINT [ "nodemon", "index.js" ]
