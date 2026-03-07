import strict from "node:assert/strict";
import { stringify } from "node:querystring";
class Vehiculo {
    constructor(marca, modelo, año) {
        if (!marca || !modelo)
            throw new Error("Marca y modelo son obligatorios");
        if (año > new Date().getFullYear())
            throw new Error("El año no es valido");
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    ;
    mostrarInformacion() {
        console.log(`Vehiculo: ${this.marca} ${this.modelo} ${this.año}`);
    }
}
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, numPuertas) {
        super(marca, modelo, año);
        this.numPuertas = numPuertas;
    }
    ;
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.numPuertas}`);
    }
}
console.log(" --- Iniciando Registro de Vehiculos --- ");
try {
    const miCarro = new Automovil("Honda", "Civic", 2020, 2);
    miCarro.mostrarInformacion();
}
catch (error) {
    console.log(`[LOG]: Se bloqueó un intento de registro inválido, Razón: ${error.message}`);
}
console.log(" --- Fin del proceso. El sistema continúa en ejecución. ---");
//Ejercicio Guiado en Clase
class Contenido {
    constructor(titulo, duracionMinutos, clasificacion) {
        this.titulo = titulo;
        this.duracionMinutos = duracionMinutos;
        this.clasificacion = clasificacion;
        if (!titulo.trim())
            throw new Error("El titulo no puede estar vacio.");
        if (duracionMinutos <= 0)
            throw new Error("La duración debe ser mayor a 0");
    }
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo} | Clasificación: [${this.clasificacion}]`);
    }
}
class Pelicula extends Contenido {
    constructor(titulo, duracionMinutos, clasificacion, director) {
        super(titulo, duracionMinutos, clasificacion);
        this.director = director;
        if (!director.trim())
            throw new Error("El director es obligatorio. ");
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Director: ${this.director} | Tipo: Largometraje`);
    }
}
try {
    const nuevaPeli = new Pelicula("Oppenheimer", 180, "B", "");
    nuevaPeli.mostrarDetalles();
}
catch (error) {
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`);
}
// Ejercicio 1
class Cuenta {
    constructor(titular, saldo) {
        if (saldo <= 0)
            throw new Error("El saldo no puede ser menor a cero");
        this.titular = titular;
        this.saldo = saldo;
    }
    ;
}
class CuentaAhorro extends Cuenta {
    constructor(titular, saldo, tasaInteres) {
        super(titular, saldo);
        this.tasaInteres = tasaInteres;
    }
    ;
    calcularInteres() {
        const interes = this.tasaInteres * this.saldo;
        const interesAplicado = this.saldo + interes;
        return interesAplicado;
    }
}
try {
    const cuenta = new CuentaAhorro("Ken", 0, 0.10);
    cuenta.calcularInteres();
}
catch (error) {
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`);
}
// Ejercicio 2
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        if (this.edad <= 0)
            throw new Error(`La edad no puede ser menor ni igual a cero`);
    }
    ;
}
class Estudiante extends Persona {
    constructor(nombre, edad, carnet) {
        super(nombre, edad);
        this.carnet = carnet;
    }
    presentarse() {
        console.log(`Mi nombre es: ${this.nombre} y tengo ${this.edad} años. Soy estudiante y este es mi carnet ${this.carnet}`);
    }
}
class Docente extends Persona {
    constructor(nombre, edad, especialidad) {
        super(nombre, edad);
        this.especialidad = especialidad;
    }
    presentarse() {
        console.log(`Mi nombre es: ${this.nombre} y tengo ${this.edad} años. Soy docente y me especializo en: ${this.especialidad}`);
    }
}
try {
    const estudiante = new Estudiante("Ken", 0, "u20250017");
    estudiante.presentarse();
}
catch (error) {
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`);
}
const estudiante = new Estudiante("Ken", 20, "u20250017");
estudiante.presentarse();
const docente = new Docente("Ken", 20, "Matematicas");
docente.presentarse();
// Ejercicio 3
class Producto {
    constructor(nombre, precioBase) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}
class ProductoFisico extends Producto {
    constructor(nombre, precioBase, pesoKG) {
        super(nombre, precioBase);
        this.pesoKG = pesoKG;
    }
    precioFinal() {
        const total = this.precioBase + 2 * this.pesoKG;
        console.log(`El precio base de su producto es de $${this.precioBase} \nEl precio final es de $${total}`);
    }
}
class ProductoDigital extends Producto {
    constructor(nombre, precioBase, plataforma) {
        super(nombre, precioBase);
        this.plataforma = plataforma;
    }
    precioFinal() {
        console.log(`El precio final de su producto es de $${this.precioBase}`);
    }
}
const fisico = new ProductoFisico("Bloodborne", 40, 1);
fisico.precioFinal();
const digital = new ProductoDigital("Bloodborne", 40, "PlayStation Store");
digital.precioFinal();
//# sourceMappingURL=index.js.map