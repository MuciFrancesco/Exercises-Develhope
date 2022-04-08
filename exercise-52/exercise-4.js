const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const prova = ({ firstName, lastName, ...json } = person);
filter = JSON.stringify(json);
