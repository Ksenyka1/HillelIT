const users = [
  {
    name: "Sofia",
    email: "sofia@example.com",
    age: 22,
  },
  {
    name: "Oleh",
    email: "oleh@example.com",
    age: 30,
  },
  {
    name: "Ira",
    email: "ira@example.com",
    age: 27,
  }
];

for (const { name, email, age} of users) {
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
}