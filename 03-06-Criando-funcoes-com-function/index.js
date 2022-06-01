function greet () {
  console.log('Bom dia!')
  console.log(this)
}

const me = {
  name: 'Daniel',
  greet () {
    console.log(this)
    return 'um texto'
  }
}

function getRemainingYearsToMajority(age) {
  return 18 - age
}

const remainingYears = getRemainingYearsToMajority(15)
console.log(remainingYears)