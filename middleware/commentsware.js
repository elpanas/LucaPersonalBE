const { Comment } = require('../models/schemas');

// CREATE USER
module.exports = {
  createComment: async (data) => Comment.create(data),

  getAllComments: async () => {
  const comments = await Comment.find()
    .populate("user", "email")
    .sort({ createdAt: -1 });

  return (comments.length > 0) ? comments : null;
  },
};