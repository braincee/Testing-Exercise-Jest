const reverseString = require('./reverseString');

describe('Reverse String', () => {

  it('string should return bmilc', () => {
    expect(reverseString('climb')).toBe('bmilc');
  });

  it('string should return tset', () => {
    expect(reverseString('test')).toBe('tset');
  });
});