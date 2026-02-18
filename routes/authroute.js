// routes/auth.routes.js
const express = require('express');
const authController = require('../controllers/authController');
const dbware = require("../middleware/dbware");
const router = express.Router();

router.post("/", dbware, authController.login);

module.exports = router;