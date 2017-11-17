
onload = function(){ //CUANDO CARGUE LA PAGINA
  //---NUMERO ALEATORIO
  var numero = Math.floor(Math.random() * lista.length); //ARRAY  EMPIEZA EN 0, NO SE SUMA 1

  //---IMAGEN DEL ANIMAL
  var img = document.createElement("img");
  img.setAttribute("src",lista[numero].foto);
  img.setAttribute("width","320px");
  document.body.appendChild(img);

  //---NOMBRE DEL ANIMAL
  var p = document.createElement("p");
  var txt = document.createTextNode(lista[numero].nombre);
  p.appendChild(txt);
  document.body.appendChild(p).style.fontWeight = "bold";


  //----TEMPORIZADOR
  setInterval(temporizador, 25000);

  function temporizador() {
    if (!confirm("Sentimos que estés indeciso. ¿Sigues interesado?")) {
      location.href = "home.html";

    }
  }
} //---CIERRO EL ONLOAD



//---RECARGA DEL TITULO
function recarga(){
    location.reload(); //RECARGO LA PAGINA
}



//----BOTÓN ADOPTAR
function adoptar(){
  var input1 = document.querySelector('input[name="nombre"]').value; //GUARDO VALOR DEL INPUT NOMBRE
  var input2 = document.querySelector('input[name="telefono"]').value; //GUARDO VALOR DEL INPUT TELEFONO

  if (input1 && input2) { //SI LOS DOS TIENEN CONTENIDO
    location.assign("gracias.html");
  }
}
