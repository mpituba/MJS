/*

*/

const person = {
  name: 'Italo',
  age: 14
}

//As chaves aplicam a desestruturação passando os valores
function introduce ({name, age}) {
  console.log(`Oi! Meu nome é ${name} e eu tenho ${age} anos.`)
}

const fruits = ['banana','morango','manga']

//Desestruturando Array de frits
const [firstFruit, secondFruit] = fruits

introduce(person)
console.log(firstFruit)
console.log(secondFruit)