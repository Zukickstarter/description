const mongoose = require('mongoose');
const db = require('./index.js');

const descriptionSchema = new mongoose.Schema({
  id: Number,
  story: {
    text: String,
    images: [{
      src: String,
      caption: String
    }]
  },
  risks: String,
});

const Desc = mongoose.model('Desc', descriptionSchema);

module.exports = Desc;