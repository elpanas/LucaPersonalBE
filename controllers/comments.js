const { createComment, getAllComments } = require('../middleware/commentsware');

module.exports = {
  addComment: async (req, res) => {
    const result = await createComment(req.body);
    return result ? res.status(201).send() : res.status(400).send();
  },

  getAll: async (req, res) => {
    const result = await getAllComments();    
    return result ? res.json(result) : res.status(404).send();
  }
};
