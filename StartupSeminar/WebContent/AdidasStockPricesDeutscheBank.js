$(function() {
	$('#container').highcharts(
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
							name: 'Predictions',
							data : [ [ 1320102000000, 45 ], 
							         [ 1351724400000, 64 ],
									[ 1383260400000, 70 ], 
									[ 1414796400000, 80 ],
									[ 1446332400000, 57 ] ]
						},
						{
							type: 'arearange',
							name: 'Future Stock Price Prediction',
								data: [[1414796400000, 59.53, 59.53], [1446324000000, 48.45, 65.5]]
						}]

			});

});

// function createChart(stockData, predictions){
// var options = {
//
// chart: {
// renderTo: 'container',
// },
// title: {
// text: 'Adidas AG (ADS.DE)'
// },
// xAxis: {
// categories: []
// },
// series: [{
// data: [
// [1320102000, 52],
// [1322694000, 51.56],
// [1325458800, 51.42],
// [1328050800, 57.23],
// [1330556400, 60.2],
// [1330556400, 61.1],
// [1335823200, 63],
// [1338501600, 57.2],
// [1341180000, 57.4],
// [1343772000, 60.9],
// [1346623200, 62.21],
// [1349042400, 65.5],
// [1351724400, 66.49],
// [1354489200, 67.32],
// [1356994800, 67.33],
// [1359673200, 70.49],
// [1362092400, 70.54],
// [1364767200, 80.94],
// [1367359200, 79.3],
// [1370210400, 82.5],
// [1372629600, 84.08],
// [1375308000, 85.25],
// [1377986400, 81.9],
// [1380578400, 80.46],
// [1383260400, 83.73],
// [1385852400, 89.3],
// [1388530800, 92.64],
// [1391209200, 81.5],
// [1393628400, 81.07],
// [1396303200, 78.86],
// [1398895200, 76.93],
// [1401573600, 78.5],
// [1404165600, 73.8],
// [1406844000, 58.35],
// [1409522400, 57.36],
// [1412114400, 59.86],
// [1414796400, 59.53],
// ],
// type: 'arearange',
// fillColor: 'rgba(255, 255, 255, 0)'
// }, {
// type: 'scatter',
// data: [
// [1320102000, 45],
// [1351724400, 64],
// [1383260400, 70],
// [1414796400, 80],
// [1446332400, 57]]
// }
// ]
// };
//	
// options.series.push(stockData);
// if(predictions != null){
// options.series.push(predictions);
// }
// var chart = new Highcharts.Chart(options);
