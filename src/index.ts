import { FORMERR } from "node:dns";
import { stringify } from "node:querystring";

abstract class Sensor{
    constructor(protected id:string, protected valorActual:number){}

    abstract procesarLectura():void

    public actualizarValor(nuevoValor: number):void {
        this.valorActual = nuevoValor;
        console.log(`Sensor: ${this.id} actualizó su valor a: ${this.valorActual} `)
        this.procesarLectura()
    }
}

class SensorTemperatura extends Sensor{
    override procesarLectura(): void {
        if (this.valorActual > 40){
            console.log(`ALERTA: Temperatura crìtica en ${this.valorActual}º `)
        }
    }
}

class SensorHumedad extends Sensor{
    override procesarLectura(): void {
        if (this.valorActual < 20){
            console.log(`ALERTA: Humedad baja en ${this.id}`)
        }
    }
}

const termometro = new SensorTemperatura("TEMP_01", 25)
termometro.actualizarValor(45)
const humedad = new SensorHumedad("HUM_01", 30)
humedad.actualizarValor(15)

abstract class MetodoPago{
    abstract procesarPago(monto:number):void
}

class TarjetaCredito extends MetodoPago{
    override procesarPago(monto:number): void {
        console.log(`Validando tarjeta y cobrando $${monto}`)
    }
}

class PayPal extends MetodoPago{
    override procesarPago(monto: number): void {
        console.log(`Redirigiendo API de PayPal para cobrar $${monto}`)
    }
}


function realizarCompra(metodo: MetodoPago, total:number){
    metodo.procesarPago(total);
}

const pago1 = new TarjetaCredito()
const pago2 = new PayPal()
pago1.procesarPago(100)
pago2.procesarPago(1000)

abstract class Habilidad{
    constructor(protected nombre:string, protected costo: number){}
    abstract usar():void
}

class HechizoFuego extends Habilidad{
    override usar(): void {
        console.log(`Lanzando ${this.nombre} (Costo: ${this.costo}) maná`)
    }
}

class GolpeEspada extends Habilidad{
    override usar(): void {
        console.log(`Ejecutando ${this.nombre} (Costo: ${this.costo}) estamina`)
    }
}

function activarHabilidad(h:Habilidad){
    h.usar();
}

const poder1 = new HechizoFuego("Lanzallamas", 20)
const poder2 = new GolpeEspada("Judgement Cut", 20)

abstract class Empleado{
    constructor(protected nombre:string, protected id:number){
        if (!nombre) throw new Error("Nombre requerido")
    }
    abstract calcularSalario():number;

    public mostrarRecibo():void {
        console.log(`Empleado ${this.nombre} | ID: ${this.id}`)
        console.log(`Salario neto: ${this.calcularSalario()}`)
    }
}

class Desarrollador extends Empleado{
    constructor(nombre:string, id:number, private proyecto:string){
        super(nombre,id)
    }

    override calcularSalario(): number {
        return 2500;
    }
}

class Freelancer extends Empleado{
    constructor(nombre:string, id:number, private horas:number, private tarifa:number){
        super(nombre,id)
        if (horas < 0 || tarifa < 0) throw new Error("Valores invalidos.")
    }
    override calcularSalario(): number {
        return this.horas * this.tarifa
        
    }
}

try{
    const emp1 = new Desarrollador("William", 1, "App Movil")
    const emp2 = new Freelancer("Ortiz", 2, 20, 250)

    emp1.mostrarRecibo()
    console.log("---")
    emp2.mostrarRecibo()
} catch(e:any){
    console.log(`Error ${e.message}`);
}

//Ejercicios
// Ejercicio 1
abstract class Heroe{
    constructor(nombre:string){}

    abstract usarPoder():void
}

class Volador extends Heroe{
    override usarPoder(): void {
        console.log(`Estoy volando por los cielos`)
    }
}

class Fuerte extends Heroe{
    override usarPoder(): void {
        console.log(`Estoy levantando un camión`)
    }
}

const volador = new Volador("Ken")
volador.usarPoder()
const fuerte = new Fuerte("Kevin")
fuerte.usarPoder()

// Ejercicio 2

abstract class MaquinaBebida{
    abstract servir():void
}

class Cafetera extends MaquinaBebida{
    override servir(): void {
        console.log(`Sirviendo un cafè caliente`)
    }
}

class DispensadorSoda extends MaquinaBebida{
    override servir(): void {
        console.log(`Sirviendo soda con hielo`)
    }
}

const cafe = new Cafetera();
const soda = new DispensadorSoda();
cafe.servir()
soda.servir()


// Ejercicio 3
abstract class Persona{
    constructor(protected nombre:string){}
    abstract saludar():void
}

class Formal extends Persona{
    nombre:string;
    constructor(nombre:string){
        super(nombre)
        this.nombre = nombre
    }
    override saludar(): void {
        console.log(`Mucho gusto, mi nombre es ${this.nombre}`)
    }
}

class Informal extends Persona{
    nombre:string;
    constructor(nombre:string){
        super(nombre)
        this.nombre = nombre
    }
    override saludar(): void {
        console.log(`Que onda, soy ${this.nombre}`)
    }
}

const formal = new Formal("Stanley")
formal.saludar()
const informal = new Informal("Fabri")
informal.saludar()

// Ejercicio 4
abstract class Electrodomestico{
    constructor(protected marca:string){}
    abstract funcionar():void
}

class Licuadora extends Electrodomestico{
    override funcionar(): void {
        console.log(`La licuadora ${this.marca} esta moliendo fruta`)
    }
}

class Microondas extends Electrodomestico{
    override funcionar(): void {
        console.log(`El microondas ${this.marca} esta calentando comida`)
    }
}

const licuadora = new Licuadora("Ninja")
licuadora.funcionar()
const microondas = new Microondas("Ninja")
microondas.funcionar()
