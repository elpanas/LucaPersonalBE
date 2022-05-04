const { createComment } = require('../middleware/commentsware');

module.exports = {
  addComment: async (req, res) => {
    const result = await createComment(req.body);
    return result ? res.status(201).send() : res.status(400).send();
  },
};
