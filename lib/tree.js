'use strict';

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
    }
    _walk(this.root);
    return results
  }


//ldr
  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.leftChild) _walk(node.leftChild);
      results.push(node.value);
      if(node.rightChild) _walk(node.rightChild);
    }
    _walk(this.root);
    return results
  }


//lrd
  postOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.leftChild) _walk(node.leftChild);
      if(node.rightChild) _walk(node.rightChild);
      results.push(node.value);
    }
    _walk(this.root);
    return results
  }




}
 function  fizzBuzzTree(tree){
  if (tree.value %3 ===0 && tree.value %5 ===0){
    tree.value = 'FizzBuzz';
  } else if (tree.value %3 ===0){
    tree.value = 'Fizz';
  } else if (tree.value %5 ===0){
    tree.value = 'Buzz';
  } 

  // this.fizzBuzzTree(tree.rightChild);
  // this.fizzBuzzTree(tree.leftChild)
  };

// If the value is divisible by 3, replace the value with “Fizz”
// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
// If the value is not divisible by 3 or 5, simply turn the number into a String.

let treeA = new Node(1);
let treeB = new Node(6);
let treeC = new Node(10);
let treeD = new Node(15);
let treeE = new Node(2);

treeA.leftChild = treeB;
treeA.rightChild = treeC;
treeC.leftChild = treeD;
treeC.rightChild = treeE;

let tree = new BinaryTree(treeA);

console.log('********', fizzBuzzTree(tree).root.leftChild.value);

class BinarySearchTree extends BinaryTree {


}

module.exports = {Node, BinaryTree, BinarySearchTree}