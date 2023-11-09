const router = require('express').Router();
const path = require('path')

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  res.json(notes);
  return notes;
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