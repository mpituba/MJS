/* Desestruturando parâmetros e retorno de funções */

function createUser (name, age, email) {
  
  /* Função retornando um objeto, função fábrica de 
    design Patters. */
  return {
    name,
    age,
    contact: { email }
  }
}

/* Desestruturando o atributo name da função createUser
  que é um objeto e passando para a constante name. */
const { name } = createUser ('Lucas', 32, 'user@email.com')
console.log('############# Função createUser ############')
console.log(name)


/* Outro exemplo desestruturando parâmetros de função */
function createUser2 ({name2, age2, email2}) {
  return {
    name2,
    age2,
    contact2: { email2 }
  }
}

//Desestruturando parâmetros da função createUser2
const user = createUser2 ({
  name2: 'Lucas',
  age2: 32,
  email2: 'user@email.com'
})

console.log('############# Função createUser2 ############')
console.log(user)

