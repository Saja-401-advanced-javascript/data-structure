

let LinkedList = require('../queue-with-stacks/linked-list.js');

describe('Linked List methods', () => {
  it ('Can successfully instantiate an empty linked list', ()=> {
    let Saja = new LinkedList;
    expect(Saja.head).toBeNull();
  });

  it ('Can properly insert into the linked list', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    expect(Saja.head.value).toEqual('Tareq');
  });

  it ('The head property will properly point to the first node in the linked list', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    expect(Saja.head.value).toEqual('Tareq');
  });

  it ('Can properly insert multiple nodes into the linked list', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Saja -> NULL');
  });

  it ('Will return true when finding a value within the linked list that exists', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    expect(Saja.include('Maryam')).toBeTruthy();
  });

  it ('Will return false when searching for a value in the linked list that does not exist', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    expect(Saja.include('Hala')).toBeFalsy();
  });

  it ('Can properly return a collection of all the values that exist in the linked list', ()=> {
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');
    expect(Saja.toString()).toEqual('Tareq -> Maryam -> Saja -> NULL');
  });
});




