var charts = require('./charts.js');
var info = require('./request.js');
var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

info.ask(1, function(s){console.log(s)});
console.log("Running just fine");
