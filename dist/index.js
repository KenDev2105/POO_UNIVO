"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    ;
    mostrar() {
        alert("El nombre es: " + this.nombre);
    }
}
let nombre = prompt("Ingrese su nombre") || "";
let people = new Persona(nombre, 20, 78789898);
people.mostrar();
//# sourceMappingURL=index.js.map