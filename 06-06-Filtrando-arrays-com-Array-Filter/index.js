/* Filtragem de array */

const alunos = [
  {nome: 'Lucas',   nota: 8 },
  {nome: 'Mario',   nota: 2 },
  {nome: 'Jean',    nota: 10 },
  {nome: 'Rogerio', nota: 6 },
  {nome: 'Marcos',  nota: 5 }
]

const reprovados = alunos.filter(aluno =>{
  return aluno.nota < 6
})

const aprovados = alunos.filter(aluno =>{
  return aluno.nota >= 6
})
console.log('Aprovados:')
console.log(aprovados)

console.log('Reprovados:')
console.log(reprovados)
