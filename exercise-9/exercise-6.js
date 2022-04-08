const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const prova=Object.entries(person).forEach(([key])=>{
  console.log(`${key}`)
})

const keys=Object.keys(person);

function getKey(){
  for (const [key] of Object.entries(person)) {
    console.log(key);
  }
}
getKey()




console.log(keys)