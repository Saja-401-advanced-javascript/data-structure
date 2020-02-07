


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

class Queue {
  constructor() {
    this.front = null;
    this.last = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    newNode.next = this.last;
    this.last = newNode;

    if (this.front === null) {
      this.front = newNode;
    }
  }
  dequeue() {

    if (this.front === null) {
      return 'NullReferenceException';
    }
    const frontNode = this.front;

    if (this.last !== this.front) {

      let currentNode = this.last;

      while (currentNode.next !== this.front) {
        currentNode = currentNode.next;
      }

      this.front = currentNode;
      this.front.next = null;

    } else {
      this.front = null;
      this.last = null;
    }
    return frontNode.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }


}

// let saja = new Queue;
// saja.enqueue('tareq');
// saja.enqueue('maryam')
// saja.enqueue('saja')
// saja.dequeue();
// console.log(saja.isEmpty());

module.exports = { Stack, Queue };
