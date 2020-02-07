



class AnimalShelter {
  constructor() {
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal) {
    if (animal.kind === 'cat') {
      this.cat.push(animal);
    } else if (animal.kind === 'dog') {
      this.dog.push(animal);
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if (pref.kind === 'cat') {
      this.cat.pop();
      return this.cat;
    } else if (pref.kind === 'dog') {
      this.dog.pop();
      return this.dog;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;