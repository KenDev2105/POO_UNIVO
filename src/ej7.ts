abstract class Transporte{
    abstract calcularCosto():void
}

class Taxi extends Transporte{
    costoKM: number;
    distancia: number;

    constructor(costoKM:number, distancia:number){
        super()
        this.costoKM = costoKM;
        this.distancia = distancia;
    }

    calcularCosto(): void {
        console.log(`El costo del taxi es: $${(this.costoKM * this.distancia).toFixed(2)}`)
    }
}

class Bus extends Transporte{
    pagoRuta: number;

    constructor(pagoRuta:number){
        super();
        this.pagoRuta = pagoRuta;
    }
    calcularCosto(): void {
        console.log(`El costo de la ruta del bus es: $${this.pagoRuta.toFixed(2)}`)
    }
}

class Uber extends Transporte{
    tarifaKM: number
    distancia: number

    constructor(tarifaKM:number, distancia:number){
        super()
        this.tarifaKM = tarifaKM;
        this.distancia = distancia;
    }

    calcularCosto(): void {
        console.log(`El costo del uber es: $${(this.tarifaKM * this.distancia).toFixed(2)}`)
    }
}

const taxi = new Taxi(2, 5)
const bus = new Bus(0.35)
const uber = new Uber(1, 5)
taxi.calcularCosto()
bus.calcularCosto()
uber.calcularCosto()