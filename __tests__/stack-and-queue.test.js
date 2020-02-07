


const {Stack, Queue} = require('../queue-with-stacks/stack-and-queue.js');

describe('Stacks ', () => {
  it('Can successfully push onto a stack', () => {
    let saja = new Stack;
    saja.push('tareq');
    expect(saja.peek()).toEqual('tareq');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let saja = new Stack;
    saja.push('tareq');
    saja.push('maryam');
    saja.push('saja');
    expect(saja.peek()).toEqual('saja');
  });

  it('Can successfully pop off the stack', () => {
    let saja = new Stack;
    saja.push('tareq');
    saja.push('maryam');
    saja.push('saja');
    expect(saja.pop()).toEqual('saja');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let saja = new Stack;
    saja.push('tareq');
    saja.push('maryam');
    saja.push('saja');
    saja.pop();
    saja.pop();
    saja.pop();
    expect(saja.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    let saja = new Stack;
    saja.push('tareq');
    saja.push('maryam');
    saja.push('saja');
    expect(saja.peek()).toEqual('saja');
  });

  it('Can successfully instantiate an empty stack', () => {
    let saja = new Stack;
    expect(saja.isEmpty()).toBeTruthy();
  });
});



describe('Queues', () => {
  it('Can successfully enqueue into a queue', () => {
    let saja = new Queue;
    saja.enqueue('tareq');
    expect(saja.peek()).toEqual('tareq');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let saja = new Queue;
    saja.enqueue('tareq');
    saja.enqueue('maryam');
    saja.enqueue('saja');
    expect(saja.last.value).toEqual('saja');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let saja = new Queue;
    saja.enqueue('tareq');
    expect(saja.dequeue()).toEqual('tareq');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let saja = new Queue;
    saja.enqueue('tareq');
    saja.enqueue('maryam');
    saja.enqueue('saja');
    expect(saja.peek()).toEqual('tareq');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let saja = new Queue;
    saja.enqueue('tareq');
    saja.enqueue('maryam');
    saja.enqueue('saja');
    saja.dequeue();
    saja.dequeue();
    saja.dequeue();
    expect(saja.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let saja = new Queue;
    expect(saja.isEmpty()).toBeTruthy();
  });
});