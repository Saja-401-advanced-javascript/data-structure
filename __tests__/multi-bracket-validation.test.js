

const checker = require('../lib/multi-bracket-validation.js');

describe('multu-brackets validator', () => {
  it('the function should return true', () => {
    expect(checker('()')).toEqual(true);
    expect(checker('({})')).toEqual(true);
    expect(checker('[(){}()]')).toEqual(true);
  });

  it('the function should return false', () => {
    expect(checker('([)')).toEqual(false);
    expect(checker('[)')).toEqual(false);
    expect(checker('[)})')).toEqual(false);
    expect(checker('(}')).toEqual(false);

  });
});