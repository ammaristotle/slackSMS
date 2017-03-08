FROM node:6.9.2-alpine

MAINTAINER <ammaristotle@users.noreply.github.com>

ARG APP_DIR=/opt/app
WORKDIR $APP_DIR

ADD package.json $APP_DIR/
RUN npm install --production

ADD . $APP_DIR/

CMD node src/app.js

EXPOSE 80
