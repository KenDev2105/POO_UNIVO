// Ejemplo 1
/* Pantalla de Carga de una Computadora: 
Una pantalla de carga de una computadora (en la cual sale el logo), 
puede variar dependiendo de la marca del computador. Por lo cual
un metodo mostrarPCarga()puede variar segun la marca del computador. */

/* abstract class Computadora{
    abstract mostrarPCarga():void
}

class Lenovo extends Computadora{
    mostrarPCarga(): void {
        console.log("---LENOVO--- \n  Cargando...")
    }
}
class HP extends Computadora{
    mostrarPCarga(): void {
        console.log("---HP--- \n  Cargando...")
    }
}

class Asus extends Computadora{
    mostrarPCarga(): void {
        console.log("---ASUS--- \n  Cargando...")
    }
}

let lenovo = new Lenovo()
let hp = new HP()
let asus = new Asus()

lenovo.mostrarPCarga()
hp.mostrarPCarga()
asus.mostrarPCarga()
 */
// Ejemplo 2
/* Mostrar resultado de una operación: 
El resultado de una operación puede variar dependiendo de que 
operación realicemos, un metodo mostrarResultado() 
puede variar si estamos multiplicando, dividiendo, sumando o restando */

abstract class Operacion{
    a: number;
    b :number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    };

    abstract mostrarResultado():number
}

class Suma extends Operacion{
    mostrarResultado(): number {
        return this.a + this.b
    }
}

class Resta extends Operacion{
    mostrarResultado(): number {
        return this.a - this.b
    }
}

class Multiplicacion extends Operacion{
    mostrarResultado(): number {
        return this.a * this.b
    }
}

class Division extends Operacion{
    mostrarResultado(): number {
        return this.a / this.b
    }
}

let suma = new Suma(10,5)
let resta = new Resta(10,5)
let multiplicacion = new Multiplicacion(10,5)
let division = new Division(10,5)

console.log(`El resultado de la suma es: ${suma.mostrarResultado()}`)
console.log(`El resultado de la resta es: ${resta.mostrarResultado()}`)
console.log(`El resultado de la multiplicacion es: ${multiplicacion.mostrarResultado()}`)
console.log(`El resultado de la division es: ${division.mostrarResultado()}`)