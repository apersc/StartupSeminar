$(function() {
	$('#container').highcharts(
			{
				title : {
					text : 'Abweichungen der Forecasts'
				},
				legend: {
					enabled: false
				},
				xAxis : {
					title : {
						text : ''
					},
					type: 'datetime'
				},
				yAxis : {
					title : {
						text : ''
					},
					plotBands : {
						from : 10,
						to : -10,
						color : 'rgba(50, 245, 31, .4)'
					},
					max : 60,
					min : -60,
					labels : {
						format : '{value} %'
					}
				},
				plotOptions: {
					scatter: {
						marker: {
							radius: 8
						}
					}, 
					errorbar: {
						stemWidth: 2,
						whiskerLength: 7,
						whiskerWidth: 2
					}
				},
				series : [ {
					name : 'accuracy',
					type: 'scatter',
					data : [ [1320102000000, 44.23], [1351724400000, 57.92], [1383260400000, -21.18], [1414796400000, -4.25]]
				}, {
					name: 'deviation',
					type: 'errorbar',
					data: [[1320102000000, 0, 44.23], [1351724400000, 0, 57.92], [1383260400000, 0, -21.18], [1414796400000, 0, -4.25]]
				} ]
			});
});

//, -8.41, 12.58, 9.22,
//-35.66, -8.33, 11.54, -12.79 