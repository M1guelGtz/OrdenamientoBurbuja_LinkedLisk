import { Node } from "./Node.js";

export class LinkedList {
    #count
    #head
    #tail

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    getHead(){
        return this.#head
    }
    getTail(){
        return this.#tail
    }

    peek(){
        let current = this.#tail.getData()
        return current
    }
    dequeue(){
        if(this.isEmpty()) {
            return null;
        }
        let value = this.#tail;
        this.#tail = this.#tail.next; 
        this.#count--;

        if (this.isEmpty()) {
            this.#head = null;
        }
        return value.getData();
    }

    push(item){
        const node = new Node(item, this.#head, null)
        /*if (this.isEmpty()) {
            this.#tail = node;
            return;
        }*/
        if(this.#head){
            node.next = this.#head
            this.#head.prev = node 
            this.#head = node
        }else{
            this.#head = node
            this.#tail = node
        }
        this.#count++
    }

    size(){
        return this.#count
    }
    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head
            for (let i=0;i<index && node != null; i++)
                node = node.next
            return node
        }
        else{
            return undefined

        }
    }
    isEmpty(){
        return this.#head === null
    }
    orden(){
        if (this.#head != null) {
            let temp
            let valor = 1
            let actual = this.#head
            let siguiente = actual.next
            while(valor < this.#count){
                let valor2 = 0
                console.log("vuelta #" + valor)
                while(siguiente != null){
                    if(actual.getData().getNombre().charCodeAt(0) < siguiente.getData().getNombre().charCodeAt(0)){
                        valor2++
                        temp = actual.getData().getNombre()
                        actual.getData().getNombre() = siguiente.getData().getNombre()
                        siguiente.getData().getNombre()= temp
                        console.log(valor2)
                    }
                    siguiente = siguiente.next
                    
                }
                actual = actual.next
                valor2=0
                valor++
            }
        }else{
            console.log("Lista No inicializada")
        }
    }
    ordenarDeBurbuja(){
        let valor = 0, valor2 = 0
        for (let i = 1; i < this.size();i++){
            for (let j = 0;j<this.size()-i ;j++){
                if(this.getElementAt(j) && this.getElementAt(j+1)){
                    if (this.getElementAt(j).getData().getNombre().charAt(0) > this.getElementAt(j+1).getData().getNombre().charAt(0)){
                        if(j == 0){
                            let aux = this.#head, aux2  = this.getElementAt(j).next, aux3 = this.getElementAt(j+1).next
                            this.#head = aux2
                            this.getElementAt(j).next = aux
                            this.getElementAt(j+1).next = aux3
                        }else{
                            let aux = this.getElementAt(j), aux2  = this.getElementAt(j).next, aux3 = this.getElementAt(j+1).next
                            this.getElementAt(j-1).next = aux2
                            this.getElementAt(j).next = aux
                            this.getElementAt(j+1).next = aux3
                        }
                    }
                }
            }
        }            
    }
    ordenamientoBurbuja(){
        let auxiliar = this.#head
        let actual = this.#head.next
        for (let i = 1 ; i < this.size() ; i++){
            for (let j = 0; j < this.size()-1 ; j++){
                if (auxiliar.getData().getNombre().charCodeAt(0) > actual.getData().getNombre().charCodeAt(0)){
                    let aux = this.getElementAt(j).getData()
                    this.getElementAt(j).next = this.getElementAt(j+1).getData()
                    this.getElementAt(j+1).getData = aux   
                }
            }
        }
    }
    
}
