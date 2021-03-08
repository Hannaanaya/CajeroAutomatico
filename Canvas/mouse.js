var estado = 0;          // estado del click      
var colorLinea = "blue";    // color a la linea

var cuadrito = document.getElementById("area_de_dibujo");
var papel  = cuadrito.getContext("2d");
var x;                      // guardar coordenada en X
var y;  
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)

function dibujarMouse(evento) {
    if (estado == 1) {
        dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function presionarMouse(evento) {
    estado = 1; //click presionado
    x = evento.layerX;
    y = evento.layerY; 
}

function soltarMouse(evento){
    estado = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
  }

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
};