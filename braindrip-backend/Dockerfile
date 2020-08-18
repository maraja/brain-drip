FROM node:12

COPY . /opt/app

WORKDIR /opt/app/braindrip-backend

RUN yarn

CMD yarn db:init yarn watch