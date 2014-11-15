$(function() {
	$('#container').highcharts(
			{
				title : {
					text : 'Adidas AG (ADS.DE)'
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
					max : 40,
					min : -40,
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
					data : [ [1320102000000, 19.2], [1351724400000, 12.8], [1383260400000, -18.1], [1414796400000, 2.5]]
				}, {
					name: 'deviation',
					type: 'errorbar',
					data: [[1320102000000, 0, 19.2], [1351724400000, 0, 12.8], [1383260400000, 0, -18.1], [1414796400000, 0, 2.5]]
				} ]
			});
});

//, -8.41, 12.58, 9.22,
//-35.66, -8.33, 11.54, -12.79 