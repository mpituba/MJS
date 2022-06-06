function greet () {
  //Cria o Array args dos argumentos existentes
  const args = Array.from(arguments)
   
 /* 
    //Executa uma map function
    const args = Array.from(arguments, function (name) {
    return name + '!'
    }) 
  */

    //Itera o Array numa arrow function
  args.forEach(argument => {
    console.log(`Hello, ${argument}!`)
  })
}

greet ('Júlio', 'Hélio', 'Jonas')
