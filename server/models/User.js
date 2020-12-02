const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your Username'],
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide your Email'],
    },
        password: {
            type: String,
            required: [true, 'Please provide your Password']
    },
        avatar: {
            type:String
        }
});

module.exports = User = mongoose.model('user', UserSchema);