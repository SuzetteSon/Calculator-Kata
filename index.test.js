const calc = require('./index.js');

describe('1. string calculator', () => {
  test('should throw error when no parameters are given', () => {
    expect(() => {
      calc.add();
    }).toThrow('No input.');
  });

  test('2. empty string should return 0', () => {
    expect(calc.add('')).toBe(0);
  });

  test('3. should only accept integers', () => {
    expect(() => {
      calc.add('S');
    }).toThrow('Invalid input.');
  });

  test('4. integers should be seperated only by delimiter', () => {
    expect(() => {
      calc.add('1]8');
    }).toThrow('Invalid input.');
  });

  test('5. should return the sum of all the integers', () => {
    expect(calc.add('1,2')).toBe('3');
    expect(calc.add('1,7')).toBe('8');
    expect(calc.add('8,2')).toBe('10');
    expect(calc.add('13,12')).toBe('25');
    expect(calc.add('2,2')).toBe('4');
  });

  test('6. repeated delimiters should throw error Invalid input.', () => {
    expect(() => {
      calc.add('1,8,');
    }).toThrow('Invalid input.');
  });

  test('7. delimiters without numbers in between should throw error Invalid input.', () => {
    expect(() => {
      calc.add('1,,8');
    }).toThrow('Invalid input.');
  });

  test('8. negative numbers should throw error Negative numbers are not allowed: [n1,n2,...,nn].', () => {
    expect(() => {
      calc.add('-1,8');
    }).toThrow('Negative numbers are not allowed: [-1]');
  });

  test('9. numbers larger than 1000 should be treated as 0', () => {
    expect(calc.add('1001,7')).toBe('7');
  });
});
