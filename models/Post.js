const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    modified_date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: [
        {
        type: [String],
        required: true
        }
    ],
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ]
});

module.exports = Post = mongoose.model('post', PostSchema);