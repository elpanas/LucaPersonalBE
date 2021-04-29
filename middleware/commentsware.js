const { Comment } = require('../models/schemas');

// CREATE USER
async function createComment(data) {
    return await Comment.create(data);
}
// --------------------------------------------------------------------
module.exports.createComment = createComment;