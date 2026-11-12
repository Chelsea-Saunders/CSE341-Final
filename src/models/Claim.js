const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item', 
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    proof: {
        type: String, 
        required: true
    },
    status: {
        type: String, 
        enum: ['pending', 'approved', 'rejected', 'withdrawn'],
        default: 'pending'
    },

    reviewNote: {
        type: String,
        default: ''
    },
    reviewedAt: {
        type: Date, 
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Claim', ClaimSchema);