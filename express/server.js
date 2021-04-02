const express = require('express');
// const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser());
app.use(cors());

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.post('/poe', (req, res) => {

  const request = require('request');
  const options = {
    'method': 'POST',
    'url': 'https://api.poeditor.com/v2/terms/list',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'api_token': '5ceb60d6b7bdd2ee0ffd934cb3711e8c',
      'id': '402195',
      'language': req.body.language
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(JSON.parse(response.body))
  });

});

app.post('/poeAdd', (req, res) => {

  const request = require('request');
  const options = {
    'method': 'POST',
    'url': 'https://api.poeditor.com/v2/terms/add',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'api_token': '5ceb60d6b7bdd2ee0ffd934cb3711e8c',
      'data': req.body.data,
      'id': '402195'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(JSON.parse(response.body))
  });

});

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
