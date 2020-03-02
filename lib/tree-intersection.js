
class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
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
      if (node.leftChild) _walk(node.leftChild);
      if (node.rightChild) _walk(node.rightChild);
    };
    _walk(this.root);
    return results;
  }
}


function treeInteraction(tree1, tree2) {
  let tree1Arr = tree1.preOrder();
  let tree2Arr = tree2.preOrder();
  // console.log('111111', tree1Arr);
  console.log('22222', tree2Arr);
  let results = [];
  for (let i = 0; i < tree1Arr.length; i++) {
    for (let j = 0; j < tree2Arr.length; j++) {
      if (tree1Arr[i] === tree2Arr[j]) {
        results.push(tree2Arr[j]);
      }
    }
  }
  return results;
}



// let treeA = new Node('saja');
// let treeB = new Node('tareq');
// let treeC = new Node('maryam');
// let treeD = new Node('tameem');
// let treeE = new Node('marya');

// treeA.leftChild = treeB;
// treeA.rightChild = treeC;
// treeC.leftChild = treeD;
// treeC.rightChild = treeE;

// let tree1 = new BinaryTree(treeA);
// let tree2 = new BinaryTree(treeC);

// console.log('********', treeInteraction(tree1,tree2));

module.exports = { treeInteraction, BinaryTree, Node };

