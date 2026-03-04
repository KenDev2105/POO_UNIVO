/* Ejemplos linea 1-135
   Ejercicios linea 138 en delante
*/

// Ejemplo 1
class Player{
    nombre: string;
    vida: number;

    constructor(nombre:string, vida:number){
        this.nombre = nombre;
        this.vida = vida;
    };

    recibirDaño(): void{
        const puntos = Number(Math.random().toFixed(2))*100 //Daño random entre 0 - 100
        this.vida -= puntos
        console.log(`Has recibido ${puntos.toFixed(0)} de daño, tu vida actual es de:  ${this.vida}`)
    };

    status():void {
        if(this.vida <= 0){
            console.log("Has muerto!")
        } else{
            console.log(`Sigues con vida! ${this.nombre}, estas lleno de Determinación`  )
        }
    }
}

/* const pj = new Player("Ken", 100)
pj.recibirDaño()
pj.status() */

// Ejemplo 2
class OrdenCafe{
    tipoCafe:string;
    cantidad:number;
    precio:number;

    constructor(tipoCafe:string, cantidad:number, precio: number){
        this.tipoCafe = tipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    totalPagar(cantidad:number){
        if(cantidad > this.cantidad){
            const total = cantidad * this.precio
            console.log(`Su total a pagar es de $${total}`)
        } else{
            console.log("No hay cantidad suficiente de producto o stock del mismo")
        }
    }
}

/* const pedido = new OrdenCafe("Capuccino", 20, 4)
pedido.totalPagar(21) */

// Ejemplo 3
class Mascota{
    nombre: string;
    hambre: number;

    constructor(nombre: string, hambre:number){
        this.nombre = nombre;
        this.hambre = hambre;
    }

    comer(){
        this.hambre -= 20
        console.log(`El hambre ha disminuido en 20, tienes ${this.hambre} de hambre`)
    }

    correr(){
        this.hambre += 10
        console.log(`El hambre ha incrementado en 10, tiene ${this.hambre} de hambre`)
    }
}

/* const perro = new Mascota("Balú",100)
perro.comer()
perro.correr() */

// Ejemplo 4
class Alarma{
    codigo: string;
    estado: boolean = true;

    constructor(codigo:string){
        this.codigo = codigo;
    }

    desactivar(intento: string):void{
        if(intento === this.codigo){
            this.estado = false
            console.log("El codigo de acceso es valido, continue")
        } else{
            console.log("EL codigo de acceso es incorrecto")
        }
    }
}

/* const alarma = new Alarma("u20250017")
alarma.desactivar("u20250017") */

// Ejemplo 5

class TanqueCombustible{
    capacidadMaxima: number = 100;
    nivelActual: number = 60;

    constructor(capacidadMaxima:number, nivelActual:number){
        this.capacidadMaxima = capacidadMaxima;
        this.nivelActual = nivelActual
    }

    agregarCombustible(agregar:number):void{
        if(this.nivelActual <= this.capacidadMaxima){
            this.nivelActual += agregar
            console.log(`Tienes ${this.nivelActual} de gasolina`)
        } else{
            console.log(`Has superado el limite maximo del tanque`)
        }
    }

    consumirCombustible():void{
        if(this.nivelActual === 0){
            console.log("No tienes gasolina")
        } else if(this.nivelActual > 0 && this.nivelActual <= 15){
            console.log("Tienes poca gasolina")
        }
    }
}

/* const corvette = new TanqueCombustible(100,45)
corvette.agregarCombustible(56) */

// Ejercicio 1
class Empleado{
    nombre: string;
    salarioBase: number;
    horasExtra: number;

    constructor(nombre:string, salarioBase: number, horasExtra:number){
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasExtra = horasExtra;
    }

    salarioTotal(cantidadHoras:number){
        this.horasExtra *= cantidadHoras
        const total = this.salarioBase + this.horasExtra
        console.log(`Su salario base es de: $${this.salarioBase.toFixed(2)} \n Su total de horas extra trabajadas es de: ${cantidadHoras} por un monto de $${this.horasExtra.toFixed(2)} \n Su pago total es de: $${total}`)
    }
}

const empleado = new Empleado("Ken", 1000, 100);
empleado.salarioTotal(2)

//Ejercicio 2

class cuentaBancaria{
    titular: string;
    saldo: number = 0;
    
    constructor(titular:string){
        this.titular = titular;
    }

    depositar(monto:number):void{
        this.saldo+= monto
        console.log(`Usted ha ingresado: $${monto}\nSu saldo ahora es de: $${this.saldo}`)
    }

    retirar(monto:number):void{
        if(monto > this.saldo){
            console.log("Fondos Insuficientes")
        } else{
            this.saldo -= monto
            console.log(`Usted ha retirado: $${monto} \nSu saldo ahora es de: $${this.saldo}`)
        }
    }

    consultarSaldo(): void{
        console.log(`Su saldo es de: $${this.saldo}`)
    }
}

const cuenta = new cuentaBancaria("Ken");
cuenta.consultarSaldo();
cuenta.depositar(100);
cuenta.retirar(10);
cuenta.consultarSaldo();

// Ejercicio 3

class Vehiculo{
    marca: string;
    modelo: string;
    año: number

    constructor(marca:string, modelo: string, año:number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInformacion(): void{
        console.log(`--- Datos del Vehiculo --- \nMarca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.año} `)
    }
}

const skyline = new Vehiculo("Nissan", "Skyline GTR R34", 1999)
skyline.mostrarInformacion()

const altima = new Vehiculo("Nissan", "Altima", 2015)
altima.mostrarInformacion()

//Ejercicio 4

class ProductoTienda{
    nombre:string;
    precio: number

    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    };

    aplicarDescuento(descuento:number){
        const desc = this.precio * (descuento/100)
        const precioFinal = this.precio - desc
        console.log(`El precio de su producto (con descuento) es de: $${precioFinal.toFixed(2)}`)
    }
}

const prod = new ProductoTienda("PS5", 699)
prod.aplicarDescuento(10)

// Ejercicio 5
class Personaje{
    nombre: string;
    nivel: number = 1

    constructor(nombre:string){
        this.nombre = nombre
    };

    subirNivel():number {
        ++this.nivel
        return this.nivel
    }

    verEstado():void{
        console.log(`Nombre: ${this.nombre} \nNivel: ${this.nivel}`)
    }
}

const personaje = new Personaje("Verso")
personaje.verEstado()
personaje.subirNivel()
personaje.verEstado()
personaje.subirNivel()
personaje.verEstado()
personaje.subirNivel()