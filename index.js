var charts = require('./charts.js');
var info = require('./request.js');
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
info.ask(1, function(s){console.log(s)});
console.log("Running just fine");
