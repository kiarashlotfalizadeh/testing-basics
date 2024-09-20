import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './main';

test('returns string with first letter capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns string reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('adds 1 and 2 together', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 1 from 2', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('multiplies 2 by 3', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divide 6 by 2', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('letters wrap properly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('letters are case-sensitive', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('handles punctation correctly', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

let object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test('returns object with correct values', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
