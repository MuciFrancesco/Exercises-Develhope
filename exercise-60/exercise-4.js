const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here

function fetchPersonById(id) {
  const personId = persons.find((personById) => personById.id === id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (personId) {
        return resolve(personId);
      } else {
        return reject(new Error("inserire un id valido"));
      }
    }, 1000);
  });
}
function fetchPersonByJob(jobTitle) {
  const personJob = jobs.find((personByJob) => personByJob.id === jobTitle);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (personJob) {
        return resolve(personJob);
      } else {
        return reject(new Error("inserire un id valido"));
      }
    }, 1000);
  });
}

Promise.all([fetchPersonById(1), fetchPersonByJob(1)])
  .then((person) =>
    person.reduce((result, corrent) => {
      return Object.assign(result, corrent);
    })
  )
  .then((person) => {
    let persons = ({ age, ...personInfo } = person);
    return console.log(personInfo);
  })
  .catch((err) => console.log(err));
