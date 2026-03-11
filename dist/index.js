import { FORMERR } from "node:dns";
import { stringify } from "node:querystring";
class Sensor {
    constructor(id, valorActual) {
        this.id = id;
        this.valorActual = valorActual;
    }
    actualizarValor(nuevoValor) {
        this.valorActual = nuevoValor;
        console.log(`Sensor: ${this.id} actualizó su valor a: ${this.valorActual} `);
        this.procesarLectura();
    }
}
class SensorTemperatura extends Sensor {
    procesarLectura() {
        if (this.valorActual > 40) {
            console.log(`ALERTA: Temperatura crìtica en ${this.valorActual}º `);
        }
    }
}
class SensorHumedad extends Sensor {
    procesarLectura() {
        if (this.valorActual < 20) {
            console.log(`ALERTA: Humedad baja en ${this.id}`);
        }
    }
}
const termometro = new SensorTemperatura("TEMP_01", 25);
termometro.actualizarValor(45);
const humedad = new SensorHumedad("HUM_01", 30);
humedad.actualizarValor(15);
class MetodoPago {
}
class TarjetaCredito extends MetodoPago {
    procesarPago(monto) {
        console.log(`Validando tarjeta y cobrando $${monto}`);
    }
}
class PayPal extends MetodoPago {
    procesarPago(monto) {
        console.log(`Redirigiendo API de PayPal para cobrar $${monto}`);
    }
}
function realizarCompra(metodo, total) {
    metodo.procesarPago(total);
}
const pago1 = new TarjetaCredito();
const pago2 = new PayPal();
pago1.procesarPago(100);
pago2.procesarPago(1000);
class Habilidad {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
}
class HechizoFuego extends Habilidad {
    usar() {
        console.log(`Lanzando ${this.nombre} (Costo: ${this.costo}) maná`);
    }
}
class GolpeEspada extends Habilidad {
    usar() {
        console.log(`Ejecutando ${this.nombre} (Costo: ${this.costo}) estamina`);
    }
}
function activarHabilidad(h) {
    h.usar();
}
const poder1 = new HechizoFuego("Lanzallamas", 20);
const poder2 = new GolpeEspada("Judgement Cut", 20);
class Empleado {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        if (!nombre)
            throw new Error("Nombre requerido");
    }
    mostrarRecibo() {
        console.log(`Empleado ${this.nombre} | ID: ${this.id}`);
        console.log(`Salario neto: ${this.calcularSalario()}`);
    }
}
class Desarrollador extends Empleado {
    constructor(nombre, id, proyecto) {
        super(nombre, id);
        this.proyecto = proyecto;
    }
    calcularSalario() {
        return 2500;
    }
}
class Freelancer extends Empleado {
    constructor(nombre, id, horas, tarifa) {
        super(nombre, id);
        this.horas = horas;
        this.tarifa = tarifa;
        if (horas < 0 || tarifa < 0)
            throw new Error("Valores invalidos.");
    }
    calcularSalario() {
        return this.horas * this.tarifa;
    }
}
try {
    const emp1 = new Desarrollador("William", 1, "App Movil");
    const emp2 = new Freelancer("Ortiz", 2, 20, 250);
    emp1.mostrarRecibo();
    console.log("---");
    emp2.mostrarRecibo();
}
catch (e) {
    console.log(`Error ${e.message}`);
}
//Ejercicios
// Ejercicio 1
class Heroe {
    constructor(nombre) { }
}
class Volador extends Heroe {
    usarPoder() {
        console.log(`Estoy volando por los cielos`);
    }
}
class Fuerte extends Heroe {
    usarPoder() {
        console.log(`Estoy levantando un camión`);
    }
}
const volador = new Volador("Ken");
volador.usarPoder();
const fuerte = new Fuerte("Kevin");
fuerte.usarPoder();
// Ejercicio 2
class MaquinaBebida {
}
class Cafetera extends MaquinaBebida {
    servir() {
        console.log(`Sirviendo un cafè caliente`);
    }
}
class DispensadorSoda extends MaquinaBebida {
    servir() {
        console.log(`Sirviendo soda con hielo`);
    }
}
const cafe = new Cafetera();
const soda = new DispensadorSoda();
cafe.servir();
soda.servir();
// Ejercicio 3
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Formal extends Persona {
    constructor(nombre) {
        super(nombre);
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`);
    }
}
class Informal extends Persona {
    constructor(nombre) {
        super(nombre);
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Que onda, soy ${this.nombre}`);
    }
}
const formal = new Formal("Stanley");
formal.saludar();
const informal = new Informal("Fabri");
informal.saludar();
// Ejercicio 4
class Electrodomestico {
    constructor(marca) {
        this.marca = marca;
    }
}
class Licuadora extends Electrodomestico {
    funcionar() {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`);
    }
}
class Microondas extends Electrodomestico {
    funcionar() {
        console.log(`El microondas ${this.marca} esta calentando comida`);
    }
}
const licuadora = new Licuadora("Ninja");
licuadora.funcionar();
const microondas = new Microondas("Ninja");
microondas.funcionar();
//# sourceMappingURL=index.js.map