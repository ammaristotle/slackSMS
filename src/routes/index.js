const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();

const slackAPI = require('../models/slack');
const twilioAPI = require('../models/twilio');

router.post('/slack', slackAPI.sendToSlack);
router.post('/twilio', twilioAPI.sendToTwilio);

module.exports = router;
