/* Ejemplos linea 1-135
   Ejercicios linea 138 en delante
*/
// Ejemplo 1
class Player {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }
    ;
    recibirDaño() {
        const puntos = Number(Math.random().toFixed(2)) * 100;
        this.vida -= puntos;
        console.log(`Has recibido ${puntos.toFixed(0)} de daño, tu vida actual es de:  ${this.vida}`);
    }
    ;
    status() {
        if (this.vida <= 0) {
            console.log("Has muerto!");
        }
        else {
            console.log(`Sigues con vida! ${this.nombre}, estas lleno de Determinación`);
        }
    }
}
/* const pj = new Player("Ken", 100)
pj.recibirDaño()
pj.status() */
// Ejemplo 2
class OrdenCafe {
    constructor(tipoCafe, cantidad, precio) {
        this.tipoCafe = tipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    totalPagar(cantidad) {
        if (cantidad > this.cantidad) {
            const total = cantidad * this.precio;
            console.log(`Su total a pagar es de $${total}`);
        }
        else {
            console.log("No hay cantidad suficiente de producto o stock del mismo");
        }
    }
}
/* const pedido = new OrdenCafe("Capuccino", 20, 4)
pedido.totalPagar(21) */
// Ejemplo 3
class Mascota {
    constructor(nombre, hambre) {
        this.nombre = nombre;
        this.hambre = hambre;
    }
    comer() {
        this.hambre -= 20;
        console.log(`El hambre ha disminuido en 20, tienes ${this.hambre} de hambre`);
    }
    correr() {
        this.hambre += 10;
        console.log(`El hambre ha incrementado en 10, tiene ${this.hambre} de hambre`);
    }
}
/* const perro = new Mascota("Balú",100)
perro.comer()
perro.correr() */
// Ejemplo 4
class Alarma {
    constructor(codigo) {
        this.estado = true;
        this.codigo = codigo;
    }
    desactivar(intento) {
        if (intento === this.codigo) {
            this.estado = false;
            console.log("El codigo de acceso es valido, continue");
        }
        else {
            console.log("EL codigo de acceso es incorrecto");
        }
    }
}
/* const alarma = new Alarma("u20250017")
alarma.desactivar("u20250017") */
// Ejemplo 5
class TanqueCombustible {
    constructor(capacidadMaxima, nivelActual) {
        this.capacidadMaxima = 100;
        this.nivelActual = 60;
        this.capacidadMaxima = capacidadMaxima;
        this.nivelActual = nivelActual;
    }
    agregarCombustible(agregar) {
        if (this.nivelActual <= this.capacidadMaxima) {
            this.nivelActual += agregar;
            console.log(`Tienes ${this.nivelActual} de gasolina`);
        }
        else {
            console.log(`Has superado el limite maximo del tanque`);
        }
    }
    consumirCombustible() {
        if (this.nivelActual === 0) {
            console.log("No tienes gasolina");
        }
        else if (this.nivelActual > 0 && this.nivelActual <= 15) {
            console.log("Tienes poca gasolina");
        }
    }
}
/* const corvette = new TanqueCombustible(100,45)
corvette.agregarCombustible(56) */
// Ejercicio 1
class Empleado {
    constructor(nombre, salarioBase, horasExtra) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasExtra = horasExtra;
    }
    salarioTotal(cantidadHoras) {
        this.horasExtra *= cantidadHoras;
        const total = this.salarioBase + this.horasExtra;
        console.log(`Su salario base es de: $${this.salarioBase.toFixed(2)} \n Su total de horas extra trabajadas es de: ${cantidadHoras} por un monto de $${this.horasExtra.toFixed(2)} \n Su pago total es de: $${total}`);
    }
}
const empleado = new Empleado("Ken", 1000, 100);
empleado.salarioTotal(2);
export {};
//# sourceMappingURL=index.js.map