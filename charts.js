var highChart = require('highcharts');

module.exports = {
	makeChart: function(details) {
		var options = {
			chart: {
				renderTo: 'container',
				type: 'column'
			},
			title: {
				text: 'Bouquet.ai Excersize'
			},
			subtitle: {
				text: 'Contract amounts in Marin County by department'
			},
			xAxis: {
				type: 'category',
				labels: {
					rotation: -45,
					style: {
						fontSize: '13px',
						fontFamily: 'Veranda, sans-serif'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Total amount ($)'
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				pointFormat: 'amount made: <b>{point.y:i}</b>'
			},
			series: [{
				name: 'Marin county data',
				data: details,
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					format: '{point.y:i}',
					y:10,
					style: {
						fontSize: '13px',
						fontFamily: 'Verands, sans-serif'
					}
				}
			}]
		};
		var chart = new highChart.Chart(options);
	}	
};
