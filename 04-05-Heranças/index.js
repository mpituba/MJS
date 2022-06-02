
class Animal {
  sex

  constructor (props) {
    this.sex = props.sex
  }
}

//O certo seria herdar de Deus; aqui se faz a herança
class Human extends Animal{
  hungry = true
  name
  age
  
  constructor (props) {
    super(props)

    if (!props.name)
    throw Error('Nome é obrigatório')
    this.name = props.name
    this.age = props.age
    
  }  

  eat () {
    this.hungry = false
  } 

}

const person = new Human({
  name: 'Lucas',
  age: 34,
  sex: 'male'
})

console.log(person)