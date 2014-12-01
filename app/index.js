var express = require('express');
var bodyParser = require('body-parser');
var api = require('./server/controllers/');
var mongoose = require('mongoose');
var config = require('./server/config.json');

mongoose.connect(config.db.url);

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use('/api/', api);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(config.port);

console.log('Running on localhost:' + config.port);