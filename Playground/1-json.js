const fs = require('fs');

// const book = {
//     title:'Ego is the enemy',
//     author:'Ryan Holiday'
// }
// // Object to json
// const bookJSON=JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Samir"
data.planet = "Earth"
data.age = "22"

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)
console.log(data)