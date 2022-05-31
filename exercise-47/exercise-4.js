const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
for (const [key, value] of Object.entries(
  ({ id, firstName, lastName, age } = person)
)) {
  console.log(value);
}
