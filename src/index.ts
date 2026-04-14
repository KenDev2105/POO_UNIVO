import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
    public getArea(): number {
    return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
    super(width, width);
    }
}

const rect = new Rectangle(4, 5);
const sqr = new Square(5);
console.log(rect.getArea(), sqr.getArea());

//Metodos de Pago
//USO DE CLASS ABSTRACTA, Paypal y TarjetaCredito
//Clase Abstracta
abstract class MetodoPago{
    protected tipo: string;
    constructor(tipo:string){
        this.tipo = tipo;
    };

    abstract validar(): boolean;
    abstract procesar(monto:number): string;

    confirmarPago(monto:number): string | number{
        if(!this.validar()){
            return("Pago rechazado, por validacion fallida")
        }
        return this.procesar(monto)
    }
}

class TarjetaCredito extends MetodoPago{
    private numeroTarjeta: string;
    private CVV: string;

    constructor(numeroTarjeta:string, CVV:string){
        super("Tarjeta de Credito");
        this.numeroTarjeta = numeroTarjeta;
        this.CVV = CVV;
    }

    validar(): boolean {
        return this.numeroTarjeta.length === 16 && this.CVV.length === 3;
    }
    procesar(monto: number): string {
        return `Pago procesado de ${monto} de la tarjeta ${this.numeroTarjeta.slice(-4)}`
    };
}

class Paypal extends MetodoPago{
    private email: string;
    constructor(email:string){
        super("Paypal");
        this.email = email;
    }

    validar(): boolean {
        return this.email.includes("@") && this.email.includes(".");
    }

    procesar(monto: number): string {
        return `Pago procesado de ${monto} del Paypal ${this.email}`
    }
}

class Efectivo extends MetodoPago{
    dui:string;
    constructor(dui:string){
        super("Efectivo");
        this.dui = dui;
    }
    validar(): boolean {
        return this.dui.length === 9;
    }

    procesar(monto: number): string {
        return `Pago procesado de ${monto} del DUI ${this.dui}`
    }
}


rl.question("Ingresa el metodo de pago (1baxh   : Tarjeta, 2: Paypal, 3: Efectivo): ", (metodo)=>{
    metodo = metodo.toLowerCase();
    switch(metodo){
        case "1":
            rl.question("Ingresa el numero de la tarjeta: ", (num) =>{
                rl.question("Ingresa el CVV: ", (CVV) =>{
                    const tarjeta = new TarjetaCredito(num, CVV);
                    rl.question("Ingresa el monto a pagar: ", (monto) =>{
                        console.log(tarjeta.confirmarPago(Number(monto)));
                        rl.close();
                    })
                
                })
            })
        case "2":
            rl.question("Ingresa el email: ", (email) =>{
                const paypal = new Paypal(email);
                rl.question("Ingresa el monto a pagar:", (monto) =>{
                    console.log(paypal.confirmarPago(Number(monto)));
                    rl.close();
                })
            })
        case "3":
            rl.question("Ingresa el DUI: ", (dui) =>{
                const efectivo = new Efectivo(dui)
                rl.question("Ingresa el monto a pagar:", (monto) =>{
                    console.log(efectivo.confirmarPago(Number(monto)));
                    rl.close();
                })
            })
    }
})