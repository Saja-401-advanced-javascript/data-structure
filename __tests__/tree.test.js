'use strict';

let {Node, BinaryTree, BinarySearchTree} = require('../lib/tree.js')

describe('Breadth first', ()=>{
    let tree = null;
  
      let node1 = new BreadthfirstTraversal.Node(2);
      let node2 = new BreadthfirstTraversal.Node(7);
      let node3 = new BreadthfirstTraversal.Node(5);
      let node4 = new BreadthfirstTraversal.Node(2);
      let node5 = new BreadthfirstTraversal.Node(6);
      let node6 = new BreadthfirstTraversal.Node(9);
      let node7 = new BreadthfirstTraversal.Node(5);
      let node8 = new BreadthfirstTraversal.Node(11);
      let node9 = new BreadthfirstTraversal.Node(4);
  
  
      node1.left = node2;
      node1.right = node3;
      node2.left = node4;
      node2.right = node5;
      node5.left = node7;
      node5.right = node8;
      node3.right = node6;
      node6.left = node9;
  
  
      tree = new BinaryTree(node1);
      console.log('8888', tree);
      
  
 
    it('it should traversal as breadth in Binary search tree', ()=>{
      expect(tree.breadthTraversal()).toEqual([2,7,5,2,6,9,5,11,4]);
    });
  
  });