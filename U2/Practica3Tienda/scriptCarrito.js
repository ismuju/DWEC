// a. Comprueba cuando se carga que el usuario tiene las cookies habilitadas y muestra un aviso si no es así.
if (!navigator.cookieEnabled) {
  alert("ACTIVA LAS COOKIES");
}


// b. Inicializa el objeto Usuario con los datos del usuario actual, calcula el importe de la compra y la muestra.
var micompra = [productos[0],productos[3]];

var usuario1 = new Usuario(micompra); //  COGE LOS PRODUCTOS SELECCIONADOS

usuario1.calcularImporte(); // LOS SUMA

document.write(usuario1.importe); // MUESTRA EL TOTAL A PAGAR





// c. Definirá las funciones que se emplean en carrito:
//       i. eliminar: elimina el último producto de la lista y actualiza el importe y el dibujo
//       ii. hacerPedido: si hay productos, muestra un mensaje de
//       confirmación para aceptar las condiciones del pedido y una
//       vez confirmado carga la página pedidoOK.html
//       iii. condCompraOnline: muestra en otra ventana emergente las
//       condiciones de compra y un botón que permite cerrarlas.
//       iv. Inicio: vuelve a home.html
//       v. Imprimir: imprime la página del carrito
