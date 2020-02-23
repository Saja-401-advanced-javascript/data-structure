'use strict ';

const InsertionSort = require('../lib/sort.js');

describe('InsertionSort', () => {


  it ('Return a sorted array', () => {
    let array = [8,4,23,42,16,15];
    expect(InsertionSort(array)).toEqual([4,8,15,16,23,42]);
  });

});