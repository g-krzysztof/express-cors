const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser());
app.use(cors());

app.post('/poe', (req, res) => {

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

app.listen(3004, () => console.log('Local app listening on port 3004!'));
