import { getJSDocReturnTag } from "typescript"


function greet (name: string, age?:number) {
  console.log(
    `Hello, ${name.toUpperCase()}!`
  )
}

greet('Marcelo')


