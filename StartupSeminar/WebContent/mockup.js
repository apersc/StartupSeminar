$(function() {
	$('#mockup').highcharts(
			{
				title : {
					text : 'Credibility'
				},
				legend: {
					enabled: false
				},
				xAxis : {
					title : {
						text : ''
					},
					categories : [ '2003', '2004', '2005', '2006', '2007',
							'2008', '2009', '2010', '2011', '2012', '2013' ]
				},
				yAxis : {
					title : {
						text : 'accuracy'
					},
					plotBands : {
						from : 5,
						to : -5,
						color : 'rgba(50, 245, 31, .4)'
					},
					max : 40,
					min : -40,
					labels : {
						format : '{value} %'
					}
				},
				series : [ {
					name : 'accuracy',
					data : [ 9.14, -11.90, 7.28, 5.9, -8.41, 12.58, 9.22,
							-35.66, -8.33, 11.54, -12.79 ]
				} ]
			});
});

var badAnalysist = true;

function switchCharts() {
	$('#mockup').highcharts().destroy();
	badAnalysist = !badAnalysist;
	var value;
	if (!badAnalysist) {
		$('#mockup')
				.highcharts(
						{
							title : {
								text : 'Credibility'
							},
							legend: {
								enabled: false
							},
							xAxis : {
								title : {
									text : ''
								},
								categories : [ '2003', '2004', '2005', '2006',
										'2007', '2008', '2009', '2010', '2011',
										'2012', '2013' ]
							},
							yAxis : {
								title : {
									text : 'accuracy'
								},
								plotBands : {
									from : 5,
									to : -5,
									color : 'rgba(50, 245, 31, .4)'
								},
								max : 20,
								min : -20,
								labels : {
									format : '{value} %'
								}
							},
							series : [ {
								name : 'accuracy',
								data : [ 2.14, -1.90, 4.28, 1.3, -4.41, 2.58,
										-3.5, -4.66, 2.33, -3.54, -2.79 ]
							} ]
						});
		value = 'Worse Analysist';
	}else {
		$('#mockup').highcharts(
				{
					title : {
						text : 'Credibility'
					},
					legend: {
						enabled: false
					},
					xAxis : {
						title : {
							text : ''
						},
						categories : [ '2003', '2004', '2005', '2006', '2007',
								'2008', '2009', '2010', '2011', '2012', '2013' ]
					},
					yAxis : {
						title : {
							text : 'accuracy'
						},
						plotBands : {
							from : 5,
							to : -5,
							color : 'rgba(50, 245, 31, .4)'
						},
						max : 40,
						min : -40,
						labels : {
							format : '{value} %'
						}
					},
					series : [ {
						name : 'accuracy',
						data : [ 9.14, -11.90, 7.28, 5.9, -8.41, 12.58, 9.22,
								-35.66, -8.33, 11.54, -12.79 ]
					} ]
				});
		value = 'Better Analysist';
	}

	$("#button").html(value);
}

// $.get('ubs_2003_2013.csv', function(data) {
// // Split the lines
// var lines = data.split('\n');
//    
// // Iterate over the lines and add categories or series
// $.each(lines, function(lineNo, line) {
// var items = line.split(',');
//        
// // // header line containes categories
// // if (lineNo == 0) {
// // $.each(items, function(itemNo, item) {
// // if (itemNo > 0) options.xAxis.categories.push(item);
// // });
// // }
//        
// // the rest of the lines contain data with their name in the first
// // position
// // else {
// var series = {
// data: []
// };
// $.each(items, function(itemNo, item) {
// if (itemNo == 0) {
// series.name = item;
// } else {
// series.data.push(parseFloat(item));
// }
// });
//            
// options.series.push(series);
//    
// // }
//        
// });
//    
// // Create the chart
// var chart = new Highcharts.Chart(options);
// });
