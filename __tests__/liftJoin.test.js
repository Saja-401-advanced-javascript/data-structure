'use strict ';

let leftJoin = require('../lib/liftJoin.js');
const tableA = { 'A': 'a', 'B': 'b', 'C': 'c' };
const tableB = { 'A': 'apple', 'B': 'banana', 'D': 'duck' };


describe('Left Join', () => {
  it('the function return an array of arrays which is an object', () => {
    expect(typeof (leftJoin(tableA, tableB))).toBe('object');
  });

  it('the first items in the array will be the keys of the tables ', () => {
    const output = leftJoin(tableA, tableB);
    expect(output[0][0]).toEqual('A');
    expect(output[1][0]).toEqual('B');
    expect(output[2][0]).toEqual('C');
  });

  it('the second items of the array will be the values of the first table ', () => {
    const output = leftJoin(tableA, tableB);
    expect(output[0][1]).toEqual('a');
    expect(output[1][1]).toEqual('b');
    expect(output[2][1]).toEqual('c');
  });


  it('the third items in the arary will be the valuesof the second table ', () => {
    const output = leftJoin(tableA, tableB);
    expect(output[0][2]).toEqual('apple');
    expect(output[1][2]).toEqual('banana');
    expect(output[2][2]).toEqual(null);
  });

});