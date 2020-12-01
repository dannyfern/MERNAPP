const express = require('express');
const router = express.Router();

//GET api/posts TEST ROUTE
router.get('/', (req, res) => res.send('Post route is responding...'));

module.exports = router;