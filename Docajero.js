var imagenes = [];
imagenes["100"] = "billete100.jpg";
imagenes["50"] = "billete50.jpg";
imagenes["20"] = "billete20.jpg";
imagenes["10"] = "billete10.jpg";

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
    }
};

var caja = [];
caja.push( new Billete(100, 2));
caja.push( new Billete(50, 3));
caja.push( new Billete(20, 5));
caja.push( new Billete(10, 5));

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

function saldo() {
    var monto = 0;
    for(var v of caja) {
        monto = monto + v.valor * v.cantidad;
        total = monto;
        resultado.innerHTML = "Cantidad de saldo: " + "$" + monto + "<hr />"; 
    }
}
function entregarDinero() {
    var extraccion = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if(total >= dinero) {
        for(bi of caja) {
            if(dinero > 0) {
                div = Math.floor(dinero/bi.valor);
                if(div>bi.cantidad) {
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
                bi.cantidad = bi.cantidad-papeles;
                for(var i = 0; i < papeles; i++) {
                    extraccion.push(new Billete(bi.valor, 1));
                }
                dinero -= (bi.valor * papeles);
            }
        } 
        if(dinero == 0) {
            resultado.innerHTML += "Se han retirado : <br />";
            for(var e of extraccion) {		
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
            }
            resultado.innerHTML += "<hr />";
            contar();
        } else {
            resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
        }
    } else {
        resultado.innerHTML += "Por el momento estoy vacio: <hr />";
    }
}
function contar() {
    total = 0;
    for(var tot of caja) {
        total = total + tot.valor * tot.cantidad;
    }
    console.log(total);
}