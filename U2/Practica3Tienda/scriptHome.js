// Creará el objeto p de tipo Surtido y dibujará el Surtido
var p = new Surtido(productos);
p.dibujarSurtido();
//var micompra = [productos[0],productos[3]];


// Toma como parámetro el objeto surtido, loordena por precios crecientes y vuelve a dibujar el surtido.
function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}

// Toma como parámetro el objeto surtido, lo ordena por precios decrecientes y vuelve a dibujar el surtido.
function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}

// Obtiene los productos veganos y los dibuja
function verVegano(){
  var v = p.filtrarVegano();
  p.dibujarSurtido(v);
}

// Vuelve a cargar la página
function recarga() {
  p.dibujarSurtido();
}

// Muestra en otra ventana emergente las condiciones de compra y un botón que permite cerrarlas.
function condCompraOnline() {
  var ventanaCondiciones = window.open("", "Condiciones de Compra", "width=400,height=400"); //CREO LA VENTANA

  ventanaCondiciones.document.write("<center><h1>Condiciones de Compra</h1></center>");

  ventanaCondiciones.document.write("<p align='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");

  ventanaCondiciones.document.write("<center><br><br><button onclick='window.close()'>CERRAR VENTANA</button></center>");

}

// Permite ir a la página carrito.html
function navegarCarrito() {
  location.href = "carrito.html";
}
