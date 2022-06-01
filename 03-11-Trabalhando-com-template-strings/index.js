const name = 'Lucas'
const age = 32

//Cocatenação normal
const setence = 'Olá, meu nome é ' + name + ' e eu tenho ' + age
+ ' anos.'

//Template literals
const setence2 = `Olá, meu nome é ${name} e eu tenho ${age} anos.`

console.log(setence)
console.log(setence2)

//Com o uso de template literals não perde formatação
const html = `
      <ul>
        <li>
          ${name}
        </li>
        <li>
          ${age}
        </li>
      </ul>
    `
    
console.log(html)

