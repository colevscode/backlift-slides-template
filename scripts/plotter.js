/*
Helper to render line plots. Target refers to DOM-element.

See shutterstock.github.com/rickshaw/tutorial/introduction.html
*/
var renderLinePlot = function(target,data) {

	var palette = new Rickshaw.Color.Palette( { scheme: 'colorwheel' } );

	for(i in data){
		if(!data[i]['color']){
			data[i]['color'] = palette.color();
		}
	}

	var graph = new Rickshaw.Graph({
  		element: target,
  		renderer: 'line',
  		strokeWidth: 3.5,
  		height: 300,
	  	series: data
	});

	var x_axis = new Rickshaw.Graph.Axis.X({
		graph: graph, 
	});

	var y_axis = new Rickshaw.Graph.Axis.Y({
		graph: graph,
	});

	graph.render();

	var hoverDetail = new Rickshaw.Graph.HoverDetail( {
	graph: graph,
	formatter: function(series, x, y) {
		var content = '<b>'+series.name + '</b><br />x: ' + parseInt(x) + ', y: '+parseInt(y);
		return content;
	}
	} );

	return graph;
}

// used to convert array of values into Rickshaw-compatible values
var convertPlotData = function(arr, start, inc){
	ret = [];
	i = start;
	for(j in arr){
		ret.push({'x':i, 'y': parseInt(arr[j])})
		i+=inc
	}
	return ret;
}
