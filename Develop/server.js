const express = require('express');
const path = require('path');
const fs = require('fs');
const homeRoutes = require('./routes/homeRoutes')
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

let notes = [];

// app.get('/api/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
//   res.json(notes);
//   return notes;
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// app.get('/api/notes', (req, res) => {
//     res.json(notes);
//     return notes;
//   });


app.use(express.static('public'));

// app.post('/api/notes', (req, res) => {
//     const newNote = req.body;
//     notes.push(newNote);
//     res.json(newNote);
//   });

// app.delete('/api/notes/:id', (req, res) => {
//     const { id } = req.params;
//     notes = notes.filter((note) => note.id !== id);
//     res.json({ message: 'Note deleted' });
//   });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

