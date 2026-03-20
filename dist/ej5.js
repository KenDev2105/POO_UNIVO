class Pago {
}
class PagoEfectivo extends Pago {
    constructor(monto) {
        super();
        this.monto = monto;
    }
    procesarPago() {
        console.log(`Pago en efectivo procesado por un monto de: $${this.monto}`);
    }
}
class PagoTarjeta extends Pago {
    constructor(numeroTarjeta) {
        super();
        this.numeroTarjeta = numeroTarjeta;
    }
    procesarPago() {
        console.log(`Pago con tarjeta procesado, numero de tarjeta: ${this.numeroTarjeta}`);
    }
}
class Transferencia extends Pago {
    constructor(numeroCuenta) {
        super();
        this.numeroCuenta = numeroCuenta;
    }
    procesarPago() {
        console.log(`Transferencia bancaria procesada, numero de cuenta: ${this.numeroCuenta}`);
    }
}
const efectivo = new PagoEfectivo(1000);
const tarjeta = new PagoTarjeta("1234-1234-1234-1234");
const transferencia = new Transferencia("123456789");
efectivo.procesarPago();
tarjeta.procesarPago();
transferencia.procesarPago();
export {};
//# sourceMappingURL=ej5.js.map