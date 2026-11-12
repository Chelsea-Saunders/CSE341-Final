/*const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }, 
    post: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true
    }, 
    content: {
        type: String,
        required: true,
        trim: true
    },
    isEdited : {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Comment', CommentSchema);*/
