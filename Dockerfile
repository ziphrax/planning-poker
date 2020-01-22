FROM node:13.6-alpine AS build-client-stage

WORKDIR /app/client

COPY ./client/package*.json ./

RUN yarn install

COPY ./client .

RUN yarn build

# Server time

FROM node:13.6-alpine

WORKDIR /app/server

COPY --from=build-client-stage /app/client/build ./public

COPY ./server/package*.json ./

RUN yarn install
RUN yarn global add nodemon

COPY ./server .

EXPOSE 80

ENTRYPOINT [ "nodemon", "index.js" ]
