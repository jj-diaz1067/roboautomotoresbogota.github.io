var myData =[
    { hora: 0, cantidad_robada: 38},
{ hora: 1, cantidad_robada: 40},
{ hora: 2, cantidad_robada: 27},
{ hora: 3, cantidad_robada: 15},
{ hora: 4, cantidad_robada: 21},
{ hora: 5, cantidad_robada: 46},
{ hora: 6, cantidad_robada: 59},
{ hora: 7, cantidad_robada: 68},
{ hora: 8, cantidad_robada: 85},
{ hora: 9, cantidad_robada: 93},
{ hora: 10, cantidad_robada: 90},
{ hora: 11, cantidad_robada: 101},
{ hora: 12, cantidad_robada: 89},
{ hora: 13, cantidad_robada: 102},
{ hora: 14, cantidad_robada: 99},
{ hora: 15, cantidad_robada: 84},
{ hora: 16, cantidad_robada: 93},
{ hora: 17, cantidad_robada: 104},
{ hora: 18, cantidad_robada: 155},
{ hora: 19, cantidad_robada: 175},
{ hora: 20, cantidad_robada: 231},
{ hora: 21, cantidad_robada: 238},
{ hora: 22, cantidad_robada: 142},
{ hora: 23, cantidad_robada: 100}

]

var myData2 =[
    { hora: 0, cantidad_robada: 37},
{ hora: 1, cantidad_robada: 28},
{ hora: 2, cantidad_robada: 17},
{ hora: 3, cantidad_robada: 22},
{ hora: 4, cantidad_robada: 24},
{ hora: 5, cantidad_robada: 41},
{ hora: 6, cantidad_robada: 77},
{ hora: 7, cantidad_robada: 73},
{ hora: 8, cantidad_robada: 63},
{ hora: 9, cantidad_robada: 77},
{ hora: 10, cantidad_robada: 94},
{ hora: 11, cantidad_robada: 93},
{ hora: 12, cantidad_robada: 92},
{ hora: 13, cantidad_robada: 90},
{ hora: 14, cantidad_robada: 109},
{ hora: 15, cantidad_robada: 101},
{ hora: 16, cantidad_robada: 118},
{ hora: 17, cantidad_robada: 97},
{ hora: 18, cantidad_robada: 171},
{ hora: 19, cantidad_robada: 186},
{ hora: 20, cantidad_robada: 232},
{ hora: 21, cantidad_robada: 198},
{ hora: 22, cantidad_robada: 157},
{ hora: 23, cantidad_robada: 96}
]

var myData3 =[
   { hora: 0, cantidad_robada: 46},
{ hora: 1, cantidad_robada: 41},
{ hora: 2, cantidad_robada: 29},
{ hora: 3, cantidad_robada: 31},
{ hora: 4, cantidad_robada: 24},
{ hora: 5, cantidad_robada: 22},
{ hora: 6, cantidad_robada: 42},
{ hora: 7, cantidad_robada: 47},
{ hora: 8, cantidad_robada: 59},
{ hora: 9, cantidad_robada: 74},
{ hora: 10, cantidad_robada: 73},
{ hora: 11, cantidad_robada: 86},
{ hora: 12, cantidad_robada: 71},
{ hora: 13, cantidad_robada: 90},
{ hora: 14, cantidad_robada: 132},
{ hora: 15, cantidad_robada: 130},
{ hora: 16, cantidad_robada: 103},
{ hora: 17, cantidad_robada: 140},
{ hora: 18, cantidad_robada: 210},
{ hora: 19, cantidad_robada: 294},
{ hora: 20, cantidad_robada: 330},
{ hora: 21, cantidad_robada: 254},
{ hora: 22, cantidad_robada: 196},
{ hora: 23, cantidad_robada: 128}


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

var width = 700,
	height = 350,
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
   colorScale = d3.scaleOrdinal(d3.schemeCategory10),
   heightScale = d3.scaleLinear()
   	.range([height -margin.top - margin.bottom,0]);	
	
var width = 700,
	height = 350,
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

	var width = 700,
	height = 350,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart3 = d3.select("#chart3")
		.append("svg")
		.attr("width", width )
		.attr("height", height)
		.attr("transform", "translate("+ width + "," + - 2*height + ")")
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
	
	var width = 700,
	height = 350,
  margin = {left: 30, right: 20, top: 5, bottom: 20},
	chart4 = d3.select("#chart4")
		.append("svg")
    .attr("width", width )
    .attr("height", height)
	.attr("transform", "translate("+ width + "," + - 2*height + ")")
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
    heightScale.domain([0, d3.max(myData, function (d) { return heightScale(d.cantidad_robada); })]);

  var ps = seccion.selectAll("rect")
			.data(myData);
	// Actions just for new items
	var psEnter =  ps.enter()
				     .append("rect")
                     .attr("x", 0)
                     .attr("width",15)
                     .attr("y", function(d) {return height-margin.top-margin.bottom-d.cantidad_robada;})
                     .attr("height", function (d) { return heightScale(d.cantidad_robada); })
	// Actions for new + updated
  ps.merge(psEnter) 
    .attr("x", function (d)  { return widthScale(d.hora); })
	.attr("height", function (d) { return d.cantidad_robada; })
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
 
//adiciono el label de los valores a todos los eleentos 
 var psEnter =  ps.enter()
    .append("text")
		.transition().duration(2000)
        .attr("x",function (d) { return widthScale(d.hora);})
		.transition().duration(2000)
        .attr("y",function (d) { return height-margin.top-margin.bottom-d.cantidad_robada;})
        .text(function (d) { return d.cantidad_robada; })
}

update(myData,chart);
update(myData2,chart2);
update(myData3,chart3);
update(myData4,chart4);

 
