import { parse } from "path";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Tarjeta {
    constructor(saldoInicial) {
        this.puntos = 0;
        this.saldo = saldoInicial;
    }
    ;
}
class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000);
    }
    ;
    iniciar() {
        console.log(`Saldo inicial: $${this.saldo}`);
        this.procesarTransaccion();
    }
    procesarTransaccion() {
        if (this.saldo <= 0) {
            console.log(`Saldo agotado. Cuenta cerrada`);
            rl.close();
            return;
        }
        rl.question("Digite el monto de la transacción (0 para salir): ", (dato) => {
            rl.question("Ingrese el banco en el que se encuentra: ", (banco) => {
                const monto = parseFloat(dato);
                if (isNaN(monto) || monto < 0) {
                    console.log("Ingrese un monto válido");
                    return this.procesarTransaccion();
                }
                if (monto === 0) {
                    console.log("Operacion finalizada por el cliente");
                    rl.close();
                    return;
                }
                if (monto > this.saldo) {
                    console.log("Fondos insuficientes");
                }
                else {
                    this.saldo -= monto;
                    console.log(`Transacción realizada. Saldo restante: $${this.saldo}`);
                }
                banco = banco.toLowerCase();
                if (banco === "bac") {
                    this.puntos += 3;
                }
                else if (banco === "agricola") {
                    this.puntos += 5;
                }
                else {
                    this.puntos += 0;
                }
                console.log(`Puntos acumulados: ${this.puntos}`);
                this.procesarTransaccion();
            });
        });
    }
}
;
const tarjeta = new TarjetaCredito();
tarjeta.iniciar();
//# sourceMappingURL=ejer3.js.map