 const fs = require('fs')
 const chalk = require('chalk')

 const addNote = (title, body) => {
     const notes = loadNote()
     const duplicateNotes = notes.filter((note) => note.title === title)

     console.log("DUPPPP", duplicateNotes)
     if (duplicateNotes.length === 0) {
         notes.push({
             title: title,
             body: body
         })
         saveNotes(notes)
         console.log("New note is created")
     } else {
         console.log("Note title is aldready taken")
     }
 }

 const saveNotes = (notes) => {
     const noteJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json', noteJSON)

 }

 const loadNote = () => {
     try {
         const dataBuffer = fs.readFileSync('notes.json')
         const dataJSON = dataBuffer.toString()
         const data = JSON.parse(dataJSON)
         return data

     } catch (e) {
         return []
     }
 }

 const removeNote = (title) => {
     const notes = loadNote()
     const keepNotes = notes.filter((note) => note.title !== title)
     if (notes.length > keepNotes.length) {
         console.log(chalk.green.bold("Note removed"))
         saveNotes(keepNotes)
     } else {
         console.log(chalk.red.bold("Note not found!"))
         saveNotes(keepNotes)
     }


 }
 debugger
 const listNotes = () => {
     const notes = loadNote()
     console.log(chalk.bgBlue.white("YOUR NOTES"))
     const notesTitle = notes.filter((note) => console.log(note.title))
 }
 const readNote = (title) => {
     const notes = loadNote()
     const read = notes.find((note) => note.title === title)
     console.log(read)

     if (read) {
         console.log(chalk.italic.bold(read.title))
         console.log(read.body)
     } else {
         console.log("Note is not found")
     }
 }
 module.exports = {
     addNote: addNote,
     removeNote: removeNote,
     listNotes: listNotes,
     readNote: readNote
 }