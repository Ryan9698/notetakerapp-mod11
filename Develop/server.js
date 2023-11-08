const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(express.json());
let notes = [];

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.use(express.static('public'));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
  });

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter((note) => note.id !== id);
    res.json({ message: 'Note deleted' });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

