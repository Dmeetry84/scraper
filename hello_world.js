var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

var ear = app.listen(8888, function () {
  console.log('Example app listening on port ' + ear.address().port + '!!!!');
});