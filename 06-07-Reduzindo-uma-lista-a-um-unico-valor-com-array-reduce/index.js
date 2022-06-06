/* Reduzindo o array a um elemento após processamento */
const alunos = [
  {nome: 'Lucas',   nota: 8 },
  {nome: 'Mario',   nota: 2 },
  {nome: 'Jean',    nota: 10 },
  {nome: 'Rogerio', nota: 6 },
  {nome: 'Marcos',  nota: 5 },
]

const totalPontosTurma = alunos.reduce(
  (prev, current) => {
   // console.log(prev)
   // console.log(current)
    return prev + current.nota
  },
  0
)
console.log(totalPontosTurma)

