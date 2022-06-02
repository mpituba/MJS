class Human {
  hungry = true
  awake = true

  eat () {
    this.hungry = false
  }

}

const person = new Human ()

/* Prototype é usado pra injetar propriedades em classes 
   existentes*/
Array.prototype.sleep = function () {
  this.awake = false
}

//Esta instrução só funciona depois da injeção no prototype
person.sleep ()

console.log (person)
