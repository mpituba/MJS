const guests = [
  { name: 'Marcos',    age: 28 }, 
  { name: 'Angélica',  age: 27 }, 
  { name: 'Luana',     age: 17 }, 
  { name: 'Leticia',   age: 45 }, 
  { name: 'Raphael',   age: 18 },
]

//Existem maiores de idade na lista?
const hasAdults = guests.some(guest => guest.age >= 18)
console.log(hasAdults)

//Todos são maiores de idade?
const everyoneOsAnAdult = guests.every(guest => guest.age >= 18)
console.log(everyoneOsAnAdult)


