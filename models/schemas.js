const mongoose = require('mongoose'); // MongoDB framework
const Schema = mongoose.Schema;

// ----- USERS -----
const commentSchema = Schema({
    name: { type: String, required: true },
    mail: { type: String, default: '' },
    content: { type: String, default: '' }
});

const Comment = mongoose.model('comment', commentSchema);
// --------------------------------------------------------------------

exports.Comment = Comment;