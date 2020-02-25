class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeMaxValue {
  constructor(root = null){
    this.root = root;
  }

  findMaximumValue(){
    let storage = [];
    let _walk = (node)=>{
      storage.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    let max = 0;
    for (let i = 0; i < storage.length; i++) {
      if(storage[i] > max) max = storage[i];
    }

    return max;
  }
}
module.exports = {BinaryTreeMaxValue,Node};