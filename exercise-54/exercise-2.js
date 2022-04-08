const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

let person1 = ({ id, ...personInfo } = person);
console.log(id, personInfo);
