const router = require('express').Router();
const path = require('path');
const store = require('../db/store');

let notes = [];
router.get('/notes', (req, res) => {

    store
        .getNotes()
        .then((notes) => {
            res.json(notes);
        })
        .catch((err) => res.status(500).json(err)); 

});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
  });

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter((note) => note.id !== id);
    res.json({ message: 'Note deleted' });
  });

module.exports = router