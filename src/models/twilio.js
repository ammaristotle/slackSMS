const SlackAPIWrapper = require('slack-node');

// initializes Slack
const webhookUri = process.env.SLACK_WEBHOOK_URI;
const apiToken = process.env.SLACK_API_TOKEN;
const slack = new SlackAPIWrapper(apiToken);
slack.setWebhook(webhookUri);

// initializes Twilio
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
  sendToTwilio: (req, res) => {
    const messageToSend = req.body.text;
    const numberToSend = req.body.channel_name;
    // pops off the prepended #sms in Slack
    const numberToSendSerialized = numberToSend.slice(3);
    client.messages.create({
      to: numberToSendSerialized,
      from: process.env.TWILIO_NUMBER,
      body: messageToSend,
    },
      (error) => {
        if (error) {
          res.send('Error: unable to send message');
        }
      }
    );

    // Post SMS message to Slack to show running conversation thread
    slack.webhook(
      {
        channel: `#${req.body.channel_name}`,
        username: req.body.user_name,
        icon_emoji: ':boom:',
        text: req.body.text,
      },
      () => { }
    );
    res.status(200).send('Message sent successfully.');
    res.end();
  },
};
