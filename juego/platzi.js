var vp = document.getElementById("villaplatzi"); //id de html
var papel = vp.getContext("2d"); //se dibuja vp en 2d 
document.addEventListener("keydown", moverVaca);

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url:"vaca.png",
    cargaOK: false
};
var xVaca = 100;
var yVaca = 100;

var cerdo = {
    url:"cerdo.png",
    cargaOK: false
};
var xCerdo = new Array();
var yCerdo = new Array();

var pollo = {
    url:"pollo.png",
    cargaOK: false
};
var xPollo = new Array();
var yPollo = new Array();

fondo.imagen = new Image(); //Image es una nueva definición de objeto con new
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cantidad_pollos = aleatorio(0, 5);
var cantidad_cerdos = aleatorio(0, 5);
console.log("Cantidad de Pollos: " + cantidad_pollos);
console.log("Cantidad de Cerdos: " + cantidad_cerdos);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos() {
    cerdo.cargaOK = true;
    mantenerPosicion();
}
function cargarPollos() {
    pollo.cargaOK = true;
    mantenerPosicion();
}

function moverVaca(e) {
    var movimiento = 50;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };
    
    switch(e.keyCode) {
    case teclas.UP:
      if (yVaca > 0) {
        yVaca = yVaca - movimiento;
        dibujar();
      }
    break;
    case teclas.DOWN:
      if (yVaca < 450) {
        yVaca = yVaca + movimiento;
        dibujar();
      }
    break;
    case teclas.LEFT:
      if (xVaca > 0) {
        xVaca = xVaca - movimiento;
        dibujar();
      }
    break;
    case teclas.RIGHT:
      if(xVaca < 450) {
        xVaca = xVaca + movimiento;
        dibujar();
      }
    break;
    default:
      console.log("Otra tecla : " + e.key);
    break;
    }
};

function mantenerPosicion() {
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad_pollos; i++) {
          var x = aleatorio(0, 6);
          var y = aleatorio(0, 6);
          var x = x * 70;
          var y = y * 70;
          xPollo[i] = x;
          yPollo[i] = y;
        }
      }
      if (cerdo.cargaOK) {
        for (var i = 0; i < cantidad_cerdos; i++) {
          var x = aleatorio(0, 6);
          var y = aleatorio(0, 6);
          var x = x * 70;
          var y = y * 70;
          xCerdo[i] = x;
          yCerdo[i] = y;
        }
    }
    dibujar();
}

function dibujar() {
    if(fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK) {
        papel.drawImage(vaca.imagen, xVaca, yVaca);
    }
    if (pollo.cargaOK) {
        for (var i = 0; i < cantidad_pollos; i++) {
          papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }
    if (cerdo.cargaOK) {
        for (var i = 0; i < cantidad_cerdos; i++) {
          papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
        }
    }
};

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
};