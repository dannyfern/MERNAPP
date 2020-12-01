const express = require('express');
const router = express.Router();

//GET api/users TEST ROUTE
router.get('/', (req, res) => res.send('User route is responding...'));

module.exports = router;