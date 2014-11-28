var express = require('express');

var api = express.Router();
var API_BASEPATH = '/api/';

api.get('/', function (req, res) {
  res.status(200);
  res.json({
    hello: 'world'
  });
  res.end();
});

module.exports = api;