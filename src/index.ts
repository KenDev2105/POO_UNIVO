class Persona {
    nombre: string;
    edad: number;
    telefono: number;


    constructor(nombre: string, edad: number, telefono: number){
        this.nombre=nombre;
        this.edad=edad;
        this.telefono=telefono;
    };

    mostrar(): void{
        alert("El nombre es: " + this.nombre)
    }
}
let nombre: string = prompt("Ingrese su nombre") || "";
let people = new Persona(nombre, 20, 78789898)
people.mostrar()