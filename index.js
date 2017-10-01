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

function dropFunction() {
	document.getElementById("monthDrop").classlist.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdown = document.getElementsByClassName("dropdown-content");
		for (var i=0; i < dropdown.length; i++) {
			var openDropdown = dropdown[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

info.ask(1, function(s){console.log(s)});
console.log("Running just fine");
