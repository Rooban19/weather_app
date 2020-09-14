const { require } = require("yargs")

const fs = require('fs')
const book = {
    title: 'You can Win',
    author: 'Shiv khera'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync
console.log(bookJSON)