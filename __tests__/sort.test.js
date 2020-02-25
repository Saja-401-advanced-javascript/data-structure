'use strict ';


const quickSort = require('../lib/sort.js');


describe(`Quick sorting`, () => {

  it('Can sort an unsorted array', () => {
    const testArr = [8,4,23,42,16,15];
    expect(quickSort(testArr,0,testArr.length - 1)).toEqual([4,8,15,16,23,42]);
  });

  it('Can sort an empty array', () => {
    const testArr = [];
    expect(quickSort(testArr)).toEqual([]);
  });

  it('Can sort an unsorted array with duplicate values', () => {
    const testArr = [7,3,5,2,9,10,2];
    expect(quickSort(testArr,0,testArr.length - 1)).toEqual([2,2,3,5,7,9,10]);
  });
});