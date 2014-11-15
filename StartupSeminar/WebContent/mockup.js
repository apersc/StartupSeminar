$(function() {

	var showAdidasMorgan = function() {
	$('#mockup').highcharts(
			{
				chart : {
					renderTo : 'container',
				},
				title : {
					text : 'Adidas AG (ADS.DE)'
				},
				plotOptions: {
					area: {
						marker: {
							enabled: false
						}
					}, 
					arearange: {
						fillColor: '#7cb5ec',
						colorOpacity: 0.4
					}

				},
				xAxis: {
					type: 'datetime'
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series : [
						{
							data : [ [ 1320102000000, 52 ], 
							         [ 1322694000000, 51.56 ],
									[ 1325458800000, 51.42 ],
									[ 1328050800000, 57.23 ],
									[ 1330556400000, 60.2 ], 
									[ 1330556400000, 61.1 ],
									[ 1335823200000, 63 ], 
									[ 1338501600000, 57.2 ],
									[ 1341180000000, 57.4 ], 
									[ 1343772000000, 60.9 ],
									[ 1346623200000, 62.21 ],
									[ 1349042400000, 65.5 ],
									[ 1351724400000, 66.49 ],
									[ 1354489200000, 67.32 ],
									[ 1356994800000, 67.33 ],
									[ 1359673200000, 70.49 ],
									[ 1362092400000, 70.54 ],
									[ 1364767200000, 80.94 ],
									[ 1367359200000, 79.3 ], 
									[ 1370210400000, 82.5 ],
									[ 1372629600000, 84.08 ],
									[ 1375308000000, 85.25 ],
									[ 1377986400000, 81.9 ],
									[ 1380578400000, 80.46 ],
									[ 1383260400000, 83.73 ],
									[ 1385852400000, 89.3 ],
									[ 1388530800000, 92.64 ],
									[ 1391209200000, 81.5 ],
									[ 1393628400000, 81.07 ],
									[ 1396303200000, 78.86 ],
									[ 1398895200000, 76.93 ],
									[ 1401573600000, 78.5 ], 
									[ 1404165600000, 73.8 ],
									[ 1406844000000, 58.35 ],
									[ 1409522400000, 57.36 ],
									[ 1412114400000, 59.86 ],
									[ 1414796400000, 59.53 ], ],
							type : 'area',
							fillColor : 'rgba(255, 255, 255, 0)',
							name: 'Stock prices'
						},
						{
							type : 'scatter',
							name: 'Forecast',
							data : [ [ 1320102000000, 62 ], 
							         [ 1351724400000, 75 ],
									[ 1383260400000, 68 ], 
									[ 1414796400000, 61 ],
									[ 1446332400000, 46 ] ]
						},
						{
							type: 'arearange',
							name: 'Future Stock Price Forecast',
								data: [[1414796400000, 59.53, 59.53], [1446324000000, 53, 39.02]]
						}]

			});

	};

	var showAdidasMorgan2 = function() {
	$('#mockup2').highcharts(
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
	};

	var showAdidasDeutschBank = function() {
	$('#mockup').highcharts(
			{
				chart : {
					renderTo : 'container',
				},
				title : {
					text : 'Adidas AG (ADS.DE)'
				},
				plotOptions: {
					area: {
						marker: {
							enabled: false
						}
					}
				},
				xAxis: {
					type: 'datetime'
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series : [
						{
							data : [ [ 1320102000000, 52 ], 
							         [ 1322694000000, 51.56 ],
									[ 1325458800000, 51.42 ],
									[ 1328050800000, 57.23 ],
									[ 1330556400000, 60.2 ], 
									[ 1330556400000, 61.1 ],
									[ 1335823200000, 63 ], 
									[ 1338501600000, 57.2 ],
									[ 1341180000000, 57.4 ], 
									[ 1343772000000, 60.9 ],
									[ 1346623200000, 62.21 ],
									[ 1349042400000, 65.5 ],
									[ 1351724400000, 66.49 ],
									[ 1354489200000, 67.32 ],
									[ 1356994800000, 67.33 ],
									[ 1359673200000, 70.49 ],
									[ 1362092400000, 70.54 ],
									[ 1364767200000, 80.94 ],
									[ 1367359200000, 79.3 ], 
									[ 1370210400000, 82.5 ],
									[ 1372629600000, 84.08 ],
									[ 1375308000000, 85.25 ],
									[ 1377986400000, 81.9 ],
									[ 1380578400000, 80.46 ],
									[ 1383260400000, 83.73 ],
									[ 1385852400000, 89.3 ],
									[ 1388530800000, 92.64 ],
									[ 1391209200000, 81.5 ],
									[ 1393628400000, 81.07 ],
									[ 1396303200000, 78.86 ],
									[ 1398895200000, 76.93 ],
									[ 1401573600000, 78.5 ], 
									[ 1404165600000, 73.8 ],
									[ 1406844000000, 58.35 ],
									[ 1409522400000, 57.36 ],
									[ 1412114400000, 59.86 ],
									[ 1414796400000, 59.53 ], ],
							type : 'area',
							fillColor : 'rgba(255, 255, 255, 0)',
							name: 'Stock prices'
						},
						{
							type : 'scatter',
							name: 'Forecast',
							data : [ [ 1320102000000, 45 ], 
							         [ 1351724400000, 64 ],
									[ 1383260400000, 70 ], 
									[ 1414796400000, 80 ],
									[ 1446332400000, 57 ] ]
						},
						{
							type: 'arearange',
							name: 'Future Stock Price Forecast',
								data: [[1414796400000, 59.53, 59.53], [1446324000000, 48.45, 65.5]]
						}]

			});
};

var showAdidasDeutschBank2 = function() {
	$('#mockup2').highcharts(
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
					data : [ [1320102000000, -13.5], [1351724400000, -3.76], [1383260400000, -16.37], [1414796400000, 34.39]]
				}, {
					name: 'deviation',
					type: 'errorbar',
					data: [[1320102000000, 0, -13.5], [1351724400000, 0, -3.76], [1383260400000, 0, -16.37], [1414796400000, 0, 34.39]]
				} ]
			});
};

var showAdidasIndependent = function() {
		$('#mockup').highcharts(
			{
				chart : {
					renderTo : 'container',
				},
				title : {
					text : 'Adidas AG (ADS.DE)'
				},
				plotOptions: {
					area: {
						marker: {
							enabled: false
						}
					}
				},
				xAxis: {
					type: 'datetime'
				},
				yAxis: {
					title: {
						text: ''
					}
				},
				series : [
						{
							data : [ [ 1320102000000, 52 ], 
							         [ 1322694000000, 51.56 ],
									[ 1325458800000, 51.42 ],
									[ 1328050800000, 57.23 ],
									[ 1330556400000, 60.2 ], 
									[ 1330556400000, 61.1 ],
									[ 1335823200000, 63 ], 
									[ 1338501600000, 57.2 ],
									[ 1341180000000, 57.4 ], 
									[ 1343772000000, 60.9 ],
									[ 1346623200000, 62.21 ],
									[ 1349042400000, 65.5 ],
									[ 1351724400000, 66.49 ],
									[ 1354489200000, 67.32 ],
									[ 1356994800000, 67.33 ],
									[ 1359673200000, 70.49 ],
									[ 1362092400000, 70.54 ],
									[ 1364767200000, 80.94 ],
									[ 1367359200000, 79.3 ], 
									[ 1370210400000, 82.5 ],
									[ 1372629600000, 84.08 ],
									[ 1375308000000, 85.25 ],
									[ 1377986400000, 81.9 ],
									[ 1380578400000, 80.46 ],
									[ 1383260400000, 83.73 ],
									[ 1385852400000, 89.3 ],
									[ 1388530800000, 92.64 ],
									[ 1391209200000, 81.5 ],
									[ 1393628400000, 81.07 ],
									[ 1396303200000, 78.86 ],
									[ 1398895200000, 76.93 ],
									[ 1401573600000, 78.5 ], 
									[ 1404165600000, 73.8 ],
									[ 1406844000000, 58.35 ],
									[ 1409522400000, 57.36 ],
									[ 1412114400000, 59.86 ],
									[ 1414796400000, 59.53 ], ],
							type : 'area',
							fillColor : 'rgba(255, 255, 255, 0)',
							name: 'Stock prices'
						},
						{
							type : 'scatter',
							name: 'Forecast',
							data : [ [ 1320102000000, 75 ], 
							         [ 1351724400000, 105 ],
									[ 1383260400000, 66 ], 
									[ 1414796400000, 57 ],
									[ 1446332400000, 49 ] ]
						},
						{
							type: 'arearange',
							name: 'Future Stock Price Forecast',
								data: [[1414796400000, 59.53, 59.53], [1446324000000, 34.1, 69.25]]
						}]

			});

}

var showAdidasIndependent2 = function() {
	$('#mockup2').highcharts(
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
};

	showAdidasDeutschBank();
	showAdidasDeutschBank2();

	$('.title').click(function() {
		var title = $('.title option:selected').val();
		console.log(title);
		
		if (title == 'adidas') {
			$('.analyst').show();
			$('#mockup').show();
			$('#mockup2').show();
		} else {
			$('.analyst').hide();
			$('#mockup').hide();
			$('#mockup2').hide();
		}

	});

	$('.type label').click(function() {
		var cat = $(this).children('input').val();
		var analyst = $('.analyst.active').data('name');
		var stock=$('.title option:selected').val();
		
		
		if (cat == 'Stock') {
			$('.analyst').show();
			$('#mockup').show();
			$('#mockup2').show();
		} else {
			$('.analyst').hide();
			$('#mockup').hide();
			$('#mockup2').hide();
		}

	});

	$('.analyst a').click(function() {
		var cat = $('.type .active input').val();
		var analyst = $(this).data('name');
		var stock=$('.title option:selected').val();
		
		if (cat == 'Stock') {

			if (stock == 'adidas') {
				if (analyst == 'Deutsche Bank') {
					showAdidasDeutschBank();
					showAdidasDeutschBank2();
				} else if (analyst == 'Morgan Stanley') {
					showAdidasMorgan();
					showAdidasMorgan2();
				} else {
					showAdidasIndependent();
					showAdidasIndependent2();
				}
			} else {
				$('.analyst').hide();
			}
			

			if (stock == 'daimler') {
				
			}
			if (stock == 'facebook') {
				
			}

		}





		$('.analyst a.active').removeClass('active');
		$(this).addClass('active');
	});




});