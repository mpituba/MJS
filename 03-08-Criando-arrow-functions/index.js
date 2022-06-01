//Function decoration
function name () {

}

//Function expression
const name2 = function () {

}

//Arrow function
const name3 = () => {

}

//Exemplo
const getRemainingYears = (age) => {
  return 18 - age
}


console.log(getRemainingYears(15))

//Exemplo2

const me = {
  name: 'Lucas',
  age: 12,
  greet: () => {
    console.log(this)
  }
}

me.greet()
