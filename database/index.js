const mongoose = require('mongoose');

// unsure on this url at the moment...
const mongoDB = 'mongodb://localhost/description';
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {console.log('Database Connected!')})

module.exports = db;