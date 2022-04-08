const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

let age=persons.map(ages=>ages.age)


function calculateAverageAge(age) {
  var i = 0, summ = 0, ArrayLen = age.length;
  while (i < ArrayLen) {
    summ = summ + age[i++];
  }
  return summ / ArrayLen;
}

let calculateMiddleAge=calculateAverageAge(age)
console.log(persons)
console.log(age)
console.log(calculateMiddleAge)