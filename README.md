# slackSMS 💬

[![Build Status](https://travis-ci.org/ammaristotle/slackSMS.svg?branch=master)](https://travis-ci.org/ammaristotle/slackSMS) [![dependencies Status](https://david-dm.org/ammaristotle/slackSMS/status.svg)](https://david-dm.org/ammaristotle/slackSMS)
[![devDependencies Status](https://david-dm.org/ammaristotle/slackSMS/dev-status.svg)](https://david-dm.org/ammaristotle/slackSMS?type=dev) [![Coverage Status](https://coveralls.io/repos/github/ammaristotle/slackSMS/badge.svg?branch=master)](https://coveralls.io/github/ammaristotle/slackSMS?branch=master)
### A client to interface between Twilio and Slack
Receive messages at your Twilio number in Slack and reply to them from Slack. Built with Node.js

### Why does this matter? / Motivations
Text messaging has considerably higher yield than email. It is direct and a fast way to reach people. Using your Twilio number to communicate with friends, clients, customers, etc. through Slack makes this seamless. You can quickly receive inquiries and reply to them.

## Requirements
* slackSMS requires some setup (auth tokens and the like) but then can be configured easily and deployed very fast on Heroku or others
* slackSMS can also be customized, just clone the repo:
```bash
$ git clone https://github.com/ammaristotle/slackSMS
$ npm install

* Complete steps 1-4 below and copy the configuration variables to a `.env` file (using `.env.example` as a guide). Then:

  ```bash
  $ npm start # runs the server on port 4000
  ```
  * (Optional) Learn how to customize the way [messages appear in Slack](https://api.slack.com/docs/message-attachments)

## Get started
1. [Purchase a number](https://www.twilio.com/console/phone-numbers/search) from Twilio if you haven't already

2. Retrieve your `accountSid` and `auth token` for Twilio [here](https://www.twilio.com/console)
![alt text](https://dl.dropboxusercontent.com/s/ew2vthkmgq88d41/Screen%20Shot%202016-08-31%20at%201.03.50%20PM.png?dl=0 "Copy these")

3. Get an auth token from Slack. Get one quickly [here](https://api.slack.com/docs/oauth-test-tokens)

4. Set up an [incoming webhook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) in Slack. Put anything in the URL for now.

5. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ammaristotle/slackSMS) using the above credentials

6. Link your webhook to the deployed app. Make sure to replace `your-heroku-url` with your app's URL and the endpoint `api/slack` as a **POST** request
![alt text](https://dl.dropboxusercontent.com/s/lqs8rkeqx1cnqr9/Screen%20Shot%202016-08-31%20at%2012.51.05%20PM.png?dl=0 "Set it up")

6. Go to your [managed numbers console](https://www.twilio.com/console/phone-numbers/incoming) and click the number you just purchased. Make sure to replace `your-heroku-url` with your app's URL and the endpoint `api/twilio` as a **POST** request
![alt text](https://dl.dropboxusercontent.com/s/oqalaj2bs82hy2l/Screen%20Shot%202016-08-31%20at%2012.56.15%20PM.png "Twilio console")

### Docker instructions
If you'd like to take the app to a different host, the app is ready to run using the supplied `Dockerfile`. Obviously if you want to add this in with your other services, you'll have to tweak it a bit in your `docker-compose.yml`.

```bash
$ docker build -t slacksms .
$ docker run -p 4000:80 slacksms
```

#### Costs
The underlying code for slackSMS is free and open source. However, Twilio charges $.0075 to receive a message and $.0075 to send a message (about 1 cent each). Keep this in mind in case you plan on receiving 20 gazillion messages; that could cause a firestorm in your wallet.

##### Contributing / Issues
Contributions are welcome.

##### Roadmap
1. Handle multiple numbers

#### TODO
1. Fix Heroku deployment (and test)
2. Get test coverage
