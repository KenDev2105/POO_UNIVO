abstract class Vehiculo{
    marca:string;

    constructor(marca:string){
        this.marca = marca;
    }

    abstract mover(distancia:number):void;
}

class Carro extends Vehiculo{
    mover(distancia:number): void {
        console.log(`Has conducido ${distancia} km en tu carro ${this.marca}`)
    }
}

class Bicicleta extends Vehiculo{
    mover(distancia:number): void {
        console.log(`Has pedaleado ${distancia} km`)
    }
}

class Motocicleta extends Vehiculo{
    mover(distancia:number): void {
        console.log(`Has conducido ${distancia} km en tu motocicleta ${this.marca}`)
    }
}

const carro = new Carro("Nissan")
const bicicleta = new Bicicleta("Trek")
const motocicleta = new Motocicleta("Harley-Davidson")
carro.mover(50)
bicicleta.mover(20)
motocicleta.mover(5)