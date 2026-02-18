const express = require('express');
const { getAll } = require('../controllers/skillsController');

const router = express.Router();

// GET
router.get('/', async (req, res) => getAll(req, res));
// --------------------------------------------------------------------

module.exports = router;