/* Spread operator, parecido ao varargs do java */

const parts = ['ombro', 'joelho']

//Aplicando o spread operator no array
const sentence = ['cabeça', ...parts, 'pés']
console.log('Saída do sentence:')
console.log(sentence)

/* Aplicando o spread operator na função para recuperar
  valores de multiplos parâmetros. */
function createUser (name, age, ...contacts) {
  return {
    name,
    age,
    contacts
  }
}

//Executando método createUser
const saida = createUser ('Lucas', 32, 'email',
                           'email2', 'email3')
console.log('saída do createUser:')
console.log(saida)


/* Exemplo de criação de mutable array de um immutable
  array */
const immutableArray = ['select', '*','from','posts']

const mutableArray = [...immutableArray]
mutableArray.push('where id = 1')
console.log('saída do mutableArray:')
console.log(mutableArray)
