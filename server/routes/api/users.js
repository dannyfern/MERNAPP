const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

//USER ROUTE FOR REGISTERING USER - POST REQUEST
router.post('/', 
[
    check('name', 'name is required').not().isEmpty(),
    check('email', 'A Valid Email Address is Necessary').isEmail(),
    check('password', '6 or more Characters').isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        
        if(user) {
            res.status(400).json({ errors: [{ msg: 'User email already exists' }]});
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });


        user = new User({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt); 

        await user.save();

        res.send('Registration Successful...');
        } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;