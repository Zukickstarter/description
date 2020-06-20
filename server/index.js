const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('Hello from Express!'));

// https://meet.google.com/zqo-saot-zgd?authuser=1
app.get('/api/description/:id', (req, res) => {
  res.send(req.params);
});

app.listen(port, () => console.log(`Description app listening at http://localhost:${port}`));