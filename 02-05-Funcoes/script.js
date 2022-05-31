function greet (name = 'Mergulhador') {
  console.log('Boa tarde, ' + name)
}

greet()
greet('Marcelo')
greet('Rafaela')
greet('Caio')

//Exemplo de função retornando valor
function greet2(name2 = 'Programador') {
  return 'Boa Noite, ' + name2
}

var greeting = greet2('Daniel')
console.log(greeting)
