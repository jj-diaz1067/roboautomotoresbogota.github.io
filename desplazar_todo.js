function desplazar(){
  var ventana_completa = d3.selectAll("g");
  ventana_completa.transition().duration(2000).attr("transform", "translate("+ width + "," + - 2*height + ")")
				  
				  
	var myData2 =[
		{ barrio: "CASTILLA LA NUEVA E-8", cantidad_robada: 128},
{ barrio: "TINTAL    E-8", cantidad_robada: 74},
{ barrio: "VILLA ALSACIA E-8", cantidad_robada: 57},
{ barrio: "CIUDADELA COLSUBSIDIO E-10", cantidad_robada: 57},
{ barrio: "GALAN E-16", cantidad_robada: 55},
{ barrio: "CARVAJAL E-8", cantidad_robada: 52},
{ barrio: "MODELIA E-9", cantidad_robada: 46},
{ barrio: "ALCALÁ E-16", cantidad_robada: 45},
{ barrio: "PATIO BONITO I E-8", cantidad_robada: 45},
{ barrio: "TIMIZA CÉLULA A LOTE RA-2 E-8", cantidad_robada: 41},
{ barrio: "CASTILLA REAL     E-8", cantidad_robada: 37},
{ barrio: "TECHO  E-8", cantidad_robada: 32},
{ barrio: "MUZU E-16", cantidad_robada: 32},
{ barrio: "SANTA MATILDE I SECTOR E-16", cantidad_robada: 24},
{ barrio: "SANTA ISABEL E-14", cantidad_robada: 23},
{ barrio: "LAS MARGARITAS E-8", cantidad_robada: 21},
{ barrio: "GRAN GRANADA E-10", cantidad_robada: 19},
{ barrio: "CIUDAD KENNEDY CENTRAL E-8", cantidad_robada: 19},
{ barrio: "BOCHICA E-10", cantidad_robada: 19},
{ barrio: "VILLA LUZ E-10", cantidad_robada: 18},


]

update2(myData2);

}
  
function update2 (myData2) {

var antes = d3.selectAll("body").select("svg");
antes.remove();

var width = 700,
	height = 600,
  margin = {left: 200, right: 30, top: 20, bottom: 20},
	chart = d3.select("#chart")
			  .append("svg")
    .attr("width", width )
    .attr("height", height)
    .append("g").attr("transform", "translate("+ margin.left + "," + margin.top + ")"),
 xAxis = chart.append("g")
   	.attr("class", "x axis")
    .attr("transform", "translate("+ 0 + ","+ (height-margin.top-margin.bottom ) +")"),
   yAxis = chart.append("g")
   	.attr("class", "y axis"),
   widthScale = d3.scaleLinear()
    .range([0, width - margin.left -margin.right]),
   colorScale = d3.scaleOrdinal(d3.schemeCategory20),
   heightScale = d3.scaleBand()
   	.range([0, height -margin.top - margin.bottom]);
	
	

	// Update the scale to the new maximum
	widthScale.domain([0, d3.max(myData2, function (d) { return d.cantidad_robada; })])
   heightScale.domain(myData2.map(function (d) { return d.barrio; }));

  var ps = chart.selectAll("rect")
    			.data(myData2);

	// Actions just for new items
// Creates items
  ps.enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function (d)  { return heightScale(d.barrio); })
    .style("fill", function (d, i) { return colorScale(d.barrio); })
    .attr("height", heightScale.bandwidth())    
    .attr("width",0)
    .transition().duration(2000)
    .attr("width", function (d) { return widthScale(d.cantidad_robada); });

  // Updates items
  ps.text(function (d) { return d; })
    .attr("y", function (d)  { return heightScale(d.barrio); })
    .style("fill", function (d, i) { return colorScale(d.barrio); })
    .transition().duration(2000)    
    .attr("width", function (d) { return widthScale(d.cantidad_robada); });

	// Actions for deleted items
  ps.exit().remove();
    
  xAxis.call(d3.axisBottom(widthScale));
  yAxis.call(d3.axisLeft(heightScale));

  //adiciono el label de los valores a todos los eleentos 
 var psEnter =  ps.enter()
    .append("text")
    .transition().duration(2000)
        .attr("x",function (d) { return widthScale(d.cantidad_robada);})
    .transition().duration(2000)
        .attr("y",function (d) { return heightScale(d.barrio)+margin.top;})
        .text(function (d) { return d.cantidad_robada; })
}   
