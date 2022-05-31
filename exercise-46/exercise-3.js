const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let { id, firstName, lastName, age } = person;

function isAdult(person) {
  let { age } = person;
  return age >= 18;
}

console.log(isAdult(person));
