

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

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }

  enqueue(value){
    this.stack1.push(value);

  }

  dequeue(){
    if(this.stack2.isEmpty()){
      while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack2.pop());
      }
      return this.stack2.pop();
    }else{
      return this.stack2.pop();
    }
  }
}


//     let a =new PseudoQueue
// a.enqueue(1)
// a.enqueue(2)
// a.dequeue()
// console.log('a : ', a);
module.exports = PseudoQueue;