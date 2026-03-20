class Empleado {
}
class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    calcularSalario() {
        const salario = this.horasTrabajadas * this.tarifaPorHora;
        console.log(`El salario del empleado por horas es: ${salario}`);
    }
}
class EmpleadoFijos extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }
    calcularSalario() {
        console.log(`El salario del empleado fijo es: ${this.salarioMensual}`);
    }
}
class EmpleadoPorComision extends Empleado {
    constructor(cantidadVendida, comisionPorVenta) {
        super();
        this.cantidadVendida = cantidadVendida;
        this.comisionPorVenta = comisionPorVenta;
    }
    calcularSalario() {
        const salario = this.cantidadVendida * this.comisionPorVenta;
        console.log(`El salario del empleado por comision es: ${salario}`);
    }
}
const emp1 = new EmpleadoPorHoras(10, 50);
const emp2 = new EmpleadoFijos(1000);
const emp3 = new EmpleadoPorComision(10, 40);
emp1.calcularSalario();
emp2.calcularSalario();
emp3.calcularSalario();
export {};
//# sourceMappingURL=ej4.js.map