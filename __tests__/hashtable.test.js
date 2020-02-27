'use strict ';

const Hashmap = require('../lib/hashtable.js');

describe('Hashmap', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('firstName', 'Saja');
    hashmap.add('secondName', 'Ahmad');
    expect(hashmap.contains('firstName')).toBe(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('firstName', 'Saja');
    hashmap.add('secondName', 'Ahmad');
    expect(hashmap.get('firstName')).toBe('Saja');
  });


  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('firstName', 'Saja');
    hashmap.add('secondName', 'Ahmad');
    expect(hashmap.get('lastName')).toBe(null);
  });


  it('Successfully handle a collision within the hashtable', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('silent', 'Saja');
    hashmap.add('listen', 'Ahmad');
    expect(hashmap.get('listen')).toBe('Ahmad');
  });


  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('silent', 'Saja');
    hashmap.add('listen', 'Ahmad');
    expect(hashmap.get('listen')).toBe('Ahmad');
  });


  it('Successfully hash a key to an in-range value', () => {
    const hashmap = new Hashmap(1024);
    expect(hashmap.hash('firstName')).toBe(395);
  });
});