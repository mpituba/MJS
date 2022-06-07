interface Person {
  name: string
  age: number
}

//Esta interface complementa a acima, incluindo sex.
interface Person {
  sex: 'male' | 'female'
}

const person: Person = {
  age: 22,
  name: 'Lucas',
  sex: 'male'
}

/* Uma interface pode extender de outras com extends:
  interface Human extends Animal
*/
