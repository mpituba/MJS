//Este comando executa varias vezes com o intervalo 
const interval = setInterval(() => {
  console.log('Executou!')
}, 5000);


setTimeout(() => {
  //console.log('Executou!')

  //Este comando cancela o bloco anterior do setInterval
  clearTimeout(interval)
}, 20000);

