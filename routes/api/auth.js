const express = require('express');
const router = express.Router();

//GET api/auth TEST ROUTE
router.get('/', (req, res) => res.send('Auth route is responding...'));

module.exports = router;