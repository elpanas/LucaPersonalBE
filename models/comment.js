const mongoose = require('mongoose');

const { Schema } = mongoose;

// ----- USERS -----
const commentSchema = Schema({
  name: { type: String, required: true },
  mail: { type: String, default: '' },
  content: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
});

module.exports.Comment = mongoose.model('comment', commentSchema);
// --------------------------------------------------------------------
