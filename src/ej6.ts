abstract class Notificacion{
    abstract enviar():void;
}

class NotificacionEmail extends Notificacion{
    email:string;

    constructor(email:string){
        super();
        this.email = email;
    }

    enviar(): void {
        console.log(`${this.email} \nAsunto: Urgente! \nMensaje: Buenas noches caballero, le hacemos una cordial invitación a nuestra cena de Navidad, que tendrá lugar en el Tropico Inn a las 7:30PM el 24 de diciembre. Lo esperamos con todas las ansias! }`)
    }
}

class NotificacionSMS extends Notificacion{
    otp:number;

    constructor(otp:number){
        super();
        this.otp = otp;
    }

    enviar(): void {
        console.log(`Su codigo de verificacion es: ${this.otp}`)
    }
}

class NotificacionWhatsApp extends Notificacion{
    enviar(): void {
        console.log(`📷 Foto`)
    }
}

const email = new NotificacionEmail("ken@mail.com")
const sms = new NotificacionSMS(2810)
const whatsapp = new NotificacionWhatsApp
email.enviar()
sms.enviar()
whatsapp.enviar()