const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

function calculateAverageAge(age) {
  let i = 0,
    summ = 0,
    ageLength = age.length;
  while (i < ageLength) {
    summ = summ + age[i++];
  }
  return summ / ageLength;
}

let age = persons.map((ages) => ages.age);

const average = calculateAverageAge(age);

console.log(persons);
console.log(average);
