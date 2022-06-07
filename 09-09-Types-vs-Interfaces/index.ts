interface Animal {
  sex: 'male' | 'female'
  hungry: boolean
  age: number
}

interface Mamal extends Animal {
  weaned: boolean
}

//O mesmo que Person extends Mamal
type Person = Mamal & {
  name: string
}

const animal: Person = {
  hungry: false,
  weaned: true,
  sex: 'male',
  age: 6,
  name: 'Tiago'
}

//Tipagem de funcao
interface Greet {
  (name: string): string
}

const greet: Greet = name => 'Hello, ' + name


//Se fosse com type
type GreetMethod = (name: string) => string
const greet2: GreetMethod = name => 'Hello, ' + name

