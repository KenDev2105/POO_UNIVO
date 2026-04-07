/**_
_1. Crea una clase abstracta donde se solicite de manera publica_
_el nickname de un jugador y el total de vida que es 100% en privado,_
_Crear la clase mundo 1 que séra una clase hija, donde se creara un_
_método aventura y en ese método se le restara el 30% de vida al jugador,_
_Crear el metodo acuatico donde se le restara el 50% de vida y luego se le_
_sumara el 10% y crear el método endgame donde se le restara el 50% de vida._
_Cada método debe de imprimir el dato restante de vida que le quedo al jugador._


_2. Aplicar al ejercicio 1 el formato de mantener el porcentaje_
_de vida para interactuar con los otros métodos, todo imprimiendo_
_siempre mensajes en consola._
*/
class Jugador {
    constructor(nickName, life = 100) {
        this.nickName = nickName;
        this.life = life;
    }
    restarVida(damage) {
        if ((this.life - damage) < 0) {
            this.life = 0;
            console.log(`Se ha infligido ${damage}% de daño, perdiste vida restante ${this.life}%`);
            return;
        }
        this.life -= damage;
        console.log(`Se ha infligido ${damage}% de daño, vida restante ${this.life}%`);
    }
    sumarVida(value) {
        this.life += value;
        console.log(`Se ha restaurado ${value}% de vida, vida restante ${this.life}%`);
    }
    get vida() {
        return this.life;
    }
}
class mundo1 extends Jugador {
    constructor(nickName, life) {
        super(nickName, life);
    }
    aventura() {
        this.restarVida(30);
    }
    acuatico() {
        this.restarVida(50);
        this.sumarVida(10);
    }
    endgame() {
        this.restarVida(50);
    }
}
const ander = new mundo1('Ken', 100);
ander.aventura();
ander.acuatico();
ander.endgame();
export {};
//# sourceMappingURL=juego.js.map