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
    store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });

router.delete('/notes/:id', (req, res) => {
    store
      .removeNote(res.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router