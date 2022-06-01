var me = {
  name: 'Marcelo',
  //age: 18
  age: 15
}

function checkAge (person) {
  if (person.age >= 18) {
    console.log('Maior de idade')
  }
  else if (person.age < 18){
    console.log('Menor de idade')
  }
  
}

checkAge(me)

