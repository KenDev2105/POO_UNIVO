// ? Ejemplo clase
class Animales {
    constructor(nombre, categoria, raza) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    correr() {
        const print = console.log(`${this.nombre} corre 40km/h ya que es un ${this.categoria} de la raza ${this.raza}`);
        return print;
    }
}
class Encargado extends Animales {
    constructor(nombre, categoria, raza, dueño) {
        super(nombre, categoria, raza);
        this.dueño = dueño;
    }
    mostrar() {
        return console.log(`${this.dueño} se la pica solo porque su mascota llamada ${this.nombre} es de raza ${this.raza}`);
    }
}
// Ejercicio
class Venta extends Encargado {
    constructor(nombre, categoria, raza, dueño, precio) {
        super(nombre, categoria, raza, dueño);
        this.precio = precio;
    }
    vender() {
        console.log(`${this.nombre} se vende a $${this.precio}`);
    }
}
const exec = new Venta("Balú", "perro", "Husky", "Ken", 20);
exec.mostrar();
exec.correr();
exec.vender();
export {};
//# sourceMappingURL=index.js.map