class Pakiman {
    constructor(n, v, a) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a; //this es una referencia a la instancia(cauchin) de la clase
        
        this.imagen.src = imagenes[this.nombre]
    }
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen) //appendChild es como agregarle un hijo a la clase
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");
    }
}