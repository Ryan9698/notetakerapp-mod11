const express = require('express');
const homeRoutes = require('./routes/homeRoutes')
const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

let notes = [];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

