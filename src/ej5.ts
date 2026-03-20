abstract class Pago{
    abstract procesarPago():void;
}

class PagoEfectivo extends Pago{
    monto:number;

    constructor(monto:number){
        super();
        this.monto = monto;
    }

    procesarPago(): void {
        console.log(`Pago en efectivo procesado por un monto de: $${this.monto}`)
    }
}

class PagoTarjeta extends Pago{
    numeroTarjeta:string

    constructor(numeroTarjeta:string){
        super();
        this.numeroTarjeta = numeroTarjeta;
    }

    procesarPago(): void {
        console.log(`Pago con tarjeta procesado, numero de tarjeta: ${this.numeroTarjeta}`)
    }
}

class Transferencia extends Pago{
    numeroCuenta:string

    constructor(numeroCuenta:string){
        super();
        this.numeroCuenta = numeroCuenta;
    }

    procesarPago(): void {
        console.log(`Transferencia bancaria procesada, numero de cuenta: ${this.numeroCuenta}`)
    }
}


const efectivo = new PagoEfectivo(1000)
const tarjeta = new PagoTarjeta("1234-1234-1234-1234")
const transferencia = new Transferencia("123456789")
efectivo.procesarPago()
tarjeta.procesarPago()
transferencia.procesarPago()