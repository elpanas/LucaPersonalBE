const Comment = require('../models/comment');

// CREATE USER
module.exports = {
  createComment: async (data) => Comment.create(data),

  getAllComments: async () => {
  const comments = await Comment.find().sort({ createdAt: -1 }).lean();

  return (comments.length > 0) ? comments : null;
  },
};