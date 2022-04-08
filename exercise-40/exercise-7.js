class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastname) {
    this._lastName = lastname;
  }

  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }

  fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName());

person.firstName = "Maria";
person.lastName = "Verdi";
person.age = 40;
console.log(person.fullName());
