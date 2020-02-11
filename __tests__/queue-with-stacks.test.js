

const  PseudoQueue = require('../queue-with-stacks/queue-with-stacks.js');


// let numbers;

// describe(`Test the numbers()`, () => {

//   beforeEach(() => {
//     numbers = new PseudoQueue();
//   });

//   it('Can successfully add to the numbers', () => {
//     //  numbers = new PseudoQueue;
//     numbers.enqueue('1');
//     numbers.enqueue('2');
//     numbers.enqueue('3');
//     numbers.enqueue('4');
//     expect(numbers.stack1.isEmpty()).toBeFalsy();
//   });

//   it('Can successfully dequeue off the stack', () => {
//     //  numbers = new PseudoQueue;
//     numbers.enqueue(2);
//     numbers.enqueue(8);
//     numbers.enqueue(4);
//     numbers.dequeue();
//     numbers.dequeue();
//     numbers.dequeue();
//     expect(numbers.stack1.isEmpty()).toBeTruthy();
//   });

// });


let pseudoQueue;

describe('PseudoQueue', () => {

  beforeEach(() => {
    numbers = new PseudoQueue();
  });

  describe('enqueue method', () => {

    it('Can successfully add onto a PseudoQueue', () => {
      numbers.enqueue('1');
      numbers.enqueue('2');
      numbers.enqueue('3');
      numbers.enqueue('4');
      expect(numbers.stack1).toEqual(['1', '2', '3', '4']);
    });
  });

  describe('dequeue method', () => {

    it('Can successfully dequeue off the stack', () => {
      numbers.enqueue('1');
      numbers.enqueue('2');
      numbers.enqueue('3');
      numbers.enqueue('4');
      expect(numbers.dequeue()).toEqual('1');
      expect(numbers.stack2).toEqual(['4', '3', '2']);
    });
  });
});