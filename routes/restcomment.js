const express = require('express');
const { createComment } = require('../middleware/commentsware');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  const result = await createComment(req.body);
  return result ? res.status(201).send() : res.status(400).send();
});
// --------------------------------------------------------------------

module.exports = router;
