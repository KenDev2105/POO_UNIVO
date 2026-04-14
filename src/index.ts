import { parse } from "path";
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
/* rl.question(`Ingrese la nota para ${registro.nombreMateria}: `, (nota) =>{
    const n = parseFloat(nota);

    registro.nota = n;

    console.log("\n------------------------")
    console.log(`Materia: ${registro.nombreMateria}`);
    console.log(`Nota Final: ${registro.nota.toFixed(1)}`);
    console.log(`Resultado: ${registro.estado}`);
    console.log("------------------------\n");
    rl.close();
}) */

//Ejercicio 1
class Termostato{
    private _temperatura: number = 20;

    get temperatura(): string | number{
        return this._temperatura + "°C";
    };

    set temperatura(nuevaTemperatura: number){
        if (nuevaTemperatura > 25){
            nuevaTemperatura = 25
            console.log("El valor maximo de la temperatura debe ser 25°C")
        } else if(nuevaTemperatura < 18){
            nuevaTemperatura = 18
            console.log("El valor minimo de la temperatura debe ser 18°C")
        }
            this._temperatura = nuevaTemperatura;
            console.log("Temperatura actualizada correctamente.")
    };
};
/* 
console.log("===== SISTEMA DE TERMOSTATO =====")
rl.question("Ingrese el nuevo valor de la temperatura: ", (temp)=>{
    const t = new Termostato();
    t.temperatura = parseFloat(temp);
    console.log("La nueva temperatura es: " + t.temperatura);
    rl.close();
})
console.log("==================================") */

//Ejercicio 2
class TanqueCombustible{
    private _diesel: number;

    constructor(diesel: number){
        this._diesel = diesel;
    };

    get diesel(): string | number{
        if(this._diesel < 15){
            console.log("NIVEL CRITICO")
        } else{
            console.log("NIVEL NORMAL") 
        }
        return this._diesel + "%";
    };

    set diesel(nuevoValor: number){
        if (nuevoValor < 0 || nuevoValor > 100){
            console.log("ERROR: EL valor debe ser entre 0 y 100")
        } else{
            this._diesel = nuevoValor;
            console.log("Combustible actualizado correctamente.")
        }
    }
}; 

const tanque = new TanqueCombustible(50);
console.log("Nivel actual del tanque de combustible: " + tanque.diesel);
console.log("===== SISTEMA DE TANQUE DE COMBUSTIBLE =====")
rl.question("Ingrese el porcentaje de combustible: ", (combustible)=>{
    tanque.diesel = parseFloat(combustible);
    console.log("El nuevo nivel del tanque es: " + tanque.diesel);
    rl.close();
})