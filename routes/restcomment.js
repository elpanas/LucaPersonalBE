const express = require('express');
const { addComment, getAll } = require('../controllers/comments');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => addComment(req, res));
// --------------------------------------------------------------------

// GET
router.get('/', async (req, res) => getAll(req, res));
// --------------------------------------------------------------------

module.exports = router;
