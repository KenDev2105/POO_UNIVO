/* class GYM{
    peso:number;
    altura:number;
    constructor(peso:number, altura:number){
        this.peso=peso;
        this.altura=altura;
    }

    public imc():void{
        let res = this.peso/this.altura**2
        if(res < 18.5){
            console.log("Usted tiene bajo peso " + res.toFixed(2))
        } else if(res >= 18.5 && res <= 24.9){
            console.log("Usted tiene un peso nomral " + res.toFixed(2))
        } else if(res >= 25 && res <= 29.9){
            console.log("Usted tiene sobrepeso " + res.toFixed(2))
        } else if(res >= 30){
            ("Usted tiene obesidad " + res.toFixed(2))
        } 
    }
}

let cliente = new GYM(0, 2)
cliente.imc() */

/* class conversorTemperatura {
    temp:number;

    constructor(temp:number){
    this.temp = temp
    }

    public FC(): void{
        let res = (this.temp - 32) /1.8
        console.log(res.toFixed(2))
    }

    public CF(): void{
        let res = (this.temp * 1.8) + 32
        console.log(res.toFixed(2))
    }

    public KF(): void{
        let res = (this.temp - 273.15) * 1.8 + 32
        console.log(res.toFixed(2))

    }

    public KC(): void{
        let res = this.temp - 273.15
        console.log(res.toFixed(2))
    }
}

let temperatura = new conversorTemperatura(100);
temperatura.FC()
temperatura.CF()
temperatura.KF()
temperatura.KC() */

class instituto {
    estudiante:string;
    falta:number;
    constructor(estudiante:string,falta:number){
        this.estudiante=estudiante;
        this.falta=falta
    }

    public infracción():void{
        if(this.falta==1){
            console.log("Usted " + this.estudiante + " llegó tarde debe pagar $1")
        } else if(this.falta==2){
            console.log("Usted " + this.estudiante + " anda fuera del aula en horarios de clase, debe pagar $3")
        } else if(this.falta==3){
            console.log("Usted " + this.estudiante + " no trae la vestimenta apropiada, debe pagar $5")
        } else if(this.falta==4){
            console.log("Usted " + this.estudiante + " no ha hecho uso adecuado de las instalaciónes, debe pagar $10")
        }
    }
}

let infra = new instituto("Pocho",4)
infra.infracción()