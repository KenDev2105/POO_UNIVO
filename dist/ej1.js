class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        console.log(`${this.nombre} esta comiendo`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`Guau!`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`Miau!`);
    }
}
const perro = new Perro("Balú");
perro.comer();
perro.hacerSonido();
export {};
//# sourceMappingURL=ej1.js.map