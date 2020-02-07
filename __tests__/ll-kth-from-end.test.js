

let LinkedList = require('../queue-with-stacks/linked-list.js');


describe('linked list insertions', () => {
  it('Where k is greater than the length of the linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insert('Tameem');
    expect(Saja.kthFromEnd(8)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insert('Tameem');
    expect(Saja.kthFromEnd(4)).toEqual('Exception');
  });

  it('Where k is not a positive integer', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insert('Tameem');
    expect(Saja.kthFromEnd(-10)).toEqual('Exception');
  });

  it('Where the linked list is of a size 1', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    expect(Saja.kthFromEnd(1)).toEqual('Exception');
  });

  it(' where k is not at the end, but somewhere in the middle of the linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insert('Tameem');
    expect(Saja.kthFromEnd(1)).toEqual('Saja');
  });
});