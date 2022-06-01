/*
 Aqui o hoisting executa a função sum mesmo antes dela
 ter existido, pois ele a leva para cima pelo motor
 do javaScript 
 */
const result = sum (1, 2)

console.log(result)

function sum (a = 1, b = 5) {
  return a + b
}