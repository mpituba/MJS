var person = {
  age: 14,
  name: 'Lucas'
}

//Função pura - Não altera dado do objeto
function getRemainingYearsToMajorty(person) {
  return 18 - person.age
}

//Função impura gera efeitos pois altera o estado do atributo
function increasePersonAge (person) {
  person.age = person.age + 1
}

increasePersonAge(person)
var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears)

