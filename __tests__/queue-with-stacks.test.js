

const  PseudoQueue = require('../queue-with-stacks/queue-with-stacks.js');




describe(`Test the numbers()`, () => {


  it('Can successfully add to the numbers', () => {
    let numbers = new PseudoQueue;
    numbers.enqueue('1');
    numbers.enqueue('2');
    numbers.enqueue('3');
    numbers.enqueue('4');
    expect(numbers.stack1.isEmpty()).toBeFalsy();
  });




  it('Can successfully dequeue off the stack', () => {
    let numbers = new PseudoQueue;

    numbers.enqueue(2);
    numbers.enqueue(8);
    numbers.enqueue(4);
    numbers.dequeue();
    numbers.dequeue();
    numbers.dequeue();
    expect(numbers.stack1.isEmpty()).toBeTruthy();
  });



});