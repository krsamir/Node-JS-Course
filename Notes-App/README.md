# Notes App
## Usage:
### `npm install`
## Functionalities
***
* add
* remove
* list
* read

### Syntax
***
* add
> node app.js add --title="Title Here" --body="Body Here"

* remove
> node app.js remove --title="Title Here"
* list
> node app.js list
* read
>node app.js read --title="Title Here"
***
>## node app.js --help
app.js [command]<br>

Commands:<br>
  app.js add     Adds a new note<br>
  app.js remove  Removes a note<br>
  app.js list    Lists all notes<br>
  app.js read    Reading a note

Options:<br>
  --help     Show help                                                [boolean]<br> 
  --version  Show version number                                       [boolean]<br> 
***
### Screenshot:
![Images](https://github.com/samirbsh/Nodejs-Course/blob/master/Notes-App/screenshot/Output1.png)
***
### Debugging:
Steps:<br>
* add `debugger` at the point where you want debug.
* run the code through console $> `node inspect app.js add --title="Your title here" --body="Your body here"`.
For Windows if error persists.
* run the code through console $> `node --inspect-brk app.js add --title="Your title here" --body="Your body here"`