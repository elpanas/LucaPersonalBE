const express = require('express');
const { addComment, getAll } = require('../controllers/comments');
const dbware = require("../middleware/dbware");
const router = express.Router();

// CREATE
router.post('/', dbware, async (req, res) => addComment(req, res));
// --------------------------------------------------------------------

// GET
router.get('/', dbware, async (req, res) => getAll(req, res));
// --------------------------------------------------------------------

module.exports = router;
