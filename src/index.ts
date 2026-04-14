import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


abstract class Consulta {
    private _nombre: string;
    private _nacimiento: string;
    private _edad: number;
    private _telefono: string;
    private _responsable: string;
    private _responsableNumero: string;

    constructor(nombre: string, nacimiento: string, edad: number, telefono: string, responsable: string, responsableNumero: string) {
        this._nombre = nombre;
        this._nacimiento = nacimiento;
        this._edad = edad;
        this._telefono = telefono;
        this._responsable = responsable;
        this._responsableNumero = responsableNumero;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(nombre: string)  {
        this._nombre = nombre; 
    }

    get nacimiento(): string {
        return this._nacimiento; 
    }
    set nacimiento(nacimiento: string) { 
        this._nacimiento = nacimiento; 
    }

    get edad(): number { 
        return this._edad; 
    }
    set edad(edad: number) {
        this._edad = edad;
    }

    get telefono(): string {
        return this._telefono; 
    }
    set telefono(telefono: string) {
        this._telefono = telefono; 
    }

    get responsable(): string { 
        return this._responsable; 
    }
    set responsable(responsable: string) { 
        this._responsable = responsable; 
    }

    get responsableNumero(): string { 
        return this._responsableNumero; 
    }
    set responsableNumero(responsableNumero: string) { 
        this._responsableNumero = responsableNumero; 
    }

    public imprimirDatos(sintomas: string): void {
        console.log("\n--- Resumen de la Consulta ---");
        console.log(`Nombre del Paciente: ${this.nombre}`);
        console.log(`Fecha de Nacimiento: ${this.nacimiento}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Responsable: ${this.responsable}`);
        console.log(`Teléfono del Responsable: ${this.responsableNumero}`);
        console.log(`Síntomas: ${sintomas}`);
    }

    public esMenorDeEdad():void{
        if(this.edad < 18){
            console.log("El paciente es menor de edad. Debe venir acompañado de un adulto mayor.")
        } else{
            console.log("El paciente es mayor de edad.")
        }
    } 

    abstract calcularPrecio(codigoEstudiantil: string): number;
}

class MedicoGeneral extends Consulta {
    calcularPrecio(codigoEstudiantil: string): number {
        const precioBase = 50;
        const porcentajeDescuento = parseInt(codigoEstudiantil.slice(-2)) / 100;
        const montoDescuento = precioBase * porcentajeDescuento;
        const total = precioBase - montoDescuento;
        return total;
    }
}

class MedicoEspecialista extends Consulta {

    calcularPrecio(codigoEstudiantil: string): number {
        const precioBase = 90;
        const porcentajeDescuentoEstudiantil = parseInt(codigoEstudiantil.slice(-2)) / 100;
        
        const montoDescuentoEstudiantil = precioBase * porcentajeDescuentoEstudiantil;
        const montoDescuentoEquipo = precioBase * 0.03; 

        const total = precioBase - montoDescuentoEstudiantil - montoDescuentoEquipo;
        return total;
    }
}

console.log("--- Sistema de Gestión de Consultas Médicas ---");

rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese su fecha de nacimiento (DD/MM/AAAA): ", (nacimiento) => {
        rl.question("Ingrese su edad: ", (edadStr) => {
            rl.question("Ingrese su teléfono: ", (telefono) => {
                rl.question("Ingrese el nombre del responsable: ", (responsable) => {
                    rl.question("Ingrese el teléfono del responsable: ", (responsableNumero) => {
                        
                        rl.question("¿Que tipo de consulta prefiere? (1: General, 2: Especialidad)): ", (tipoConsulta) => {
                            let consulta: Consulta;
                            if (tipoConsulta === '1') {
                                consulta = new MedicoGeneral(nombre, nacimiento, Number(edadStr), telefono, responsable, responsableNumero);
                                console.log("\nProcesando Consulta General...");
                            } else if (tipoConsulta === '2') {
                                consulta = new MedicoEspecialista(nombre, nacimiento, Number(edadStr), telefono, responsable, responsableNumero);
                                console.log("\nProcesando Consulta de Especialidad...");
                            } else {
                                console.log("Tipo de consulta no válido. Saliendo del sistema.");
                                rl.close();
                                return;
                            }
                            consulta.esMenorDeEdad();
                            
                            rl.question("Ingrese los síntomas: ", (sintomas) => {
                                rl.question("Ingrese el código estudiantil (ej: u20260430): ", (codigoEstudiantil) => {
                                    
                                    const precio = consulta.calcularPrecio(codigoEstudiantil);
                                    consulta.imprimirDatos(sintomas);
                                    console.log(`Costo a Cancelar: $${precio.toFixed(2)}`);
                                    console.log("---------------------------------");
                                    
                                    rl.close();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});