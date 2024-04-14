import { lista, listaDeContactos } from "./dependencies.js"
let imprimir = document.getElementById("imprimir")
let newContacto = document.getElementById("agregarContacto")
newContacto.addEventListener("click", ()=>{
    let card = document.createElement("div")
    imprimir.appendChild(card)

    let space = document.createElement("br")

    let name = document.createElement("span")
    name.innerText = "Nombre del contacto: "
    card.appendChild(name)
    let inputName = document.createElement("input")
    card.appendChild(inputName)
    
    let lastName = document.createElement("span")
    lastName.innerText = "Apellido del contacto: "
    card.appendChild(lastName)
    let inputLastName = document.createElement("input")
    card.appendChild(inputLastName)
    
    let telefono = document.createElement("span")
    telefono.innerText = "Numero Telefonico: "
    card.appendChild(telefono)
    let inputTelefono = document.createElement("input")
    card.appendChild(inputTelefono)

    let correo = document.createElement("span")
    correo.innerText = "Correo electronico: "
    card.appendChild(correo)
    let inputCorreo = document.createElement("input")
    card.appendChild(inputCorreo)

    let guardar = document.createElement("button")
    guardar.innerText = "Guardar"
    card.appendChild(guardar)

    guardar.addEventListener("click", ()=>{
        let count = 0
        let nombre=null;
        let apellido=null;
        let numero=0    ;
        let correo=null;
        let input = document.querySelectorAll("input")
        input.forEach(element => {
            count++
            let data = element.value
            switch (count) {
                case 1:
                    nombre = data
                    break;
                case 2:
                    apellido = data
                    break;
                case 3:
                    numero= data
                    break;
                case 4:
                    correo = data
                    break;
                default:
                    break;
            }
        });
        if (nombre != "" && apellido != "" && numero != null && correo != "" ) {
            listaDeContactos.addContacto(nombre , apellido , numero , correo)
            alert("contacto guardado")
            let valor = 0
    
            if(lista.isEmpty()){
                alert("ingrese un contacto.");
            }
        }else{
        alert("Por favor, complete todos los campos.");
        }
    })
})
let mostrarCont2 = document.getElementById("mostrar-contacto2")
let mostrarCont = document.getElementById("mostrar-contacto")
mostrarCont.addEventListener("click", ()=>{
    let valor = 0
    
    if(lista.isEmpty()){
        alert("ingrese un contacto.");
    }
    else{
        lista.ordenarDeBurbuja()
        console.log(lista)
        let vacio = document.createElement("span")
        mostrarCont2.innerText = ""
        mostrarCont2.appendChild(vacio) 

        do{ 
            const card= document.createElement("div");
            mostrarCont2.appendChild(card)

            let chartxt= document.createElement("h2");
            chartxt.innerText = "contacto"
            card.appendChild(chartxt)

            chartxt= document.createElement("span");
            chartxt.innerText = "Nombre: " + lista.getElementAt(valor).getData().getNombre() + " "
            card.appendChild(chartxt)
            
            chartxt= document.createElement("span");
            chartxt.innerText= lista.getElementAt(valor).getData().getApellido()  + " "
            card.appendChild(chartxt)
            
            chartxt= document.createElement("span");
            chartxt.innerText="Telefono: " + lista.getElementAt(valor).getData().getTelefono() + " "
            card.appendChild(chartxt)
            
            chartxt= document.createElement("span");
            chartxt.innerText="Correo Electronico: " + lista.getElementAt(valor).getData().getCorreoElectronico() + " "
            card.appendChild(chartxt)
            valor++
        } while (valor < lista.size());
    }
})
    
    