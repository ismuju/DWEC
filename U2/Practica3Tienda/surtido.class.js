function Surtido(productos) {
  this.productos = productos;

  this.ordenPrecioMas = function(){ //ORDENA LOS PRODUCTOS DE MENOR A MAYOR
    this.productos.sort(function(p1,p2){
      return (p1.precio - p2.precio);
    });
  }


  this.ordenPrecioMenos = function(){ //ORDENA LOS PRODUCTOS DE MAYOR A MENOR
    this.productos.sort(function(p1,p2){
      return (p2.precio - p1.precio);
    });
  }


  this.filtrarVegano = function(){ //MUESTRA SOLO PRODUCTOS VEGANOS
    var a = this.productos.filter(function(p1){
      return p1.vegano;
    });
    return a;
  }

  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if(produ == undefined){
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt='";
        str += this.productos[i].nombre + "' />";
        str += "<p>" + this.productos[i].nombre + "</p>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "€</b></p>";
        str += "</div>";
      }
    } else{ //SI NO SE LE PASA ARRAY
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt='";
        str += produ[i].nombre + "' />";
        str += "<p>" + produ[i].nombre + "</p>";
        str += "<p>" + produ[i].descripcion + "</p>";
        str += "<p><b>" + produ[i].precio + "€</b></p>";
        str += "</div>";
      }
    }
    cuerpo.innerHTML = str;
  }
}
