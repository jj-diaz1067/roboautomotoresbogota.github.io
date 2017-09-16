var ventana_completa = d3.selectAll("g");

function desplazar(ventana_completa){
  ventana_completa.transition().duration(10000).attr("transform", "translate("+ width + "," + - 2*height + ")")
}
desplazar(ventana_completa);