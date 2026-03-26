import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ejercicio 1
abstract class Producto{
    constructor(protected nombre: string){}

    abstract aplicarDescuento(precio:number): number;

    public mostrarPrecioFinal(precioBase:number): void{
        const final = this.aplicarDescuento(precioBase);
        console.log("--------------------------------")
        console.log("Producto: " + this.nombre);
        console.log("Precio original: $" + precioBase.toFixed(2));
        console.log("Precio con descuento: $" + final.toFixed(2))
        console.log("--------------------------------")
    } 
}

class Ropa extends Producto{
    
    aplicarDescuento(precio: number): number {
        return precio * 0.8;
    }
}

class Electronica extends Producto{
    aplicarDescuento(precio: number): number {
        return precio * 0.9;
    }
}

/* console.log("=== SISTEMA DE CAJA REGISTRADORA ===");
rl.question("Tipo de producto (1: Ropa, 2: Electronica): ", (opcion) =>{
    rl.question("Ingrese el precio de la etiqueta ", (entrada: string) => {
        const precio = parseFloat(entrada);
        let prod: Producto;

        if(opcion == "1"){
            prod = new Ropa("Camisa");
        } else{
            prod = new Electronica("Televisor");
        }

        prod.mostrarPrecioFinal(precio);
        rl.close();
    })
})
 */

//Ejercicio 2
abstract class Ejercicio{
    abstract calcularCalorias(minutos:number): number;

    public mostrarCalorias(minutos:number): void{
        const calorias = this.calcularCalorias(minutos);
        console.log("--------------------------------")
        console.log("Duración del ejercicio: " + minutos + " min");
        console.log("Calorias quemadas: " + calorias + " kcal");
        console.log("--------------------------------")
    }
}

class Correr extends Ejercicio{
    calcularCalorias(minutos: number): number {
        const calorias = minutos * 10;
        return calorias;
    };
};

class Yoga extends Ejercicio{
    calcularCalorias(minutos: number): number {
        const calorias = minutos * 4;
        return calorias;
    };
};

/* console.log("=== SISTEMA DE ENTRENAMIENTO ===");
rl.question("Tipo de ejercicio (1: Correr, 2: Yoga): ", (opcion) =>{
    rl.question("Ingrese la cantidad de minutos: ", (entrada: string) => {
        const minutos = parseFloat(entrada);
        let ejer: Ejercicio;
        if(opcion == "1"){
            ejer = new Correr();
        } else{
            ejer = new Yoga();
        }
        ejer.calcularCalorias(minutos);
        ejer.mostrarCalorias(minutos);
        rl.close();
    });
}); */

//Ejercicio 3
abstract class Alarma{
    abstract sonar():void
}

class Incendio extends Alarma{
    sonar(): void {
        console.log("BEEP-BEEP")
    }
}

class Reloj extends Alarma{
    sonar(): void {
        console.log("RIING")
    }
}

/* console.log("=== SISTEMA DE ALARMA ===");
rl.question("Tipo de alarma (1: Incendio, 2: Reloj): ", (opcion) =>{
    let alarma: Alarma
    if(opcion == "1"){
        alarma = new Incendio();
    } else{
        alarma = new Reloj();
    }
    alarma.sonar();
    rl.close();
}); */

//Ejercicio 4
abstract class Pedido{
    abstract preparar():void
} 

class Hamburguesa extends Pedido{
    preparar(): void {
        console.log("Paso 1: Cocinar la carne")
        console.log("Paso 2: Preparar el queso")
        console.log("Paso 3: Preparar el pan")
        console.log("Paso 4: Preparar los vegetales")
        console.log("Paso 5: Preparar el aderezo")
        console.log("Paso 6: Colocar los ingredientes en la hamburguesa")
        console.log("Paso 7: Servir la hamburguesa")
    }
}

class Pizza extends Pedido{
    preparar(): void {
        console.log("Paso 1: Preparar la masa");
        console.log("Paso 2: Agregar salsa de tomate");
        console.log("Paso 3: Agregar el queso y los ingredientes");
        console.log("Paso 4: Hornear la pizza");
        console.log("Paso 5: Cortar en porciones");
        console.log("Paso 6: Servir la pizza");
    }
}

console.log("=== SISTEMA DE COCINA ===");
rl.question("Tipo de pedido (1: Hamburguesa, 2: Pizza): ", (opcion) =>{
    let pedido: Pedido
    if(opcion == "1"){
        pedido = new Hamburguesa();
    } else{
        pedido = new Pizza();
    }
    pedido.preparar();
    rl.close();
});