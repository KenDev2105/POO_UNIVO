abstract class Empleado{
    abstract calcularSalario():void;
}

class EmpleadoPorHoras extends Empleado{
    horasTrabajadas:number;
    tarifaPorHora:number;

    constructor(horasTrabajadas:number, tarifaPorHora:number){
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario(): void {
    const salario = this.horasTrabajadas * this.tarifaPorHora;
    console.log(`El salario del empleado por horas es: ${salario}`);
    }
}

class EmpleadoFijos extends Empleado{
    salarioMensual:number;

    constructor(salarioMensual:number){
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario(): void {
        console.log(`El salario del empleado fijo es: ${this.salarioMensual}`);
    }
}

class EmpleadoPorComision extends Empleado{
    cantidadVendida:number;
    comisionPorVenta:number;

    constructor(cantidadVendida:number, comisionPorVenta:number){
        super();
        this.cantidadVendida = cantidadVendida;
        this.comisionPorVenta = comisionPorVenta;
    }

    calcularSalario(): void {
        const salario = this.cantidadVendida * this.comisionPorVenta;
        console.log(`El salario del empleado por comision es: ${salario}`);
    }
}

const emp1 = new EmpleadoPorHoras(10, 50)
const emp2 = new EmpleadoFijos(1000)
const emp3 = new EmpleadoPorComision(10, 40)
emp1.calcularSalario()
emp2.calcularSalario()
emp3.calcularSalario()