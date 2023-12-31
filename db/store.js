const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const generateID = () => {
    return uuidv4();
};


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    } 

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }
   
    addNote(note) {
        note.id = uuidv4();
        return this.getNotes()
            .then((notes) => {
                const updatedNotes = [...notes, note];
                return this.write(updatedNotes);
            })
            .then(() => note);
    }

    removeNote(id) {
        return this.getNotes()
            .then((notes) => {
                const updatedNotes = notes.filter((note) => note.id !== id);
                return this.write(updatedNotes);
            });
    }
};

module.exports = new Store();