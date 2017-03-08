# slackSMS 💬

[![dependencies Status](https://david-dm.org/ammaristotle/slackSMS/status.svg)](https://david-dm.org/ammaristotle/slackSMS)
[![devDependencies Status](https://david-dm.org/ammaristotle/slackSMS/dev-status.svg)](https://david-dm.org/ammaristotle/slackSMS?type=dev)
### A client to interface between Twilio and Slack
Receive SMS messages at your Twilio number in Slack and reply to them from Slack. Built with Node.js and deploy immediately to Heroku.

### Why does this matter? / Motivations
Text messaging has considerably higher yield than email. It is direct and a fast way to reach people. Using your Twilio number to communicate with friends, clients, customers, etc. through Slack makes this seamless. You can quickly receive inquiries and reply to them.

### Screenshots
Incoming messages look pretty! ![alt text](https://dl.dropboxusercontent.com/s/01zx3z1hxc6zgn1/Screen%20Shot%202016-09-20%20at%201.26.10%20AM.png "Wooooah!")

Reply using quick /twilio command! ![alt text](https://dl.dropboxusercontent.com/s/chnfaadfa11c9vm/Screen%20Shot%202016-09-20%20at%201.29.31%20AM.png "Nifty, mom!")

## Requirements
* slackSMS requires some setup (auth tokens and the like) but then can be configured easily and deployed very fast on Heroku or others

## Custom configuration
* If you're interested in customizing slackSMS, just clone the repo:

  ```bash
  $ git clone https://github.com/ammaristotle/slackSMS
  $ npm install
  ```
* You'll then have to complete steps 1-4 below and copy the configuration variables to a `.env` file (using `.env.example` as a guide). Then:

  ```bash
  $ npm start # runs the server on port 4000
  ```
  * (Optional) Learn how to customize the way [messages appear in Slack](https://api.slack.com/docs/message-attachments)

## Get started (fast configuration)
1. [Purchase a number](https://www.twilio.com/console/phone-numbers/search) from Twilio if you haven't already

2. Retrieve your `accountSid` and `auth token` for Twilio [here](https://www.twilio.com/console)
![alt text](https://dl.dropboxusercontent.com/s/ew2vthkmgq88d41/Screen%20Shot%202016-08-31%20at%201.03.50%20PM.png?dl=0 "Copy these")

3. Get an auth token from Slack. Get one quickly [here](https://api.slack.com/docs/oauth-test-tokens)

4. Set up an [incoming webhook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) in Slack. Click "Add Configuration". Choose any channel, we will customize it later. Click "Add Incoming WebHooks Integration". Copy the Webhook URL. You'll need this to set up the slash command.

5. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ammaristotle/slackSMS) using the above credentials

6. Now we'll link our Slack webhook to a slash command. Set up a new [slash command](https://slack.com/apps/A0F82E8CA-slash-commands). Then click "Add Configuration". You can make the command name anything you like. Make sure to replace `your-heroku-url` with your app's URL and the endpoint `api/slack` as a **POST** request
![alt text](https://dl.dropboxusercontent.com/s/lqs8rkeqx1cnqr9/Screen%20Shot%202016-08-31%20at%2012.51.05%20PM.png?dl=0 "Set it up")

7. Go to your [managed numbers console](https://www.twilio.com/console/phone-numbers/incoming) and click the number you just purchased. Make sure to replace `your-heroku-url` with your app's URL and the endpoint `api/twilio` as a **POST** request
![alt text](https://dl.dropboxusercontent.com/s/oqalaj2bs82hy2l/Screen%20Shot%202016-08-31%20at%2012.56.15%20PM.png "Twilio console")

8. Start sending messages!

### Docker instructions
The app is located on Docker's registry as [`ammaristotle/slacksms`](https://hub.docker.com/r/ammaristotle/slacksms/)

It's ready to run using the supplied `Dockerfile` standalone. Depending on your host, you'll have additional setup on your domain, so make sure to use that instead of the heroku url. The endpoints are still the same. For local builds (assuming you've done steps 1-4 below and created a `.env` based off of `.env.example`):

```bash
$ docker build -t slacksms .
$ docker run -p 4000:80 slacksms
```

This app is also ready for a compose workflow. See a sample [here](docker-compose-sample.yml).

#### Costs
The underlying code for slackSMS is free and open source. However, Twilio charges $.0075 to receive a message and $.0075 to send a message (about 1 cent each). Keep this in mind in case you plan on receiving 20 gazillion messages; that could cause a firestorm in your wallet.

##### Contributing / Issues
Contributions are welcome. Please raise issues as they arise.
