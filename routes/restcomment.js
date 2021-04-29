const express = require('express'),
   { createComment } = require('../middleware/commentsware');
const router = express.Router();

// CREATE
router.post('/', (req, res) => {
    createComment(req.body)
        .then(result => (result) ? res.status(200).send() : res.status(400).send())
        .catch(err => res.status(404).send(err))
});
// --------------------------------------------------------------------

module.exports = router;