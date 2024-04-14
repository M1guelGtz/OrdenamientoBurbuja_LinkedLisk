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
    
    ordenarDeBurbuja(){
        let valor = 0, valor2 = 0
        for (let i = 1; i < this.size();i++){
            for (let j = 0;j<this.size()-i ;j++){
                if(this.getElementAt(j) && this.getElementAt(j+1)){
                    if (this.getElementAt(j).getData().getNombre().charAt(0).toLowerCase() > this.getElementAt(j+1).getData().getNombre().charAt(0).toLowerCase()){
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
    
    
}
