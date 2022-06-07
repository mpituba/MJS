/* É necessário incluir o atributo "type" no package.json e o 
    import abaixo: */

import chalk from 'chalk'

console.log(chalk.red('Olá, mergulhador!'))

console.log(chalk.bgRed('Olá, mergulhador!'))

console.log(chalk.red('Olá'), chalk.cyan('Mergulhador'))

console.log(chalk.bgRed('Olá'), chalk.bgCyan('Mergulhador'))
