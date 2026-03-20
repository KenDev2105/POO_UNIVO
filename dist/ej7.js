class Transporte {
}
class Taxi extends Transporte {
    constructor(costoKM, distancia) {
        super();
        this.costoKM = costoKM;
        this.distancia = distancia;
    }
    calcularCosto() {
        console.log(`El costo del taxi es: $${(this.costoKM * this.distancia).toFixed(2)}`);
    }
}
class Bus extends Transporte {
    constructor(pagoRuta) {
        super();
        this.pagoRuta = pagoRuta;
    }
    calcularCosto() {
        console.log(`El costo de la ruta del bus es: $${this.pagoRuta.toFixed(2)}`);
    }
}
class Uber extends Transporte {
    constructor(tarifaKM, distancia) {
        super();
        this.tarifaKM = tarifaKM;
        this.distancia = distancia;
    }
    calcularCosto() {
        console.log(`El costo del uber es: $${(this.tarifaKM * this.distancia).toFixed(2)}`);
    }
}
const taxi = new Taxi(2, 5);
const bus = new Bus(0.35);
const uber = new Uber(1, 5);
taxi.calcularCosto();
bus.calcularCosto();
uber.calcularCosto();
export {};
//# sourceMappingURL=ej7.js.map