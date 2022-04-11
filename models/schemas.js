const mongoose = require('mongoose');
// MongoDB framework
const { Schema } = mongoose;

// ----- USERS -----
const commentSchema = Schema({
  name: { type: String, required: true },
  mail: { type: String, default: '' },
  content: { type: String, required: true },
});

const Comment = mongoose.model('comment', commentSchema);
// --------------------------------------------------------------------

exports.Comment = Comment;
