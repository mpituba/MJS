function handleClick () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      //reject('Promise foi rejeitada')
      resolve('Promise foi resolvida')
    }, 1000)

  })
}

//Chamada a armazenamento dos valores da promise
const result = handleClick()
  .then(res => {
    //Comparando valor do Resolve() com o res do .then
    console.log('Promise foi resolvida' === res)
    console.log('Promise foi resolvida!')
    return 'Retorno bem-sucedido!'
  })
  .catch(err => {
    console.log('Houve um erro.')
    console.log(err)
    return ('Retorno mal-sucedido!')
  })


  //Bloco para exibição do resultado da promise
  setTimeout(() => {
    console.log(result)
  }, 2000)

