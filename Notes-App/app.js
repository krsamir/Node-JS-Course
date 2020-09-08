const validator = require('validator')
const chalk = require('chalk');

const message = require('./notes.js')
const msg = message();
console.log(validator.isEmail('samir@gmail.com'))

console.log(chalk.green.bold.inverse('Success!'))