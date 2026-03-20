class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Electronicos extends Producto {
    calcularPrecioFinal(impuesto) {
        const impuestoFinal = this.precio * impuesto;
        return impuestoFinal + this.precio;
    }
    mostrarInformacion() {
        console.log(`El precio del producto ${this.nombre} es de: $${this.calcularPrecioFinal(0.2).toFixed(2)}`);
    }
}
class Ropa extends Producto {
    calcularPrecioFinal(impuesto) {
        const impuestoFinal = this.precio * impuesto;
        return impuestoFinal + this.precio;
    }
    mostrarInformacion() {
        console.log(`El precio del producto ${this.nombre} es de: $${this.calcularPrecioFinal(0.1).toFixed(2)}`);
    }
}
class Alimentos extends Producto {
    calcularPrecioFinal(impuesto) {
        const impuestoFinal = this.precio * impuesto;
        return impuestoFinal + this.precio;
    }
    mostrarInformacion() {
        console.log(`El precio del producto ${this.nombre} es de: $${this.calcularPrecioFinal(0.05).toFixed(2)}`);
    }
}
const laptop = new Electronicos("Laptop", 1000);
const camisa = new Ropa("Camisa", 20);
const pizza = new Alimentos("Pizza", 5);
laptop.mostrarInformacion();
camisa.mostrarInformacion();
pizza.mostrarInformacion();
export {};
//# sourceMappingURL=ej8.js.map