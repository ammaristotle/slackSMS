require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const http = require('http');

const app = express();
const router = require('./routes');

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api', router);

http.createServer(app).listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log(`SlackSMS 💬 running on port ${app.get('port')}`);
});
