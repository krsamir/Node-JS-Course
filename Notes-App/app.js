
const yargs = require('yargs');
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')
// add, remove, read, list
//create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    // Passing Configuration
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//listing the notes
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler(){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


yargs.parse()