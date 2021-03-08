var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("draw");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
};

function dibujoPorClick() {
var lineas = parseInt(texto.value);
var l = 0;
var xi, xf, yi, yf;
var colorcito = "#FAA";
var espacio = ancho / lineas;

for( l = 0; l < lineas; l++)
{
  xf = espacio * l;
  yi = espacio * (l + 1);
  xi = espacio * l;
  yf = espacio * (l + 1);
  nxf = ancho - xf;
  nyf = ancho - yf;
  dibujarLinea(colorcito, xi, ancho, ancho, nyf);
  dibujarLinea(colorcito, 0, xf, nxf, 0);
  dibujarLinea(colorcito, 0, xf, yi, ancho);
  dibujarLinea(colorcito, xi, 0, ancho, yf);
  console.log("Línea " + l);
};

dibujarLinea(colorcito, ancho, 1, 1, 1);
dibujarLinea(colorcito, ancho, ancho, ancho, 1);  
dibujarLinea(colorcito, 1, 1, 1, ancho); //linea izquierda del borde
dibujarLinea(colorcito, 1, ancho, ancho, ancho); 
};

// lienzo.beginPath(); //la forma de JS de iniciar un trazo
//   lienzo.strokeStyle = color; //variable que asigna el color del trazo
//   lienzo.moveTo(xinicial, yinicial); //metodo o funcion de canvas para controlar el trazado de línea
//   lienzo.lineTo(xfinal, yfinal); //Traza una línea
//   lienzo.stroke(); //Dibuja la línea
//   lienzo.closePath(); // Cierra el trazo
