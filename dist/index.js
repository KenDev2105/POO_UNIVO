import console from "console";
import { read } from "fs";
import * as readline from "readline";
import { runInThisContext } from "vm";
// ! Ejemplo de Clase
/* class Programa {
    private rl: readline.Interface;

    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }
    iniciar(): void{
        this.pedirNumero();
    }
    pedirNumero(): void{
        this.rl.question("Ingresa un número: ", (respuesta:string) =>{
            const numero = Number(respuesta)
            this.evaluarNumero(numero);
            this.cerrar()
        })
    }

    evaluarParImpar(num:number): void{
        if(num % 2 === 0){
            console.log("Numero par")
        } else{
            console.log("Numero impar")
        }
    }

    evaluarNumero(numero: number): void{
        if(numero > 10){
            console.log("Es mayor que 10")
        } else if (numero === 10){
            console.log("Es igual a 10")
        } else {
            console.log("Es menor que 10")
        }
    }

    cerrar(): void{
        this.rl.close()
    }
}

const app = new Programa()
app.iniciar() */
//? Ejercicio 1
/* class Escuela {
    private rl: readline.Interface;

    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciarEscuela(): void{
        this.pedirNota()
    }

    pedirNota(): void{
        this.rl.question("Ingresa la nota: ", (nota:string) => {
            const numero = parseFloat(nota);
            this.estadoAcademico(numero);
            this.cerrar();
        })
    }

    estadoAcademico(nota:number):void{
        if(nota >= 9 && nota <= 10){
            console.log("Excelente")
        } else if(nota >= 7 && nota < 9){
            console.log("Bueno")
        } else if (nota >= 6 && nota < 7){
            console.log("Regular")
        } else if(nota < 6){
            console.log("Reprobado")
        }
    }

    cerrar(): void{
        this.rl.close();
    }
}

const estudiante = new Escuela();
estudiante.iniciarEscuela();
 */
// ? Ejercicio 2
class Autenticacion {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciarAutenticacion() {
        this.pedirDatos();
    }
    pedirDatos() {
        this.rl.question("Ingresa tu usuario: ", (user) => {
            this.rl.question("Ingresa tu contraseña: ", (pass) => {
                this.rl.question("Ingrese su rol: 1 = Administrador, 2 = Cliente, 3 = Invitado ", (rol) => {
                    const numero = Number(rol);
                    this.autenticarDatos(user, pass, numero);
                    this.cerrar();
                });
            });
        });
    }
    autenticarDatos(user, pass, rol) {
        if (user === "kendev2105" && pass === "12345678" && rol === 1) {
            console.log("Acceso concedido");
            console.log("Usted es Administrador");
        }
        else if (user === "kendev2105" && pass === "12345678" && rol === 2) {
            console.log("Acceso concedido");
            console.log("Usted es Cliente");
        }
        else if (user === "kendev2105" && pass === "12345678" && rol === 3) {
            console.log("Acceso concedido");
            console.log("Usted es Invitado");
        }
        else {
            console.log("Acceso denegado, revise usuario o contraseña");
        }
    }
    cerrar() {
        this.rl.close();
    }
    ;
}
const autenticar = new Autenticacion();
autenticar.iniciarAutenticacion();
//# sourceMappingURL=index.js.map