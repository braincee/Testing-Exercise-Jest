const stringLength = require('./stringLength');

describe('length of a string', () => {
  it('string should return 5', () => {
    expect(stringLength('dave')).toBe(4);
  });

  it('string should return 7', () => {
    expect(stringLength('bicycle')).toBe(7);
  });

  it('string should return 9', () => {
     expect(stringLength('technique')).toBe(9);
  });

  it('string should not < 1 or > 10', () => {
    expect(stringLength('')).not.toBeTruthy();
  });
});