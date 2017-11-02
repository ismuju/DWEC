
function Usuario(productos){
  this.id = Math.floor((Math.random()*1000)+1);
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = productos;
  this.importe = 0;

  this.eliminarCompra = function(){ //elimina el último elemento del array compra mientras existan elementos.
    if (this.compra.length > 0){
      this.compra.pop(); //BORRA ULTIMO ELEMENTO DEL ARRAY
    } else {
      alert("No te quedan más productos en el carrito.");
    }
  }

  this.calcularImporte = function(){ //calcula el importe
    function suma(total, num) {
        return total + num.precio;
    }
    this.importe = (this.compra.reduce(suma, this.importe)).toFixed(2);
  }

  this.mostrarCompra = function(){ //MUESTRA LOS PRODUCTOS QUE TIENE EL CARRITO
    cuerpo.innerHTML = "";
    var str = "";
    for (var i = 0; i < this.compra.length; i++) {
      str += "<div>";
      str += "<img src='" + this.compra[i].foto + "' alt='";
      str += this.compra[i].nombre + "' />";
      str += "<p>" + this.compra[i].nombre + "</p>";
      str += "<p>" + this.compra[i].descripcion + "</p>";
      str += "<p><b>" + this.compra[i].precio + "€</b></p>";
      str += "</div>";
    }
    cuerpo.innerHTML = str;
  }

}
