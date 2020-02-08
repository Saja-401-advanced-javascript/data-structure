'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild - rightChild;
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

// data => read the node
// left => go to the left node
// right => go to the right node
  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    }
    _walk(this.root);
    return results
  }
//ldr
  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    }
    _walk(this.root);
    return results
  }
//lrd
  postOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    }
    _walk(this.root);
    return results
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

class BinarySearchTree extends BinaryTree {


}

module.exports = {Node, BinaryTree, BinarySearchTree}