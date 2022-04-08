class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static fromJson(x) {
    let jsonConverter = JSON.parse(x);
    jsonConverter = new Person(
      jsonConverter.id,
      jsonConverter.firstName,
      jsonConverter.lastName,
      jsonConverter.age
    );
    return jsonConverter;
  }
  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
let developer = new Person();
developer = Person.fromJson(json);
