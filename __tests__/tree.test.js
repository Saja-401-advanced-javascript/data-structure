'use strict';

let {Node, BinaryTree, BinarySearchTree} = require('../lib/tree.js')


describe('the Binary tree', () => {
    let tree = null;

    beforeAll(() => {
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
    });

    it ('preOrder()', () => {
        let expected = [];
        let preOrderTree = tree.preOrder()
        expected(preOrderTree).toEqual(expected);
    })
})