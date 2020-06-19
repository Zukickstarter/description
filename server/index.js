const express = require('express');
const path = require('path');
var morgan = require('morgan');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));


app.get('/', (req, res) => res.send('Hello from Express!'));

app.listen(port, () => console.log(`Description app listening at http://localhost:${port}`));