const fruits = ['banana', 'morango', 'manga',
                 'kiwi', 'maracuja']

/* Desestruturação usando Rest operator */
const [firstItem, secondItem, ...otherItems] = fruits

console.log(firstItem)
console.log(secondItem)
console.log(otherItems)

/* Obs.: O Rest operator deve ser sempre o ultimo elemento */