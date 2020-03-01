'use strict ';

let repeatedWord = require('../lib/repeated.js');

describe('repeated word', () => {
  it('recive a string', () => {
    expect(typeof('Once upon a time, there was a brave princess who...')).toBe('string');
  });

  it('return the first word to occur more than once in that provided string', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');
  });
});