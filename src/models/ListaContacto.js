import { lista } from "../controllers/dependencies.js";
import { Contacto } from "./Contacto.js";
export class listaContacto{
    addContacto(nombre,apellido,numero,correo){
        let contacto = new Contacto()

        contacto.setNombre(nombre)
        contacto.setApellido(apellido)
        contacto.setTelefono(numero)
        contacto.setCorreoElectronico(correo)
        let nuevoContacto = contacto
        lista.push(nuevoContacto)
    }
    getContacto(){
        let objcontacto = lista.peek()
        console.log(objcontacto.getNombre())
        return objcontacto
    }
}