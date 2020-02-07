'use strict';

const  PseudoQueue = require('../queue-with-stacks/queue-with-stacks.js');

let  queue;



describe(`Test the numbers()`, () => {

    
    it('Can successfully add to the numbers', () => {
        let numbers = new PseudoQueue
        numbers.enqueue('1');
        numbers.enqueue('2');
        numbers.enqueue('3');
        numbers.enqueue('4');
        expect(numbers.isEmpty()).toBeFalsy();
    });


  

    it('Can successfully dequeue off the stack', () => {
      queue.enqueue(2);
      queue.enqueue(8);
      queue.enqueue(4);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
      expect(queue.rear).toBeNull();
      expect(queue.isEmpty()).toBeTruthy();
    });



});