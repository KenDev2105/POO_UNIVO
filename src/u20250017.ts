import readline from "readline"

        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        })
class Productos{
    producto: string;
    precio: number;
    categoria: string;

    constructor(producto:string, precio: number,categoria:string){
        this.producto = producto;
        this.precio = precio;
        this.categoria = categoria
    }

    preguntarUsuario(): void{
        rl.question("Ingrese su nombre: ", (cliente) => {
            rl.question("Ingrese su numero de telefono: ", (telefono) =>{
                rl.question("Ingrese su dui: ", (dui) => {
                    rl.question("Ingrese su correo: ", (correo) => {
                        rl.question("Ingrese la fecha de hoy: ", (fecha) =>{
                        
                        console.log(`**** Comprobante de compra **** \nCliente: ${cliente} \nDui: ${dui} \nTeléfono: ${telefono} \nFecha: ${fecha}`)
                        
                        this.aplicarDescuentos()
                        rl.close()
                        })
                    })
                })
            })
        })
    }

    aplicarDescuentos(){
        this.categoria = this.categoria.toLowerCase()
        if(this.categoria === "tecnologia" || this.categoria === "tecnología"){
            const descuento = this.precio * 0.1
            const iva = this.precio * 0.13
            const total = this.precio - descuento + iva
            
            console.log(`------------- \nProducto: ${this.producto} \nPrecio base: $${this.precio.toFixed(2)} \nDescuento: $${descuento.toFixed(2)} \nIVA: $${iva.toFixed(2)} \nTotal: $${total.toFixed(2)}`)
        } else if(this.categoria === "ropa"){
            const descuento = this.precio * 0.15
            const iva = this.precio * 0.13
            const total = this.precio - descuento + iva

            console.log(`------------- \nProducto: ${this.producto} \nPrecio base: $${this.precio.toFixed(2)} \nDescuento: $${descuento.toFixed(2)} \nIVA: ${iva.toFixed(2)} \nTotal:${total.toFixed(2)}`)
        } else if(this.categoria === "calzado"){
            const descuento = this.precio * 0.2
            const iva = this.precio * 0.13
            const total = this.precio - descuento + iva

            console.log(`------------- \nProducto: ${this.producto} \nPrecio base: $${this.precio.toFixed(2)} \nDescuento: $${descuento.toFixed(2)} \nIVA: ${iva.toFixed(2)} \nTotal:${total.toFixed(2)}`)
        }
    }
}

const producto = new Productos("camisa", 10, "ropa")
producto.preguntarUsuario()



