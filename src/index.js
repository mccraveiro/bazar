var express = require('express');
var bodyParser = require('body-parser');
var api = require('./server/controllers/');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use('/api/', api);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
  res.end();
});

app.start = function () {
  mongoose.connect(app.get('connection'));

  app.listen(app.get('port'));
  console.log('Running on localhost:' + app.get('port'));
}

module.exports = app;