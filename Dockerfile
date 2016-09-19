FROM phusion/passenger-nodejs:0.9.19

MAINTAINER <ammaristotle@users.noreply.github.com>
RUN apt-get update

ENV APP_HOME /home/app/slacksms
WORKDIR $APP_HOME

ADD package.json $APP_HOME/
RUN npm install

ADD . $APP_HOME/

RUN chown -R app:app $APP_HOME

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV PASSENGER_APP_ENV production

CMD ["npm", "start"]

EXPOSE 80
