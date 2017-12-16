document.addEventListener('DOMContentLoaded',function(){


  function random(){
    //POSICIONES ALEATORIAS
    var array = new Array(12); //CREAMOS ARRAY TAMAÑO 11
    for (var i = 0; i < array.length; i++) {
        array[i] = i; //AÑADIR VALORES ARRAY
    }
    array.sort(() => Math.random() > 0.5 ? 1 : -1); //DESORDENAR ARRAY


    //TABLA DE IMAGENES
    var imagenes;
    imagenes += "<table>";
    var cont=0;
    for (var i = 0; i < 3; i++) {
      imagenes += "<tr>";
      for (var j = 0; j < 4; j++) {
        imagenes += "<td>";
        imagenes += '<img src="img/cruz.png" id='+ array[cont] +'>';
        imagenes += "</td>";
        cont++;
      }
      imagenes += "</tr>";

    }
    imagenes += "</table>";

    tablero.innerHTML = imagenes;


    //CREO EL EVENTO CLICK PARA CADA IMAGEN
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
      image[i].addEventListener('click',descubrir);
    }

  }

  random();//EJECUTO EVENTO PARA CAMBIAR IMAGENES Y DARLES LA VUELTA


  //EJECUTO EL CAMBIO DE IMAGEN Y SEGUIDO QUITO EL EVENTO
  var descubiertos = new Array(); //CREAMOS ARRAY TAMAÑO 11
  var movi=0;
  var aciert=0;
  movimientos.innerHTML=movi;
  aciertos.innerHTML=aciert;

  function descubrir(e){
    descubiertos.push(e.target.id); //GUARDAMOS EL ID DE LOS DESCUBIERTOS
    if (descubiertos.length <= 2) { //PARA QUE EL USUARIO NO EMPIECE A CLICKAR EN TODAS A LA VEZ Y SE DESCUBRAN
      e.target.src = "img/" + e.target.id + ".jpg";
      e.target.className = "descubierta";
      if (descubiertos.length == 2) {
        setTimeout (esPareja, 100); //PARA QUE SE LLEGUE A VER LA SEGUNDA PAREJA
      }
    }
    setTimeout (todasDescubiertas, 100); //PARA QUE SE LLEGUE A VER LA ULTIMA PAREJA
  }



  function todasDescubiertas(descubierta){ //COMPROBAR SI HA DESCUBIERTO TODAS
    var contDescubiertas = document.getElementsByClassName("descubierta").length;
    if (contDescubiertas == 12) {
      alert("Enorabuena, has descubierto todas las parejas");
      clearInterval(contador); //PARAMOS EL CRONOMETRO
    }
  }


  function esPareja(){

    if (!checkPareja()) {
      movimientos.innerHTML=++movi;
      // alert("Prueba de nuevo");

      for (var i = 0; i < descubiertos.length; i++) {

        var pareja = document.getElementById(descubiertos[i]);

        pareja.src = "img/cruz.png";
        pareja.classList.remove("descubierta");
        pareja.addEventListener('click',descubrir);
      }

    }else{
      movimientos.innerHTML=++movi;
      aciertos.innerHTML=++aciert;
      for (var i = 0; i < descubiertos.length; i++) {
        var pareja = document.getElementById(descubiertos[i]);
        pareja.removeEventListener('click',descubrir);
      }

    }
    descubiertos.splice(0, 2); //LIMPIAMOS ARRAY PAREJAS
  }


  function checkPareja(){
    switch (descubiertos[0]) {
      case "0": //GOKU
        if (descubiertos[1] == 1) {
          return true;
        }
        break;
      case "1": //CHICHI
        if (descubiertos[1] == 0) {
          return true;
        }
        break;
      case "2": //VEGETA
        if (descubiertos[1] == 3) {
          return true;
        }
        break;
      case "3": //BULMA
        if (descubiertos[1] == 2) {
          return true;
        }
        break;
      case "4": //KRILIN
        if (descubiertos[1] == 5) {
          return true;
        }
        break;
      case "5": //ANDROIDE 18
        if (descubiertos[1] == 4) {
          return true;
        }
        break;
      case "6": //GOHAN
        if (descubiertos[1] == 7) {
          return true;
        }
        break;
      case "7": //VIDEL
        if (descubiertos[1] == 6) {
          return true;
        }
        break;
      case "8": //TRUNKS
        if (descubiertos[1] == 9) {
          return true;
        }
        break;
      case "9": //MAI
        if (descubiertos[1] == 8) {
          return true;
        }
        break;
      case "10": //ROSHI
        if (descubiertos[1] == 11) {
          return true;
        }
        break;
      case "11": //REVISTAS
        if (descubiertos[1] == 10) {
          return true;
        }
        break;
      default:
        return false;
    }
  }



  //CONTADOR SEGUNDOS
  var segund = 0;
  var minut = 0;
  var contador = setInterval(function(){
    segundos.innerHTML=++segund;
    if (segund == 60) {
      minutos.innerHTML=++minut;
      segund=0;
    }
  }, 1000);


  //BOTON REINICIAR BORRA DATOS
  var formulario = document.forms[0];
  formulario.onsubmit = function(e){
    movi=0;
    aciert=0;
    segund = 0;
    minut = 0;
    segundos.innerHTML=segund;
    minutos.innerHTML=minut;
    movimientos.innerHTML=movi;
    aciertos.innerHTML=aciert;
    random(); //VOLVER A CAMBIAR LAS PAREJAS DE SITIO Y DARLES LA VUELTA

    e.preventDefault(); //ANULAR EL BOTON

  }



});
