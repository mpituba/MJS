const ingredients = ['ovo', 'presunto']
const spices = ['sal', 'pimenta']

/* Forma tradicional de passar o array via função sem 
passar o array ou objeto inteiro pois os objetos vão
estar encapsulados */
//ingredients.push.apply(ingredients, spices)
//console.log(ingredients)

/* Usando spread operator */
ingredients.push(...spices)
console.log(ingredients)