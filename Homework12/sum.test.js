// import {sum} from "./sum";
const sum = require('./sum.js');

test('Test test', () => {
  console.log('Test message');
});

test('1+2=3', () => {
  expect(1 + 2).toEqual(3);
});

test('Verify string', () => {
  const str = 'Hello World';
  expect(str).toEqual('Hello World');
});

test('Verify array length', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(array).toHaveLength(6);
  expect(array.length).toBe(6);
});

test('Verify object', () => {
  const person = {
    name: 'John',
    age: 30
  };
  expect(person).toHaveProperty('name', 'John');
});
