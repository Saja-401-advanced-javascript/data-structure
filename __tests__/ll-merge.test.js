


let LinkedList = require('../queue-with-stacks/linked-list.js');



describe('linked list merge', () => {
  it(' where k is not at the end, but somewhere in the middle of the linked list', () => {
    let SH = new LinkedList;
    let Saja = new LinkedList;
    Saja.insert('Tareq');
    Saja.insert('Maryam');
    Saja.insert('Saja');

    let hala = new LinkedList;
    hala.insert('Zaina');
    hala.insert('Zainab');
    hala.insert('Yossef');
    expect(SH.merge(Saja, hala).toString()).toEqual('Tareq -> Zaina -> Maryam -> Zainab -> Saja -> Yossef -> NULL');
  });
});