class Human {
  hungry = true

  eat () {
    this.hungry = false
  }
}

const person = new Human()
const person2 = new Human()

person.eat()

//Sem fome
console.log(person)
//Com fome
console.log(person2)
