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
        setTimeout (esPareja, 300); //PARA QUE SE LLEGUE A VER LA SEGUNDA PAREJA
      }
    }
    setTimeout (todasDescubiertas, 100); //PARA QUE SE LLEGUE A VER LA ULTIMA PAREJA
  }



  function todasDescubiertas(descubierta){ //COMPROBAR SI HA DESCUBIERTO TODAS
    var contDescubiertas = document.getElementsByClassName("descubierta").length;
    if (contDescubiertas == 12) {
      alert("Enorabuena, has descubierto todas las parejas");
      // clearInterval(contador); //PARAMOS EL CRONOMETRO, LUEGO NO DEJA REINICIAR
      var time = (minut + ":" + segund);
      window.localStorage.ztiempo = time;

      ranking();

      window.localStorage.removeItem("ztiempo");

    }
  }


  var topNombre = ["top1Nombre","top2Nombre","top3Nombre","top4Nombre","top5Nombre"];
  var topTiempo = ["top1Tiempo","top2Tiempo","top3Tiempo","top4Tiempo","top5Tiempo"];

  function ranking(){


    for (var i = 0; i < topNombre.length; i++) {
      if (localStorage.getItem(topNombre[i])) { //SI EXISTE
        if (localStorage.getItem(topNombre[i]) == window.localStorage.zNom) { //SI TIENE EL MISMO NOMBRE
          if (localStorage.getItem(topTiempo[i]) >= window.localStorage.ztiempo) { //SI EL NUEVO TIEMPO ES MENOR AL QUE YA TENIA
            localStorage.setItem(topTiempo[i], window.localStorage.ztiempo); //GUARDO NUEVO TIEMPO
            mostrarRanking();
            return true;
          }
        }
      }
    }

    for (var i = 0; i < topNombre.length; i++) {
      if (localStorage.getItem(topTiempo[i]) > window.localStorage.ztiempo) { //SI EL NUEVO TIEMPO ES MENOR AL QUE HAY
        localStorage.setItem(topNombre[i], window.localStorage.zNom);
        localStorage.setItem(topTiempo[i], window.localStorage.ztiempo); //GUARDO NUEVO TIEMPO
        mostrarRanking();
        return true;
      }
    }

    for (var i = 0; i < topNombre.length; i++) {
      if (!localStorage.getItem(topTiempo[i]) && !localStorage.getItem(topNombre[i])) { //SI EL NUEVO TIEMPO ES MENOR AL QUE HAY
        localStorage.setItem(topNombre[i], window.localStorage.zNom); //GUARDO NOMBRE
        localStorage.setItem(topTiempo[i], window.localStorage.ztiempo); //GUARDO NUEVO
        mostrarRanking();
        return true;
      }
    }
  }



function mostrarRanking(){

  for (var a = topNombre.length; a > topNombre.length; a--) { //ORDENO

    if (localStorage.getItem(topNombre[a]) && localStorage.getItem(topTiempo[a])) { //SI EXISTE
      var nombre1 = localStorage.getItem(topNombre[a]);
      var tiempo1 = localStorage.getItem(topTiempo[a]);
      if (localStorage.getItem(topNombre[a-1]) && localStorage.getItem(topTiempo[a-1])) { //SI EXISTE EL QUE VA ANTES
        var nombre2 = localStorage.getItem(topNombre[a-1]);
        var tiempo2 = localStorage.getItem(topTiempo[a-1]);
        if (tiempo2 < tiempo1) {
          localStorage.setItem(topNombre[a], nombre2); //GUARDO NOMBRE
          localStorage.setItem(topTiempo[a], tiempo2); //GUARDO NUEVO

          localStorage.setItem(topNombre[a-1], nombre1); //GUARDO NOMBRE
          localStorage.setItem(topTiempo[a-1], tiempo1); //GUARDO NUEVO

        }
      }

    }

  }


  //CREO UNA NUEVA VENTANA
  var w = window.open("","","height=500 width=500");
  w.document.write("<center><h1>RANKING</h1>");

  for (var a = 0; a < topNombre.length; a++) {
    if (localStorage.getItem(topNombre[a]) && localStorage.getItem(topTiempo[a])) { //SI EXISTE
      w.document.write("<p>TOP " + (a+1) + " Nombre: <b>" + localStorage.getItem(topNombre[a]) + "</b> Tiempo: <b>" + localStorage.getItem(topTiempo[a]) + "</b></p>");
    }
  }
  w.document.write("<br><button onclick='window.close();'>Cerrar ventana</button></center>");


}




  function saveUser(){
    if (nombre.value == null || nombre.value.trim().length == 0) {
      alert("Introduce un nombre valido.");
      boton.style.backgroundColor = "red";
    }else {
      var user = nombre.value;
      boton.style.backgroundColor = "lime";
      nombre.style.fontWeight = "bold";
      window.localStorage.zNom = user;
    }

  }



  //BOTON USUARIO
  usuario.onsubmit = function(e){
    e.preventDefault(); //ANULAR EL BOTON
    saveUser();
    nombre.value="";
    nombre.placeholder = "Nombre correcto";

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
  var contador = setInterval(function test(){
    segundos.innerHTML=++segund;
    if (segund == 60) {
      minutos.innerHTML=++minut;
      segund=0;
    }
  }, 1000);


  //BOTON REINICIAR BORRA DATOS
  var formulario = document.forms[0];
  formulario.onsubmit = function(e){
    e.preventDefault(); //ANULAR EL BOTON
    movi=0;
    aciert=0;
    segund = 0;
    minut = 0;
    segundos.innerHTML=segund;
    minutos.innerHTML=minut;
    movimientos.innerHTML=movi;
    aciertos.innerHTML=aciert;
    random(); //VOLVER A CAMBIAR LAS PAREJAS DE SITIO Y DARLES LA VUELTA



  }



});
