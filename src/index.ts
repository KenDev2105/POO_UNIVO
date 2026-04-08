import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class CuentaBancaria{
    private _saldo: number;

    constructor(saldoInicial: number){
        this._saldo = saldoInicial;
    };

    get saldo(): number{
        return this._saldo;
    };

    set saldo(nuevoSaldo: number){
        if (nuevoSaldo < 0) {
            console.log("Error: NO puedes tener un saldo negativo.")
        }else{
            this._saldo = nuevoSaldo;
            console.log("Saldo actualizado correctamente.")
        }
    }
}

const miCuenta = new CuentaBancaria(1000);
console.log("Tu saldo es: " + miCuenta.saldo);
miCuenta.saldo = -1000;
console.log("Tu saldo es: " + miCuenta.saldo);

class Usuario{
    private _id: number;
    private _nombre: string;
    private _edad: number;

    constructor(id: number, nombre: string, edad: number){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    };

    get id():number{
        return this._id;
    };

    get nombre():string{
        return this._nombre.toUpperCase();
    };

    set nombre(nuevoNombre: string) {
        if (nuevoNombre.length > 2){
            this._nombre = nuevoNombre;
            console.log("Nombre actualizado correctamente.")
        } else{
            console.log("Error: El nombre es muy corto")
        };
    }

    get edad(): number{
        return this._edad;
    };

    set edad(nuevaEdad: number){
        if (nuevaEdad >= 18 && nuevaEdad < 100){
            this._edad = nuevaEdad;
            console.log("Edad actualizada correctamente.")
        } else{
            console.log("Error: Edad no permitida por el sistema.")
        }
    };
}

const usuario1 = new Usuario(101, "Ken", 20)
console.log("ID del usuario " + usuario1.id);

usuario1.nombre = "Kenneth"
console.log("Nombre del usuario: " + usuario1.nombre);

usuario1.edad = 18
console.log("Edad del usuario: " + usuario1.edad);

class RegistroMateria{
    private _nombreMateria: string;
    private _nota: number = 0;

    constructor(nombreMateria: string, nota: number){
        this._nombreMateria = nombreMateria;
        this._nota = nota; 
    };

    get nombreMateria(): string{
        return this._nombreMateria;
    };

    get nota(): number{
        return this._nota;
    };

    set nota(valor: number){
        if (valor >= 0 && valor <= 10){
            this._nota = valor;
            console.log("Nota actualizada correctamente.")
        } else{
            console.log("ERROR: La nota debe ser entre 0.0 y 10.0")
        }
    }

    get estado(): string{
        return this._nota >= 6 ? "APROBADO" : "REPROBADO";
    };
}

const registro = new RegistroMateria("Matemáticas", 8)
console.log("=== SISTEMA DE GESTIÓN ACADEMICA ===");
rl.question(`Ingrese la nota para ${registro.nombreMateria}: `, (nota) =>{
    const n = parseFloat(nota);

    registro.nota = n;

    console.log("\n------------------------")
    console.log(`Materia: ${registro.nombreMateria}`);
    console.log(`Nota Final: ${registro.nota.toFixed(1)}`);
    console.log(`Resultado: ${registro.estado}`);
    console.log("------------------------\n");
    rl.close();
})