const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Desc = require('../database/model.js');

const app = express();
const port = 3006;

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('tiny'));

// returns all description data
app.get('/api/description', (req, res) => {
  Desc.find((err, desc) => {
    res.send(desc);
  });
});

// returns description at id
app.get('/api/description/:id', (req, res) => {
  Desc.find({ id: req.params.id}, (err, desc) => {
    res.send(desc);
  });
});

app.listen(port, () => console.log(`Description app listening at http://localhost:${port}`));