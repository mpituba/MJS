/* Método .find encontra apenas o 
  primeiro item.
  Método filter encontra todos os itens 
  que satisfazem o valor do filtro.
 */
const alunos = [
  {nome: 'Lucas',   nota: 8 },
  {nome: 'Mario',   nota: 2 },
  {nome: 'Jean',    nota: 10 },
  {nome: 'Rogerio', nota: 6 },
  {nome: 'Marcos',  nota: 5 },
  {nome: 'Jean',    nota: 6 },
]

const alunoFilter = alunos.filter(aluno => {
  if (aluno.nome === 'Jean') {
    return true
  }
})
//Encontrou todos
console.log(alunoFilter)


const alunoFind = alunos.find(aluno => {
  if (aluno.nome === 'Jean') {
    return true
  }
})
//Encontrou somente o primeiro
console.log(alunoFind)
