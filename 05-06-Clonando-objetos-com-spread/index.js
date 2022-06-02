/*Clonagem de objetos com spread operator */

//Objeto de exemplo
const user = {
  name: 'Marcelo',
  email: 'mpituba@email.com'
}

//Aqui newUser recebe uma referência, não atribuição.
//const newUser = user

/* Definição de valores que altera o objeto user pois é uma
  referência. */
//newUser.name = 'Marcelo'
//newUser.email = 'mpituba@email.com'

/* O spread operator neste caso tem o efeito de retirar as
  chaves do objeto user. Gera um clone de objeto sem 
  referência. */
const newUser = {...user}
console.log(newUser)



