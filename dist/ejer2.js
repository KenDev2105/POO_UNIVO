import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class SistemaColores {
    constructor() {
        this.colores = [];
    }
}
class JuegoColores extends SistemaColores {
    constructor() {
        super(...arguments);
        this.combinaciones = {
            "rojo-azul": "morado",
            "azul-amarillo": "verde",
            "rojo-amarillo": "naranja",
            "rojo-verde": "cafe",
            "negro-blanco": "gris"
        };
    }
    pedirColores() {
        this.colores = [];
        const pedir = (i) => {
            if (i < 2) {
                rl.question(`Ingrese el color ${i + 1}: `, (color) => {
                    this.colores.push(color.toLowerCase());
                    pedir(i + 1);
                });
            }
            else {
                this.mezclarColores();
                rl.close();
            }
        };
        pedir(0);
    }
    mezclarColores() {
        console.log(`Colores ingresados: ${this.colores}`);
        let resultadoFinal = "No existe combinación";
        for (let i = 0; i < this.colores.length; i++) {
            for (let j = i + 1; j < this.colores.length; j++) {
                const clave1 = `${this.colores[i]}-${this.colores[j]}`;
                const clave2 = `${this.colores[j]}-${this.colores[i]}`;
                if (this.combinaciones[clave1]) {
                    resultadoFinal = this.combinaciones[clave1];
                }
                else if (this.combinaciones[clave2]) {
                    resultadoFinal = this.combinaciones[clave2];
                }
            }
        }
        console.log(`Resultado de la mezcla: ${resultadoFinal}`);
    }
}
;
const juego = new JuegoColores();
juego.pedirColores();
//# sourceMappingURL=ejer2.js.map