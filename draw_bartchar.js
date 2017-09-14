var myData =[
    { hora: 0, cantidad_robada: 45},
	{ hora: 1, cantidad_robada: 27},
	{ hora: 2, cantidad_robada: 16},
	{ hora: 3, cantidad_robada: 22},
	{ hora: 4, cantidad_robada: 16},
	{ hora: 5, cantidad_robada: 22},
	{ hora: 6, cantidad_robada: 23},
	{ hora: 7, cantidad_robada: 21},
	{ hora: 8, cantidad_robada: 41},
	{ hora: 9, cantidad_robada: 27},
	{ hora: 10, cantidad_robada: 48},
	{ hora: 11, cantidad_robada: 43},
	{ hora: 12, cantidad_robada: 40},
	{ hora: 13, cantidad_robada: 38},
	{ hora: 14, cantidad_robada: 66},
	{ hora: 15, cantidad_robada: 55},
	{ hora: 16, cantidad_robada: 62},
	{ hora: 17, cantidad_robada: 55},
	{ hora: 18, cantidad_robada: 91},
	{ hora: 19, cantidad_robada: 149},
	{ hora: 20, cantidad_robada: 158},
	{ hora: 21, cantidad_robada: 150},
	{ hora: 22, cantidad_robada: 109},
	{ hora: 23, cantidad_robada: 83}
]

var myData2 =[
     { hora: 0, cantidad_robada: 45},
	{ hora: 1, cantidad_robada: 27},
	{ hora: 2, cantidad_robada: 16},
	{ hora: 3, cantidad_robada: 22},
	{ hora: 4, cantidad_robada: 16},
	{ hora: 5, cantidad_robada: 22},
	{ hora: 6, cantidad_robada: 23},
	{ hora: 7, cantidad_robada: 21},
	{ hora: 8, cantidad_robada: 41},
	{ hora: 9, cantidad_robada: 27},
	{ hora: 10, cantidad_robada: 48},
	{ hora: 11, cantidad_robada: 43},
	{ hora: 12, cantidad_robada: 40},
	{ hora: 13, cantidad_robada: 38},
	{ hora: 14, cantidad_robada: 66},
	{ hora: 15, cantidad_robada: 55},
	{ hora: 16, cantidad_robada: 62},
	{ hora: 17, cantidad_robada: 55},
	{ hora: 18, cantidad_robada: 91},
	{ hora: 19, cantidad_robada: 149},
	{ hora: 20, cantidad_robada: 158},
	{ hora: 21, cantidad_robada: 150},
	{ hora: 22, cantidad_robada: 109},
	{ hora: 23, cantidad_robada: 83}
]

var myData3 =[
    { hora: 0, cantidad_robada: 45},
	{ hora: 1, cantidad_robada: 27},
	{ hora: 2, cantidad_robada: 16},
	{ hora: 3, cantidad_robada: 22},
	{ hora: 4, cantidad_robada: 16},
	{ hora: 5, cantidad_robada: 22},
	{ hora: 6, cantidad_robada: 23},
	{ hora: 7, cantidad_robada: 21},
	{ hora: 8, cantidad_robada: 41},
	{ hora: 9, cantidad_robada: 27},
	{ hora: 10, cantidad_robada: 48},
	{ hora: 11, cantidad_robada: 43},
	{ hora: 12, cantidad_robada: 40},
	{ hora: 13, cantidad_robada: 38},
	{ hora: 14, cantidad_robada: 66},
	{ hora: 15, cantidad_robada: 55},
	{ hora: 16, cantidad_robada: 62},
	{ hora: 17, cantidad_robada: 55},
	{ hora: 18, cantidad_robada: 91},
	{ hora: 19, cantidad_robada: 149},
	{ hora: 20, cantidad_robada: 158},
	{ hora: 21, cantidad_robada: 150},
	{ hora: 22, cantidad_robada: 109},
	{ hora: 23, cantidad_robada: 83}
]

var myData4 =[
    { hora: 0, cantidad_robada: 45},
	{ hora: 1, cantidad_robada: 27},
	{ hora: 2, cantidad_robada: 16},
	{ hora: 3, cantidad_robada: 22},
	{ hora: 4, cantidad_robada: 16},
	{ hora: 5, cantidad_robada: 22},
	{ hora: 6, cantidad_robada: 23},
	{ hora: 7, cantidad_robada: 21},
	{ hora: 8, cantidad_robada: 41},
	{ hora: 9, cantidad_robada: 27},
	{ hora: 10, cantidad_robada: 48},
	{ hora: 11, cantidad_robada: 43},
	{ hora: 12, cantidad_robada: 40},
	{ hora: 13, cantidad_robada: 38},
	{ hora: 14, cantidad_robada: 66},
	{ hora: 15, cantidad_robada: 55},
	{ hora: 16, cantidad_robada: 62},
	{ hora: 17, cantidad_robada: 55},
	{ hora: 18, cantidad_robada: 91},
	{ hora: 19, cantidad_robada: 149},
	{ hora: 20, cantidad_robada: 158},
	{ hora: 21, cantidad_robada: 150},
	{ hora: 22, cantidad_robada: 109},
	{ hora: 23, cantidad_robada: 83}
]

