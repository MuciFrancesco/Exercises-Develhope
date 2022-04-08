// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if (role=='ceo') {
    console.log('ceo => 2200')
  }
  else if (role=='manager') {
    console.log('manager => 1800')
  }
  else if (role=='cto') {
    console.log('cto => 1800')
  }
  else if (role=='developer') {
    console.log('developer => 1500')
  }
  else {
    console.log('default => 1000')
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');
