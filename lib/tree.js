

class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild - rightChild;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // data => read the node
  // left => go to the left node
  // right => go to the right node
  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.leftChild) _walk(node.leftChild);
      if(node.rightChild) _walk(node.rightChild);
    };
    _walk(this.root);
    return results;
  }


  //ldr
  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.leftChild) _walk(node.leftChild);
      results.push(node.value);
      if(node.rightChild) _walk(node.rightChild);
    };
    _walk(this.root);
    return results;
  }


  //lrd
  postOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.leftChild) _walk(node.leftChild);
      if(node.rightChild) _walk(node.rightChild);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}



let treeA = new Node('saja');
let treeB = new Node('tareq');
let treeC = new Node('maryam');
let treeD = new Node('tameem');
let treeE = new Node('marya');

treeA.leftChild = treeB;
treeA.rightChild = treeC;
treeC.leftChild = treeD;
treeC.rightChild = treeE;

let tree = new BinaryTree(treeA);

console.log('********', tree.preOrder());

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }


  add(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    }
    this._addNode(val, this.root);
  }
  _addNode(val, node) {
    if (val > node.value) {
      if (node.right === null) {
        node.right = new Node(val);
        return;
      } else {
        this._addNode(val, node.right);
        return;
      }
    }
    if (val <= node.value) {
      if (node.left === null) {
        node.left = new Node(val);
        return;
      }
      else {
        this._addNode(val, node.left);
        return;
      }
    }
  }
  contains(val) {
    return this._containsNode(val, this.root);
  }
  _containsNode(val, node) {
    if (node === null) {
      return false;
    }
    if (node.value === val) {
      return true;
    } else if (node.value < val) {
      return this._containsNode(val, node.right);
    } else if (node.value >= val) {
      return this._containsNode(val, node.left);
    }
  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};