var width = 400,
	height = 180,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart = d3.select("#chart")
		.append("svg")
    .attr("width", width )
    .attr("height", height)
    .append("g")
    	.attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
 xAxis = chart.append("g")
   	.attr("class", "x axis")
    .attr("transform", "translate("+ 0 + ","+ (height-margin.top-margin.bottom ) +")"),
   yAxis = chart.append("g")
   	.attr("class", "y axis"),
   widthScale = d3.scaleLinear()
    .range([0, width - margin.left -margin.right]),
   colorScale = d3.scaleOrdinal(d3.schemeCategory20),
   heightScale = d3.scaleLinear()
   	.range([height -margin.top - margin.bottom,0]);	
	
var width = 400,
	height = 180,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart2 = d3.select("#chart2")
		.append("svg")
    .attr("width", width )
    .attr("height", height)
    .append("g")
    	.attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
 xAxis2 = chart2.append("g")
   	.attr("class", "x axis")
    .attr("transform", "translate("+ 0 + ","+ (height-margin.top-margin.bottom ) +")"),
   yAxis2 = chart2.append("g")
   	.attr("class", "y axis"),
   widthScale = d3.scaleLinear()
    .range([0, width - margin.left -margin.right]),
   colorScale = d3.scaleOrdinal(d3.schemeCategory20),
   heightScale = d3.scaleLinear()
   	.range([height -margin.top - margin.bottom,0]);	

	var width = 400,
	height = 180,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart3 = d3.select("#chart3")
		.append("svg")
    .attr("width", width )
    .attr("height", height)
    .append("g")
    	.attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
 xAxis3 = chart3.append("g")
   	.attr("class", "x axis")
    .attr("transform", "translate("+ 0 + ","+ (height-margin.top-margin.bottom ) +")"),
   yAxis3 = chart3.append("g")
   	.attr("class", "y axis"),
   widthScale = d3.scaleLinear()
    .range([0, width - margin.left -margin.right]),
   colorScale = d3.scaleOrdinal(d3.schemeCategory20),
   heightScale = d3.scaleLinear()
   	.range([height -margin.top - margin.bottom,0]);	
	
	var width = 400,
	height = 180,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart4 = d3.select("#chart4")
		.append("svg")
    .attr("width", width )
    .attr("height", height)
    .append("g")
    	.attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
 xAxis4 = chart4.append("g")
   	.attr("class", "x axis")
    .attr("transform", "translate("+ 0 + ","+ (height-margin.top-margin.bottom ) +")"),
   yAxis4 = chart4.append("g")
   	.attr("class", "y axis"),
   widthScale = d3.scaleLinear()
    .range([0, width - margin.left -margin.right]),
   colorScale = d3.scaleOrdinal(d3.schemeCategory20),
   heightScale = d3.scaleLinear()
   	.range([height -margin.top - margin.bottom,0]);	

function update(myData, seccion) {
	// Update the scale to the new maximum
	widthScale.domain([0, d3.max(myData, function (d) { return d.hora+1; })])
    heightScale.domain([0, d3.max(myData, function (d) { return d.cantidad_robada; })]);

  var ps = seccion.selectAll("rect")
			.data(myData);
	// Actions just for new items
	var psEnter =  ps.enter()
    .append("rect")
    .attr("x", 0)
    .attr("width",15)
    .attr("y", function(d) {return height-margin.top-margin.bottom-d.cantidad_robada;})
    .attr("height", function (d) { return d.cantidad_robada; })
	// Actions for new + updated
  ps.merge(psEnter) 
    .attr("x", function (d)  { return widthScale(d.hora); })
		.transition().duration(2000)  
    .style("fill", function (d, i) { return colorScale(d.hora); })
	// Actions for deleted items
  ps.exit().remove();    
  xAxis.call(d3.axisBottom(widthScale));
  yAxis.call(d3.axisLeft(heightScale));
  xAxis2.call(d3.axisBottom(widthScale));
  yAxis2.call(d3.axisLeft(heightScale));
  xAxis3.call(d3.axisBottom(widthScale));
  yAxis3.call(d3.axisLeft(heightScale));
  xAxis4.call(d3.axisBottom(widthScale));
  yAxis4.call(d3.axisLeft(heightScale));
}

update(myData,chart);
update(myData2,chart2);
update(myData3,chart3);
update(myData4,chart4);
