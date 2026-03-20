class Notificacion {
}
class NotificacionEmail extends Notificacion {
    constructor(email) {
        super();
        this.email = email;
    }
    enviar() {
        console.log(`${this.email} \nAsunto: Urgente! \nMensaje: Buenas noches caballero, le hacemos una cordial invitación a nuestra cena de Navidad, que tendrá lugar en el Tropico Inn a las 7:30PM el 24 de diciembre. Lo esperamos con todas las ansias! }`);
    }
}
class NotificacionSMS extends Notificacion {
    constructor(otp) {
        super();
        this.otp = otp;
    }
    enviar() {
        console.log(`Su codigo de verificacion es: ${this.otp}`);
    }
}
class NotificacionWhatsApp extends Notificacion {
    enviar() {
        console.log(`📷 Foto`);
    }
}
const email = new NotificacionEmail("ken@mail.com");
const sms = new NotificacionSMS(2810);
const whatsapp = new NotificacionWhatsApp;
email.enviar();
sms.enviar();
whatsapp.enviar();
export {};
//# sourceMappingURL=ej6.js.map