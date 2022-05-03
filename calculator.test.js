const { add, subtract, multiply, divide } = require('./calculator');

describe('Addition', () => {
  it('number should return 8', () => {
    expect(add(1, 7)).toEqual(8);
  });

  it('number should return 11', () => {
      expect(add(6, 5)).toEqual(11);
  });

  it('number should return 5', () => {
      expect(add(2, 3)).toEqual(5);
  });
   
});

describe('Subtraction', () => {
  it('number should return 2', () => {
    expect(subtract(4, 2)).toEqual(2);
  });

  it('number should return 3', () => {
      expect(subtract(7, 4)).toEqual(3);
  });

  it('number should return 4', () => {
      expect(subtract(9, 5)).toEqual(4);
  });
});

describe('Multiplication', () => {
  it('number should return 15', () => {
    expect(multiply(3, 5)).toEqual(15);
  });

  it('number should return 6', () => {
    expect(multiply(3, 2)).toEqual(6);
  });

  it('number should return 10', () => {
    expect(multiply(5, 2)).toEqual(10);
  });

  it('number should return 21', () => {
    expect(multiply(7, 3)).toEqual(21);
   });
});

describe('Division', () => {
  it('number should return 3', () => {
    expect(divide(9, 3)).toEqual(3);
  });

  it('number should return 5', () => {
    expect(divide(15, 3)).toEqual(5);
  });

  it('number should return 4', () => {
    expect(divide(12, 3)).toEqual(4);
  });
});
