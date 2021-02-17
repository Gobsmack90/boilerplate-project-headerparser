// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// setup body-parser.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//using built in methods to parse header.
app.get('/api/whoami', (req, res) => {
  console.log(req.headers);
  let IP = req.ip;
  let language = req.headers["accept-language"];
  // let software = req.headers[]
  res.json({
    ipaddress: IP,
    language: language,
    software: ''
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
