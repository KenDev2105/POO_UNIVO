class Vehiculo {
    constructor(marca, modelo, año) {
        if (!marca || !modelo)
            throw new Error("Marca y modelo son obligatorios");
        if (año > new Date().getFullYear())
            throw new Error("El año no es valido");
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    ;
    mostrarInformacion() {
        console.log(`Vehiculo: ${this.marca} ${this.modelo} ${this.año}`);
    }
}
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, numPuertas) {
        super(marca, modelo, año);
        this.numPuertas = numPuertas;
    }
    ;
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.numPuertas}`);
    }
}
console.log(" --- Iniciando Registro de Vehiculos --- ");
try {
    const miCarro = new Automovil("Honda", "Civic", 2020, 2);
    miCarro.mostrarInformacion();
}
catch (error) {
    console.log(`[LOG]: Se bloqueó un intento de registro inválido, Razón: ${error.message}`);
}
console.log(" --- Fin del proceso. El sistema continúa en ejecución. ---");
//Ejercicio Guiado en Clase
class Contenido {
    constructor(titulo, duracionMinutos, clasificacion) {
        this.titulo = titulo;
        this.duracionMinutos = duracionMinutos;
        this.clasificacion = clasificacion;
        if (!titulo.trim())
            throw new Error("El titulo no puede estar vacio.");
        if (duracionMinutos <= 0)
            throw new Error("La duración debe ser mayor a 0");
    }
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo} | Clasificación: [${this.clasificacion}]`);
    }
}
class Pelicula extends Contenido {
    constructor(titulo, duracionMinutos, clasificacion, director) {
        super(titulo, duracionMinutos, clasificacion);
        this.director = director;
        if (!director.trim())
            throw new Error("El director es obligatorio. ");
    }
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Director: ${this.director} | Tipo: Largometraje`);
    }
}
try {
    const nuevaPeli = new Pelicula("Oppenheimer", 180, "B", "");
    nuevaPeli.mostrarDetalles();
}
catch (error) {
    console.log(`[Error] Usted hizo un registro invalido. Error: ${error.message}`);
}
export {};
//# sourceMappingURL=index.js.map