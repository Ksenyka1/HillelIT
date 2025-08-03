const person = {
  firstName: "Olena",
  lastName: "Shevchenko",
  age: 25
};

person.email = "olena@test.com";

delete person.age;


console.log(person);