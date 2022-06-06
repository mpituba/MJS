function createUser (name, age, ...contacts) {
  return {
    name,
    age,
    contacts
  }
}

saida  = createUser ('Lucas', 32, 'email', 'email1', 'email2',
                    'email3', 'email4', 'email5')

console.log(saida)
