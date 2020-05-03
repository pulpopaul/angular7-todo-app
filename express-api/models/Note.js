const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  author: String,
  title: String,
  status: String
}, {
    timestamps: true
  });

module.exports = mongoose.model('Note', NoteSchema);