var home = document.getElementById("casita");
var papel = home.getContext("2d");
document.addEventListener("keydown", moverJack);

var fondo = {
    url: "home.jpg",
    cargaOK: false
}

var jack = {
    url: "jack2.png",
    cargaOK: false
}
var JackX = 500;
var JackY = 200

var conejo = {
    url: "conejo.jpg",
    cargaOK: false
}

 var cantidad = aleatorio(1, 5); 

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; //la direccion src dispara un evento llamado carga "load"
fondo.imagen.addEventListener("load", cargaFondo); //se implementa el evento carga/load y la funcion carga

jack.imagen = new Image();
jack.imagen.src = jack.url;
jack.imagen.addEventListener("load", cargaJack);

conejo.imagen = new Image();
conejo.imagen.src = conejo.url;
conejo.imagen.addEventListener("load", cargaConejo);

function cargaFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargaJack() {
    jack.cargaOK = true;
    dibujar();
}

function cargaConejo() {
    conejo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0); //0,0 indica que se dibuje una imagen completa
    }
    if(jack.cargaOK) {
        papel.drawImage(jack.imagen, JackX, JackY);
    }
    if (conejo.cargaOK) {
        console.log(cantidad);
        for (var v=0; v < cantidad; v++) {
            var x = aleatorio(0, 500);
            var y = aleatorio(0, 500);
            // var x = x * 1500;
            // var y = y * 1500;
            papel.drawImage(conejo.imagen, x, y);
        }
    }
}

function moverJack(e) {
    var movimiento = 50;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    switch(e.keyCode) {
        case teclas.UP:
            if(JackY > 0) {
                JackY = JackY - movimiento;
               dibujar();
            }
            break;
            case teclas.DOWN:
            if(JackY < 1000) {
                JackY = JackY + movimiento;
               dibujar();
            }
            break;
            case teclas.LEFT:
            if(JackX > 0) {
                JackX = JackX - movimiento;
               dibujar();
            }
            break;
            case teclas.RIGHT:
            if(JackX < 1000) {
                JackX = JackX + movimiento;
               dibujar();
            }
            break;
            default:
      console.log("Otra tecla : " + e.key);
    break;
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  };