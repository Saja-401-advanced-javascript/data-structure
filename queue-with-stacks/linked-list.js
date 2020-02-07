

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

}

// let saja = new LinkedList
// saja.insert('tareq')
// saja.insert('saja')
// saja.insert('maryam')
// console.log('888888', saja.toString());


module.exports = LinkedList;