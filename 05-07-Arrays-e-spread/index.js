const parts = ['ombro', 'joelho']

const sentence = ['cabeça', ...parts, 'pe']
console.log(sentence)

const immutableArray = ['select', '*', 'from']

const mutableArray = [...immutableArray]
mutableArray.push('batata')
console.log(immutableArray)
console.log(mutableArray)
