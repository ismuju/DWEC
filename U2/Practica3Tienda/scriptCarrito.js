// Comprueba cuando se carga que el usuario tiene las cookies habilitadas y muestra un aviso si no es así.
if (!navigator.cookieEnabled) {
  alert("ACTIVA LAS COOKIES");
}


// Inicializa el objeto Usuario con los datos del usuario actual, calcula el importe de la compra y la muestra.
var usuario1 = new Usuario(micompra); //  COGE LOS PRODUCTOS SELECCIONADOS


usuario1.mostrarCompra();
usuario1.calcularImporte(); // LOS SUMA

cuerpo.innerHTML += "<b>IMPORTE TOTAL:</b> " + usuario1.importe + "€"; // MUESTRA EL TOTAL A PAGAR

// Elimina el último producto de la lista y actualiza el importe y el dibujo
function eliminar() {
  usuario1.eliminarCompra();
  usuario1.mostrarCompra();
  usuario1.importe = 0;
  usuario1.calcularImporte();
  cuerpo.innerHTML += "<b>IMPORTE TOTAL:</b> " + usuario1.importe + "€";
}

// si hay productos, muestra un mensaje de confirmación para aceptar las condiciones del pedido y una vez confirmado carga la página pedidoOK.html
function hacerPedido() {
  if (usuario1.compra.length > 0){
    if (confirm("Confirma las condiciones del pedido?")) {
      location.href = "pedidoOK.html";
    }
  } else {
    alert("No hay productos en el carrito.");
  }
}

// Muestra en otra ventana emergente las condiciones de compra y un botón que permite cerrarlas.
function condCompraOnline() {
  var ventanaCondiciones = window.open("", "Condiciones de Compra", "width=400,height=400"); //CREO LA VENTANA

  ventanaCondiciones.document.write("<center><h1>Condiciones de Compra</h1></center>");

  ventanaCondiciones.document.write("<p align='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");

  ventanaCondiciones.document.write("<center><br><br><button onclick='window.close()'>CERRAR VENTANA</button></center>");

}

// Vuelve a home.html
function inicio() {
  location.href = "home.html";
}


//  Imprime la página del carrito
function imprimir() {
  window.print();
}
