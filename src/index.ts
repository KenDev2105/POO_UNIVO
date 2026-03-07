/*  Ejemplos Lin 2 - 85
    Ejercicios Lin 87 en delante
*/
class Vehiculo{
    protected marca: string;
    protected modelo: string;
    protected año: number;

    constructor(marca:string, modelo:string, año:number){
        if (!marca || !modelo) throw new Error("Marca y modelo son obligatorios");
        if (año > new Date().getFullYear()) throw new Error("El año no es valido")
        
        this.marca = marca;
        this.modelo = modelo;
        this.año = año
    };

    public mostrarInformacion(): void{
        console.log(`Vehiculo: ${this.marca} ${this.modelo} ${this.año}`)
    }
}


class Automovil extends Vehiculo{
    private numPuertas: number;

    constructor(marca:string, modelo:string, año:number, numPuertas:number){
        super(marca, modelo, año);
        this.numPuertas = numPuertas;
    };

    public override mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.numPuertas}`)
    }
}

console.log(" --- Iniciando Registro de Vehiculos --- ")

try {
    const miCarro = new Automovil("Honda", "Civic", 2020, 2);
    miCarro.mostrarInformacion();
} catch (error:any){
    console.log(`[LOG]: Se bloqueó un intento de registro inválido, Razón: ${error.message}`);
}

console.log(" --- Fin del proceso. El sistema continúa en ejecución. ---");

//Ejemplo 2 
class Contenido{
    constructor(
        protected titulo: string,
        protected duracionMinutos: number,
        protected clasificacion: "A" | "B" | "C"
    ) {
        if (!titulo.trim()) throw new Error("El titulo no puede estar vacio.");
        if (duracionMinutos <= 0) throw new Error("La duración debe ser mayor a 0");
    }

    public mostrarDetalles():void {
        console.log(`Titulo: ${this.titulo} | Clasificación: [${this.clasificacion}]`);
    }
}

class Pelicula extends Contenido{
    constructor(
        titulo:string,
        duracionMinutos: number,
        clasificacion: "A" | "B" | "C",
        private director: string
    ) {
        super(titulo, duracionMinutos, clasificacion)
            if(!director.trim()) throw new Error("El director es obligatorio. ");
    }
    
    override mostrarDetalles(): void {
        super.mostrarDetalles();
        console.log(`Director: ${this.director} | Tipo: Largometraje`);
    }
}

try{
    const nuevaPeli = new Pelicula("Oppenheimer", 180, "B", "" )
    nuevaPeli.mostrarDetalles();
} catch (error:any) {
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`)
}

// Ejercicio 1
class Cuenta{
    titular: string;
    saldo: number;

    constructor(titular:string, saldo:number){
        if(saldo <= 0) throw new Error("El saldo no puede ser menor a cero")

        this.titular = titular;
        this.saldo = saldo;
    };    
}

class CuentaAhorro extends Cuenta{
    tasaInteres: number;

    constructor(titular:string, saldo:number, tasaInteres:number){
        super(titular,saldo);
        this.tasaInteres = tasaInteres;
    };

    calcularInteres():number {
        const interes = this.tasaInteres*this.saldo
        const interesAplicado = this.saldo + interes
        return interesAplicado
    }
}

try{
    const cuenta = new CuentaAhorro("Ken", 0, 0.10)
    cuenta.calcularInteres()
} catch(error:any){
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`)
}

// Ejercicio 2
class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;

        if(this.edad <= 0) throw new Error(`La edad no puede ser menor ni igual a cero`)
    };
}

class Estudiante extends Persona{
    carnet:string;

    constructor(nombre:string, edad:number, carnet:string){
        super(nombre, edad)
        this.carnet = carnet
    }

    presentarse(): void{
        console.log(`Mi nombre es: ${this.nombre} y tengo ${this.edad} años. Soy estudiante y este es mi carnet ${this.carnet}`)
    }
}

class Docente extends Persona{
    especialidad:string;

    constructor(nombre:string, edad:number, especialidad:string){
        super(nombre, edad);
        this.especialidad = especialidad;
    }

    presentarse(): void{
        console.log(`Mi nombre es: ${this.nombre} y tengo ${this.edad} años. Soy docente y me especializo en: ${this.especialidad}`)
    }
}

try{
    const estudiante = new Estudiante("Ken", 0, "u20250017")
    estudiante.presentarse()
} catch(error:any) {
        console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`)
}


const estudiante = new Estudiante("Ken", 20, "u20250017")
estudiante.presentarse()
const docente = new Docente("Ken", 20, "Matematicas")
docente.presentarse()

// Ejercicio 3
class Producto{
    nombre:string;
    precioBase:number;

    constructor(nombre:string, precioBase:number){
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
}

class ProductoFisico extends Producto{
    pesoKG:number;

    constructor(nombre:string, precioBase:number, pesoKG:number){
        super(nombre, precioBase);
        this.pesoKG = pesoKG;
    }
    precioFinal():void{
        const total = this.precioBase + 2 * this.pesoKG
        console.log(`El precio base de su producto es de $${this.precioBase} \nEl precio final es de $${total}`)
    }
}

class ProductoDigital extends Producto{
    plataforma:string;

    constructor(nombre:string, precioBase:number, plataforma:string){
        super(nombre, precioBase);
        this.plataforma = plataforma;
    }

    precioFinal():void{
        console.log(`El precio final de su producto es de $${this.precioBase}`)
    }
}

const fisico = new ProductoFisico("Bloodborne", 40, 1)
fisico.precioFinal()

const digital = new ProductoDigital("Bloodborne", 40, "PlayStation Store")
digital.precioFinal()