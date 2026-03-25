import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/* abstract class persona{
    constructor(public nombre: string) {}

    abstract saludar(): void;
}

class Salvadoreno extends persona{
    saludar(): void {
        console.log("¡Hola que tal! me llamo " + this.nombre);
    }
}

class Ingles extends persona {
    saludar(): void {
        console.log("Hello my name is " + this.nombre);
    }
}
console.log("--- SIMULADOR DE SALUDOS");

rl.question("¿Como te llamas?: ", (nombre: string) =>{
    rl.question("Elige idioma (1: español, 2: Ingles): ", (opcion: string)=>{

        let alguien: persona;

        if (opcion === "1"){
            alguien = new Salvadoreno(nombre);
        } else{
            alguien = new Ingles(nombre);
        }

        alguien.saludar();
        rl.close();
    });
});

abstract class pago {
    constructor(protected monto: number){
        if (monto <= 0){
            throw new Error("El monto debe ser una cantidad positiva. ");
        }
    }
    abstract procesarPago(): void;

public mostrarRecibo(): void{
    console.log("----------------------------------------------");
    console.log("RECIBO DE PAGO");
    console.log("Monto procesado: $" + this.monto);
    console.log("Estado exitoso");
    console.log("----------------------------------------------");
    }
}

class pagoEfectivo extends pago{
    override procesarPago(): void {
        console.log("Procesando pago en efectivo...");
        console.log("Por favor, entregue el dinero al cajero.");
    }
}

class pagoTarjeta extends pago {
    constructor(monto: number, private nroTarjeta: string) {
        super(monto); //enviamos el monto al padre
    }

    override procesarPago(): void {
        console.log("Conectando con el banco....");
        console.log("Validando tarjeta termina en: " + this.nroTarjeta.slice(-4));
        console.log("Cargo de $" + this.monto + "autorizado.");
    }
}

console.log("=== SISTEMA DE COBRO UNIVERSITARIO ===");

rl.question("Seleccione método (1: Efectivo, 2: Tarjeta): ", (opcion: string)=> {
    rl.question("Ingrese el monto a pagar: ", (montoInput:string) => {
        const montoNum = parseFloat(montoInput);
        let miPago: pago; //Variable de tipo padre (poliformismo)
        if (opcion === "1"){
            miPago = new pagoEfectivo(montoNum);
            finalizarTransaccion(miPago);
        }
        else if(opcion === "2"){
            rl.question("Ingrese su número de tarjeta: ", (tarjeta: string) =>{
                miPago = new pagoTarjeta(montoNum, tarjeta);
                finalizarTransaccion(miPago);
            });
        }
        else {
            console.log("Opción no valida.");
            rl.close();
        }
    });
});


function finalizarTransaccion(p: pago){
    console.log("\nEjecutando proceso de pago...");
    p.procesarPago(); //aqui se decide que codigo correr (efectivo o tarjeta).
    p.mostrarRecibo
    rl.close(); //cerramos la interfaz para que el programa termine.
} */
//Ejercicios 
// 1
/* abstract class Transporte {
    constructor(protected nombre: string) {}

    abstract calcularCosto(distancia: number): number;

    public mostrarDetalle(distancia: number): void{
        const total = this.calcularCosto(distancia);

        console.log("DETALLES DEL VIAJE");
        console.log("Transporte: " + this.nombre);
        console.log("Distancia: " + distancia + "KM");
        console.log("TOTAL A PAGAR: $", + total.toFixed(2));
        
    }
}

class taxi extends Transporte {
    constructor(){
        super("Taxi");
    }
    override calcularCosto(distancia: number): number {
        return distancia * 0.50;
    }
}

class Uber extends Transporte {
    constructor() {
        super("Uber");
    }
    override calcularCosto(distancia: number): number {
        return distancia * 0.75;
    }
}


console.log("=== SISTEMA DE TRANSPORTE ===");

rl.question("Seleccione Transporte (1: Taxi, 2: Uber): ", (opcion: string)=> {
    rl.question("Ingresa la distancia en KM: ", (distanciaInput: string)=> {

        const distancia = parseFloat(distanciaInput);
        if (isNaN(distancia) || distancia <= 0) {
            console.log("Distancia invalida.");
            rl.close();
            return;
        }
            let Transporte: Transporte;

            if (opcion === "1"){
                Transporte = new taxi();
                finalizarViaje(Transporte, distancia);
            }
            else if (opcion === "2"){
                Transporte = new Uber();
                finalizarViaje(Transporte, distancia);
            }
            else {
                console.log("Opción no valida.");
                rl.close();
            }
    });
});

function finalizarViaje(t: Transporte, distancia: number){
    console.log("\nCalculando costo del viaje...");
    t.mostrarDetalle(distancia);
    rl.close();
} */
//2
class Figura {
    mostrarResultados() {
        console.log("RESULTADOS");
        console.log("Área: " + this.calcularArea().toFixed(2));
        console.log("Perímetro: " + this.calcularPerimetro().toFixed(2));
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
console.log("=== CALCULADORA DE FIGURAS ===");
rl.question("Seleccione figura (1: Cuadrado, 2: Círculo): ", (opcion) => {
    if (opcion === "1") {
        rl.question("Ingrese el lado del cuadrado: ", (ladoInput) => {
            const lado = parseFloat(ladoInput);
            if (isNaN(lado) || lado <= 0) {
                console.log("Valor inválido.");
                rl.close();
                return;
            }
            const figura = new Cuadrado(lado);
            finalizar(figura);
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese el radio del círculo: ", (radioInput) => {
            const radio = parseFloat(radioInput);
            if (isNaN(radio) || radio <= 0) {
                console.log("Valor inválido.");
                rl.close();
                return;
            }
            const figura = new Circulo(radio);
            finalizar(figura);
        });
    }
    else {
        console.log("Opción no válida.");
        rl.close();
    }
});
function finalizar(f) {
    console.log("\nCalculando resultados...");
    f.mostrarResultados();
    rl.close();
}
//# sourceMappingURL=index.js.map