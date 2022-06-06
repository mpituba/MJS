const minhaPromise = new Promise ((resolve, reject) => {
    //Status resolve() executado primeiro, será resolvida.
    //Se o status for reject() primeiro, será rejeitada.
    setTimeout(() => {
      //reject('❌')
      resolve('👍')
    }, 1000)

    //Bloco usado apenas para recuperar status da promise
    //Verificação do status após resolução
    setTimeout(() => {
      console.log(minhaPromise)
    }, 5000)

  })

console.log(minhaPromise)



