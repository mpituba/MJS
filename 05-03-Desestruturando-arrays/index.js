/* Desestruturações de arrays */

const fruits = ['banana','morango','manga']

//Recuperando o valor morango normalmente
//const secondItem = fruits[1]
//console.log(secondItem)

/* Recuperando o valor morango com desestruturação, a 
  vírgula indica que o primeiro valor deve ser bypassado
  se o primeiro valor for definido receberá o valor do
  primeiro indice banana. */
const [ , secondItem ] = fruits
console.log(secondItem)

/* Três objetos person que comporão um array friends */
const person = { name: 'Joaquim', age: 32 }
const person2 = { name: 'Jonas', age: 33 }
const person3 = { name: 'João', age: 34 }

const friends = [person, person2, person3]

/* Recuperando o valor da propriedade name de person2
   para dentro de uma constante chamada name, usando
   desestruturação. Obs:. Para desestruturar objetos usam-se
   as chaves e para arrays os colchetes. Neste caso temos
   objetos dentro de um array, por isso os colchete seguidos
   das chaves. */
const [ , { name } ] = friends
console.log(name)

/* Desestruturação de valores em arrays mais complexos */
const chart = [[1, 2],[3, 4],[5, 6]]

//Recuperando o valor 4, indice 1 posição 1 numa variável x
const [, [ , y ]] = chart
console.log(y)

/*Recuperando duas posições no índice 2 e desestruturando em
 constantes 'w' e 'z', as vírgulas indicam as posições
 bypassadas no array principal. */
const [ ,,[w, z]] = chart
console.log(w)
console.log(z)


