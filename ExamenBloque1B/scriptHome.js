
var i = new Inventario(lista);


onload = function(){
  i.ordenEdadMenos(); //ORDENA LA LISTA DE MAYOR A MENOR EDAD
  i.dibujaAnimales(lista); //LOS MUESTRO
};


function verPerros(){
  var pe = i.perros(); //SACO SOLO LOS PERROS
  i.dibujaAnimales(pe); //LOS MUESTRO
}

function recarga(){
    location.reload(); //RECARGO LA PAGINA
}

//CREO UNA NUEVA VENTANA DE CONDICIONES
function condiciones(){
  var w = window.open("","","height=500 width=500");
  w.document.write("<h1>Condiciones de adopción en Protectora Juan de Garay</h1><p>La adopción en nuestra protectora es totalmente desinteresada. Obtenemos ingresos a través de donaciones anónimas y con la colaboración de voluntarios</p>");
  w.document.write("<button onclick='window.close();'>Cerrar condiciones</button> <button onclick='print();'>Imprimir condiciones</button>");
}


function navegarAdoptar(){
  location.assign("adoptar.html"); //LE LLEVO A LA PAGINA ADOPTAR A CIEGAS
}
