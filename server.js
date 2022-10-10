const express = require('express');
const path = require('path');
const api = require('./routes/notes.js')

const app = express();
const PORT = process.env.port || 3001;

app.use(express.static('public'));
app.use(express.json());

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.use('/', api);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
