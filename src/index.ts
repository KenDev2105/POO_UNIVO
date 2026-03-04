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

//Ejercicio Guiado en Clase
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