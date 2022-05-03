const capitalize = require('./capitalize');

describe('Capitalize', () => {
  it('string should return Water', () => {
    expect(capitalize('water')).toBe('Water');
  });

  it('string should return Home.', () => {
    expect(capitalize('home')).toBe('Home');
  });

  it('string should return Game', () => {
     expect(capitalize('game')).toBe('Game');
  });
});