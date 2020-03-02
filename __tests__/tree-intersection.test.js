'use strict ';

let {treeInteraction, BinaryTree, Node} = require('../lib/tree-intersection.js');


let treeA = new Node('saja');
let treeB = new Node('tareq');
let treeC = new Node('maryam');
let treeD = new Node('tameem');
let treeE = new Node('marya');

let treeF = new Node('Ahmad');
let treeG = new Node('Mona');

treeA.leftChild = treeB;
treeA.rightChild = treeC;
treeC.leftChild = treeD;
treeC.rightChild = treeE;

treeF.leftChild = treeG;

let tree1 = new BinaryTree(treeA);
let tree2 = new BinaryTree(treeF);
let tree3 = new BinaryTree(treeC);

describe('Tree Interaction', () => {
  it('Pre Order method return an array of whole values in a binary tree', () => {
    expect(tree1.preOrder()).toEqual([ 'saja', 'tareq', 'maryam', 'tameem', 'marya' ]);
  });

  it('return empty array when no nodes in both trees have the same value ', () => {
    expect(treeInteraction(tree1, tree2)).toEqual([]);
  });

  it('return the only nodes that exist in both trees ', () => {
    expect(treeInteraction(tree1, tree3)).toEqual([ 'maryam', 'tameem', 'marya']);
  });


  it('return all nodes that exist in both trees when they have nodes have the same values ', () => {
    expect(treeInteraction(tree1, tree1)).toEqual([ 'saja', 'tareq', 'maryam', 'tameem', 'marya' ]);
  });

});