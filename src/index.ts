/* abstract class Banco{
    usuario:string
    private saldo:number
    
    constructor(usuario:string, saldo:number){
        this.usuario = usuario;
        this.saldo = saldo;
    };

    get nuevoSaldo():number{
        return this.saldo;
    }

    set nuevoSaldo(valor:number){
        if(valor >= 0)
        this.saldo = valor;
        else
        console.log("El saldo debe ser cero o mayor que cero");
    }
    
    mostrar():void{
        console.log(`${this.usuario} - $${this.saldo.toFixed(2)}`)
    }
}

/* let banco = new Banco("Porfirio", 100);
banco.usuario  = "Isaac"
banco.nuevoSaldo = 200;
banco.mostrar(); 

class Movimientos extends Banco{
    deposito: number;
    constructor(nombre:string, saldo:number, deposito:number){
        super(nombre, saldo);
        this.deposito = deposito;
        this.comision()
    }

    depositar():void{
        const nuevoMonto = this.nuevoSaldo + this.deposito 
        console.log(`Nuevo Saldo: ${nuevoMonto}`)
        this.comision()
    }

    comision(nuevoMonto:number){
        let salida = nuevoMonto - 1
        console.log(`Te cobre por la transfer. Nuevo Saldo: ${salida}`)
    }

}

let dep = 25
let depositar = new Movimientos("Porfirio", 100, dep)
depositar.depositar(dep)
depositar.mostrar()
 */

/*
1. Crea una clase abstracta donde se solicite de manera publica el nickname de un 
jugador y el total de vida que es 100% en privado, 
Crear la clase mundo 1 que séra una clase hija, donde se creara un método aventura 
y en ese método se le restara el 30% de vida al jugador, 
Crear el metodo acuatico donde se le restara el 50% de vida y luego se le sumara 
el 10% y crear el método endgame donde se le restara el 50% de vida.
Cada método debe de imprimir el dato restante de vida que le quedo al jugador.  

2. Aplicar al ejercicio 1 el formato de mantener el porcentaje de vida
para interactuar con los otros métodos, todo imprimiendo siempre mensajes en consola. 
 */

//Ejercicio 
abstract class Juego{
    nickname:string
    private vida:number

    constructor(nickname:string, vida:number){
        this.nickname = nickname;
        this.vida = vida;
    }

    get vidaActual():number{
        return this.vida;
    }

    set vidaActual(valor:number){
        if(valor >= 0)
        this.vida = valor;
        else
        console.log("La vida debe ser cero o mayor que cero");
    }

    mostrar():void{
        console.log(`${this.nickname} - ${this.vidaActual}`)
    }
}

class Mundo1 extends Juego{
    constructor(nickname:string, vida:number){
        super(nickname, vida);
    }

    aventura():void{
        const nuevaVida = this.vidaActual - 30
        console.log(`Su nueva vida es del ${nuevaVida}%`)
    }

    acuatico():void{
        const nuevaVida = this.vidaActual - 50 + 10
        console.log(`Su nueva vida es del ${nuevaVida}%`)
    }

    endgame():void{
        const nuevaVida = this.vidaActual - 50
        console.log(`Su nueva vida es del ${nuevaVida}%`)
    }

}

const jugador = new Mundo1("Porfirio", 100)
jugador.aventura()
jugador.acuatico()
jugador.endgame()
jugador.mostrar()