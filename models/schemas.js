const mongoose = require('mongoose');

const { Schema } = mongoose;

// ----- USERS -----
const commentSchema = Schema({
  name: { type: String, required: true },
  mail: { type: String, default: '' },
  content: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
});

const Comment = mongoose.model('comment', commentSchema);
// --------------------------------------------------------------------

module.exports.Comment = Comment;
