class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}
class Carro extends Vehiculo {
    mover(distancia) {
        console.log(`Has conducido ${distancia} km en tu carro ${this.marca}`);
    }
}
class Bicicleta extends Vehiculo {
    mover(distancia) {
        console.log(`Has pedaleado ${distancia} km`);
    }
}
class Motocicleta extends Vehiculo {
    mover(distancia) {
        console.log(`Has conducido ${distancia} km en tu motocicleta ${this.marca}`);
    }
}
const carro = new Carro("Nissan");
const bicicleta = new Bicicleta("Trek");
const motocicleta = new Motocicleta("Harley-Davidson");
carro.mover(50);
bicicleta.mover(20);
motocicleta.mover(5);
export {};
//# sourceMappingURL=ej2.js.map