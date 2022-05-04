const express = require('express');
const { addComment } = require('../controllers/comments');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => addComment(req, res));
// --------------------------------------------------------------------

module.exports = router;
