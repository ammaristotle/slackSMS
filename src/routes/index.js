const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();

const slackAPI = require('../models/slack');
const twilioAPI = require('../models/twilio');

router.post('/twilio', slackAPI.sendToSlack);
router.post('/slack', twilioAPI.sendToTwilio);

module.exports = router;
