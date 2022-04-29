class Person {
  static fromObject(obj) {
    return new Object(this.obj = obj);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};


const person=Person.fromObject(obj);
console.log(person)
