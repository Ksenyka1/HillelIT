const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((value, index) => {
  return value * index;
});

console.log(result);