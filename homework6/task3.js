const car1 = {
  brand: "Audi",
  model: "A4",
  year: 2010
};

const car2 = {
  brand: "BMW",
  model: "X5",
  year: 2023
};

const car3 = {
  ...car1,
  ...car2
};

console.log(car3);