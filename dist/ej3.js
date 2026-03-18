class Figura {
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return console.log(`El area del cuadrado es: ${this.lado * this.lado}`);
    }
    calcularPerimetro() {
        return console.log(`El perimetro del cuadrado es: ${this.lado * 4}`);
    }
}
class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return console.log(`El area del rectangulo es: ${this.base * this.altura}`);
    }
    calcularPerimetro() {
        console.log(`El perimetro del rectangulo es: ${this.base * 2 + this.altura * 2}`);
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return console.log(`El area del circulo es: ${Math.PI * this.radio ** 2}`);
    }
    calcularPerimetro() {
        return console.log(`El perimetro del circulo es: ${2 * Math.PI * this.radio}`);
    }
}
const cuadrado = new Cuadrado(5);
const rectangulo = new Rectangulo(5, 10);
const circulo = new Circulo(5);
cuadrado.calcularArea();
rectangulo.calcularArea();
circulo.calcularArea();
cuadrado.calcularPerimetro();
rectangulo.calcularPerimetro();
circulo.calcularPerimetro();
export {};
//# sourceMappingURL=ej3.js.map