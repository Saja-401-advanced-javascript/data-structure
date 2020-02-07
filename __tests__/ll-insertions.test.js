'use strict ';

let LinkedList = require('../queue-with-stacks/linked-list.js');


describe('linked list insertions', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.append('Tameem');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Saja -> Tameem -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.append('Tameem');
    Saja.append('Marya');
    Saja.append('Mohammed');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Saja -> Tameem -> Marya -> Mohammed -> NULL');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insertBefore('Maryam','Tameem');
    expect(Saja.toString()).toEqual('Tareq -> Tameem -> Maryam -> Saja -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insertBefore('Tareq','Tameem');
    expect(Saja.toString()).toEqual('Tameem -> Tareq -> Maryam -> Saja -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insertAfter('Maryam','Tameem');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Tameem -> Saja -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    Saja.insertAfter('Saja','Tameem');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Saja -> Tameem -> NULL');
  });
});