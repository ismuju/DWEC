function Inventario(lista){
  this.animales = lista;
  this.dibujaAnimales = function(listado){
    cuerpo.innerHTML = "";
    var str = "";
    for (var i = 0; i < listado.length; i++){
      str += "<div>";
      str += "<img src='" + listado[i].foto + "' alt='";
      str += listado[i].nombre + "'/>";
      str += "<p><b>" + listado[i].nombre + "</b></p>";
      str += "<p><b> Más información: </b>" + listado[i].info + "</p>";
      str += "<p><b> Edad:</b>" + listado[i].edad + "</p>";
      str += "</div>";
    }
    cuerpo.innerHTML = str;
  }
}

//ORDENA LOS PRODUCTOS DE MAYOR A MENOR
Inventario.prototype.ordenEdadMenos = function(){
  this.animales.sort(function(e1,e2){
    return (e2.edad - e1.edad);
  });
}

//MUESTRA SOLO PERROS
Inventario.prototype.perros = function(){
  var a = this.animales.filter(function(es){
    return es.especie == "perro";
  });
  return a;
}
