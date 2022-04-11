const { Comment } = require('../models/schemas');

// CREATE USER
module.exports = {
  createComment: async (data) => Comment.create(data),
};
