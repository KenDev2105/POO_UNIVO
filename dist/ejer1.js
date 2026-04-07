import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Persona {
    constructor() {
        this.sueldo = 0;
    }
}
class Cliente extends Persona {
    pedirSueldo() {
        rl.question("Ingrese su sueldo: ", (sueldo) => {
            this.sueldo = parseFloat(sueldo);
            this.evaluarCredito();
            rl.close();
        });
    }
    evaluarCredito() {
        console.log(`Sueldo ingresado: $${this.sueldo}`);
        if (this.sueldo > 1300) {
            console.log("Tarjeta aprobada por $2500");
        }
        else if (this.sueldo > 800) {
            console.log("Tarjeta aprobada por $1100");
        }
        else if (this.sueldo > 500) {
            console.log("Tarjeta aprobada por $700");
        }
        else {
            console.log("NO aplca para tarjeta de credito");
        }
    }
}
const cliente1 = new Cliente();
cliente1.pedirSueldo();
//# sourceMappingURL=ejer1.js.map