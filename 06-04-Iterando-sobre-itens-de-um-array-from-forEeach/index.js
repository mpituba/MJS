const fruits = ['banana', 'morango', 'manga', 'abacate']

function eatAllFruits () {
  fruits.forEach ((fruit, index) => {
    console.log (`Hum, acabei de comer ${fruit}.`)
    console.log (`Ele era o ${index + 1}º item da minha lista.`)
  })
}

eatAllFruits ()
