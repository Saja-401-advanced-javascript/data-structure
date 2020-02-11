

let Animal = require('../challenge/fifo-animal-shelter.js');


let catA = {
  name: 'lady',
  kind: 'cat',
};

let catB = {
  name: 'soso',
  kind: 'cat',
};

let dogA = {
  name: 'ghost',
  kind: 'dog',
};

let dogB = {
  name: 'Alex',
  kind: 'dog',
};



describe('Animal shelter', () => {



  it('should add a cat to the queue', () => {
    let  animal = new Animal();

    animal.enqueue(catA);

    expect(animal.cat[0].kind).toEqual('cat');
  });

  it('should add a dog to the queue', () => {
    let  animal = new Animal();

    animal.enqueue(dogA);

    expect(animal.dog[0].kind).toEqual('dog');
  });

  it('should remove a dog from the queue', () => {
    let animal = new Animal();

    animal.enqueue(dogA);
    animal.enqueue(dogB);
    animal.dequeue({ kind: 'dog' });

    expect(animal.dog[0].kind).toEqual('dog');
  });

  it('should remove a cat from the queue', () => {
    let animal = new Animal();

    animal.enqueue(catA);
    animal.enqueue(catB);
    animal.dequeue({ kind: 'cat' });

    expect(animal.cat[0].kind).toEqual('cat');
  });

  it('should dequeue nothing if the pref is not dog or cat', () => {
    let  animal = new Animal();

    animal.enqueue(catA);
    animal.enqueue(catB);
    animal.dequeue({ kind: 'fish' });

    expect(animal.cat[0].kind).toEqual('cat');
    expect(animal.cat[0].name).toEqual('lady');
  });

});