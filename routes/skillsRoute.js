const express = require('express');
const { getAll } = require('../controllers/skillsController');
const dbware = require("../middleware/dbware");
const router = express.Router();

// GET
router.get('/', dbware, async (req, res) => getAll(req, res));
// --------------------------------------------------------------------

module.exports = router;