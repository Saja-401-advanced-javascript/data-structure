

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    this.next = this.top;
    this.top = newNode;
  }

  pop() {

    if (this.top === null) {
      return 'NullReferenceException';
    }
    let top = this.top;
    this.top = top.next;
    return top.value;

  }

  peek() {
    if (this.top === null) {
      return 'NullReferenceException';
    } else {

      return this.top.value;
    }

  }

  isEmpty() {
    return this.top === null;
  }
}


class PseudoQueue {
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return 'Ops empty queue';
      }
      while (this.stack1.length > 0) {
        let poped = this.stack1.pop();
        this.stack2.push(poped);
      }
    }
    return this.stack2.pop();
  }
}



//     let a =new PseudoQueue
// a.enqueue(1)
// a.enqueue(2)
// // a.dequeue()
// console.log('a : ', a);
module.exports = PseudoQueue;