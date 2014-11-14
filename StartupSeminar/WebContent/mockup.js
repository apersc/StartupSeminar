$(function () { 
    $('#mockup').highcharts({
        title: {
            text: 'Credibility'
        },
        xAxis: {
            title: {
            	text: 'time'
            },
            categories: ['2003', '2004','2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        },
        yAxis: {
            title: {
                text: 'accuracy'
            },
            plotBands: {
            	from: 25,
            	to: -25,
            	color: 'rgba(50, 245, 31, .4)'
            },
            max: 100,
            min: -100,
            labels: {
            	format: '{value} %'
            }
        },
        series: [{
            name: 'accuracy',
            data: [15.14, 19.90, 43.28, 35, -1.41, 87.58, 52.22, -35.66, -18.33, 31.54, -12.79]
        }]
    });
});

//$.get('ubs_2003_2013.csv', function(data) {
//    // Split the lines
//    var lines = data.split('\n');
//    
//    // Iterate over the lines and add categories or series
//    $.each(lines, function(lineNo, line) {
//        var items = line.split(',');
//        
////        // header line containes categories
////        if (lineNo == 0) {
////            $.each(items, function(itemNo, item) {
////                if (itemNo > 0) options.xAxis.categories.push(item);
////            });
////        }
//        
//        // the rest of the lines contain data with their name in the first 
//        // position
////        else {
//            var series = {
//                data: []
//            };
//            $.each(items, function(itemNo, item) {
//                if (itemNo == 0) {
//                    series.name = item;
//                } else {
//                    series.data.push(parseFloat(item));
//                }
//            });
//            
//            options.series.push(series);
//    
////        }
//        
//    });
//    
//    // Create the chart
//    var chart = new Highcharts.Chart(options);
//});