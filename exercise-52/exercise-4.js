const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = ({ id, firstName, lastName, age } = person);
filter = JSON.stringify(json, ["id", "age"]);
