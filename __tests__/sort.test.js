

let {Node, BinaryTree} = require('../lib/tree.js');


describe('the Binary tree', () => {

  beforeAll(() => {
    let nodeA = new Node('saja');
    let nodeB = new Node('tareq');
    let nodeC = new Node('maryam');
    let nodeD = new Node('tameem');
    let nodeE = new Node('marya');

    nodeA.leftChild = nodeB;
    nodeA.rightChild = nodeC;
    nodeC.leftChild = nodeD;
    nodeC.rightChild = nodeE;


  });

  it ('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree;
    expect(tree.root).toBeNull();
  });

  it ('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree('saja');
    expect(tree.root).toEqual('saja');
  });

  it ('Can successfully add a left child and right child to a single root node', () => {
    let nodeA = new Node('saja');
    let nodeB = new Node('tareq');
    let nodeC = new Node('maryam');
    let tree = new BinaryTree(nodeA);

    tree.leftChild = nodeB;
    tree.rightChild = nodeC;

    expect(tree.leftChild.value).toEqual('tareq');
    expect(tree.rightChild.value).toEqual('maryam');

  });


  it ('Can successfully return a collection from a preorder traversal', () => {
    let nodeA = new Node('saja');
    let nodeB = new Node('tareq');
    let nodeC = new Node('maryam');
    let nodeD = new Node('tameem');
    let nodeE = new Node('marya');

    nodeA.leftChild = nodeB;
    nodeA.rightChild = nodeC;
    nodeC.leftChild = nodeD;
    nodeC.rightChild = nodeE;

    let tree = new BinaryTree(nodeA);
    expect(tree.preOrder()).toEqual(['saja','tareq', 'maryam','tameem','marya']);

  });

  it ('Can successfully return a collection from an inorder traversal', () => {
    let nodeA = new Node('saja');
    let nodeB = new Node('tareq');
    let nodeC = new Node('maryam');
    let nodeD = new Node('tameem');
    let nodeE = new Node('marya');

    nodeA.leftChild = nodeB;
    nodeA.rightChild = nodeC;
    nodeC.leftChild = nodeD;
    nodeC.rightChild = nodeE;

    let tree = new BinaryTree(nodeA);
    expect(tree.inOrder()).toEqual(['tareq', 'saja','tameem','maryam','marya']);

  });

  it ('Can successfully return a collection from a postorder traversal', () => {
    let nodeA = new Node('saja');
    let nodeB = new Node('tareq');
    let nodeC = new Node('maryam');
    let nodeD = new Node('tameem');
    let nodeE = new Node('marya');

    nodeA.leftChild = nodeB;
    nodeA.rightChild = nodeC;
    nodeC.leftChild = nodeD;
    nodeC.rightChild = nodeE;

    let tree = new BinaryTree(nodeA);
    expect(tree.postOrder()).toEqual(['tareq','tameem','marya','maryam', 'saja']);

  });
});