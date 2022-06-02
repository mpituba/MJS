const person = {
  name: 'Italo',
  age: 14,
  contact: {
    foo: {
      bar: {
        email: 'daniel.bonifacil@algaworks.com'
      }
    }
  }
}

/* Cria constantes individuais com o mesmo nome das 
  propriedades contidas no objeto person; no caso da
  propriedade email, observar a desestruturação desta
  propriedade aninhada vinda de person. */
const { name, age, contact: { foo: { bar: { email } } } } = person

/* Desestruturação criando uma nova constante com o mesmo
 valor de name */
const { name: novaConstante } = person

console.log(name)
console.log(age)
console.log(email)
console.log(novaConstante)
