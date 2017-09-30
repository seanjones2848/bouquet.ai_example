var request = require('request');

module.exports {
	ask: function(month) {
		var request_url = 'https://data.marincounty.org/resource/mw3d-ud6d.json?month_and_year=20' +\
			(month < 7 ? '16' : '17') + '-' +\
			(month < 10 ? '0' : '') + month + '-01T00:00:00.000'
		console.log(request_url);
		request(request_url, function(error, response, body) {
			console.log('error:', error);
			console.log('statusCode:', response && response.statusCode);
			console.log('body:', body);
			var info = body
		}
	}
}	
