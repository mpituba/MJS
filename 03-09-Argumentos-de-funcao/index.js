function sum (a, b) {
  
  console.log(arguments)
  console.log(arguments[1], arguments[2])
  return a + b
}

console.log(sum(1, 2))

//Outra forma
const soma = (a, b) => a + b

/* Definindo valores padrão para a  e b como zero, senão 
forem passados serão igual a zero */

const soma2 = (a = 0, b = 0) => a + b 
console.log(soma2())


