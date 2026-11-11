/*const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }, 
    title: {
        type: String, 
        required: true, 
        trim: true
    },
    content: {
        type: String, 
        required: true,
        trim: true
    },
    category: {
        type: String, 
        enum: ['jewelry', 'household', 'pet', 'clothing', 'other'],
        default: 'other'
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    status: {
        type: String,
        enum: ['lost', 'found', 'returned'],
        default: 'lost'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);*/
