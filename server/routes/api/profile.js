const express = require('express');
const router = express.Router();

//GET api/profile TEST ROUTE
router.get('/', (req, res) => res.send('Profile route is responding...'));

module.exports = router;