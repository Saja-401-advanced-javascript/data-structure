'use strict';

let {BinarySearchTree} = require('../lib/tree.js')


describe('the Binary tree', () => {
  

    it ('fizzbuzz', () => {
        let tree = new BinarySearchTree(null);
        tree.add(10);
        tree.add(3);
        tree.add(0);
        tree.add(7);
        tree.add(15);
        tree.add(12);
        tree.fizzBuzzTree(tree.root);
        console.log(tree.root.left);
        expect(tree.root.value).toBe('Buzz');
        expect(tree.root.left.value).toBe('Fizz');
        expect(tree.root.left.left.value).toBe('FizzBuzz');
        expect(tree.root.right.value).toBe('FizzBuzz');
        })
})