"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  *** Ejercicio 1 ***
class informacion {
    constructor(nombre, apellido, telefono, correo, codIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codIdentificación = codIdentificacion;
    }
    ;
}
const info = new informacion("Kenneth", "Mejia", 74950536, "kj_mejia@hotmail.com", "u20250017");
// console.log(info)
// *** Ejercicio 2 ***
class producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
    ;
    descuento(desc) {
        const descuento = this.precio * desc;
        const descuento_total = this.precio - descuento;
        const iva = descuento_total * 0.13;
        const total = descuento_total + iva;
        console.log("--- Cantidad de producto: " + this.stock + " ---");
        console.log("--- Precio: $" + this.precio.toFixed(2) + " ---");
        console.log("--- Porcentaje de Descuento: " + desc * 100 + "% Descuento aplicado: $" + descuento_total.toFixed(2) + " ---");
        console.log(" --- IVA: $" + iva.toFixed(2) + " ---");
        console.log("--- Total a pagar: " + total.toFixed(2) + " ---");
    }
}
const prod = new producto("Laptop", 10, 1000);
// prod.descuento(0.75)
// *** Ejercicio 3 ***
class edad {
    constructor(nombre, fecha) {
        this.nombre = nombre;
        this.fecha = fecha;
    }
    calcularEdad() {
        let año = this.fecha.slice(6);
        let edad = 2026 - parseFloat(año);
        console.log("Su edad es: " + edad);
        if (edad >= 0 && edad <= 2) {
            console.log("Es un bebé");
        }
        else if (edad > 2 && edad <= 10) {
            console.log("Es niño/niña");
        }
        else if (edad > 10 && edad <= 14) {
            console.log("Es pre-adolescente");
        }
        else if (edad > 14 && edad <= 17) {
            console.log("Es adolescente");
        }
        else if (edad >= 18 && edad < 30) {
            console.log("Es joven");
        }
        else if (edad >= 30 && edad < 50) {
            console.log("Es adulto");
        }
        else if (edad >= 50) {
            console.log("Es adulto mayor");
        }
    }
}
const ed = new edad("Ken", "21-05-2006");
ed.calcularEdad();
//# sourceMappingURL=index.js.map