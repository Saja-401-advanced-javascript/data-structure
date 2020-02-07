

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let currentNode = this.head;

    // console.log('8888888', currentNode.next);
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  include(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;

  }
  toString() {
    let currentNode = this.head;
    let string = '';
    while (currentNode) {
      string += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    return string += `NULL`;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }


  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let previous = null;
    while (currentNode) {
      if (currentNode.value === value) {
        if (previous === null) {
          this.head = newNode;
        } else {
          previous.next = newNode;
        }
        newNode.next = currentNode;
      }
      previous = currentNode;
      currentNode = currentNode.next;
    }

  }

  insertAfter(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let nextValue = null;
    while (currentNode) {
      if (currentNode.value === value) {
        nextValue = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextValue;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let length = 0;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    let requiredNode = length - 1 - k;
    if (requiredNode < 0 || k < 0) {
      return 'Exception';
    }

    currentNode = this.head;

    while (requiredNode > 0) {
      requiredNode--;
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }


}

// let saja = new LinkedList;
// saja.insert('tareq');
// saja.insert('Saja');
// saja.insert('maryam');
// console.log('888888888', saja.kthFromEnd(5));



module.exports = LinkedList;