'use strict';

class Queue {
    constructure(){
        this.front = null;
        this.back = null;
    }
}



class AnimalShelter {
    constructor(){
        this.cat = new Queue();
        this.gog = new Queue();
    }

    enqueue(animal){
        animal.id = this.id;
        this.id++;
    }
    dequeue(preference){
        if(preference !== 'cat' && preference !== 'dog') {
            next = null;
        }
        
    }
}