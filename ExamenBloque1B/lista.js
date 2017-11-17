lista = [
  {nombre:"Bolita",
  especie:"perro",
  edad:0.5,
  foto:"https://i.imgflip.com/mg5gp.jpg",
  info:"Bolita es un perro extremadamente violento. Lo metieron a una secadora y desde entonces está resentido. Si no dedicas tiempo a peinarle a mano, te morderá"},
  {nombre:"Bigotes",
  especie:"gato",
  edad:1.25,
  foto:"https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg",
  info:"Es un gato muy tranquilo que está todo el día durmiendo y que te ayudará a hacer los deberes de inglés"},
  {nombre:"Mestre tortuga",
  especie:"tortuga",
  edad:250,
  foto:"https://www.mundomascota.net/wp-content/uploads/2016/06/Tortuga-de-tierra.jpeg",
  info:"El mestre tortuga se pone melancólico cuando llueve pero se ha sacado los ciclos formativos de DAW, ASIR y DAM por lo que te ayudará a programar javascript"},
  {nombre: "Dori",
  especie:"pez",
  edad:30,
  foto:"https://www.nauticalnewstoday.com/wp-content/uploads/2016/06/pez-cirujano-2.jpg",
  info:"Dori es un pez que sólo se acuerda de que no se acuerda de nada por lo que no te dará trabajo"},
  {nombre:"Phyton",
  especie:"perro",
  edad:5,
  foto:"http://www.fotoshumor.com/carpeta/1/original/65341491897215-Perro-nerd.jpg",
  info:"Phyton es una perra que programa en Phyton, Javascript, C++, CSS, Bootstrap, Symphony, etc. Es imprescindible que tenga acceso a Internet y 3 cafés diarios."},
  {nombre:"Oso",
  especie:"perro",
  edad:3,
  foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed0TDZ8GK8Un5XK0jHuKfERYPBA3I7qigWgHg8JfHDU8sGe07yA",
  info:"Oso es tu compañero ideal para pisos de ciudad. Es un perro que no come nada, que ocupa poco espacio y que no tira nada de pelo"}
];

//--CONSTRUCTOR ANIMAL
function Animal(nombre, especie, edad, foto, info){
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.foto = foto;
  this.info = info;
}

//CREO EL OBJETO  DEL NUEVO ANIMAL
var animal = new Animal("León", "Camaleón", 25, "https://rolloid.net/wp-content/uploads/2017/05/20-crias-de-camaleon-que-te-enamoraran-nada-mas-verlas-1493804764.jpg", "Los camaleones muestran su estado de animo a través del color de la piel.")

//AÑADO EL NUEVO ANIMAL AL ARRAY LISTA
lista.push(animal);
