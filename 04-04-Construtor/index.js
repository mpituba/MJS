class Human {
  hungry = true
  name
  age
  sex

  constructor (props) {
    this.name = props.name
    this.age = props.age
    this.sex = props.sex
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