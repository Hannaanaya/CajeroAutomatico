//las clases son la definición de los objetos
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));


//este ciclo solo opera por la cantidad de obj dentro del array
for (var hannis of coleccion) { //in trae el indice del array
    hannis.mostrar();
}

for (var x in coleccion[0]) {
    console.log(x);
}