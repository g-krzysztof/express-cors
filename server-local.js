const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors());

app.get('/test', (req, res) =>{
  res.json({
    test: "working"
  })

});

app.listen(3004, () => console.log('Local app listening on port 3004!'));
