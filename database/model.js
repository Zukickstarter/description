const mongoose = require('mongoose');
const db = require('./index.js');

const descriptionSchema = new mongoose.Schema({
  id: Number,
  story: {
    textTop: String,
    imageMiddle: String,
    imageMiddleCaption: String,
    textBottom: String
  },
  risks: String,
});

const Desc = mongoose.model('Desc', descriptionSchema);

module.exports = Desc;