const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    reason: {
        type: String, 
        required: true, 
        trim: true
    },
    targetType: {
        type: String, 
        enum: ['post', 'comment'],
        required: true
    }, 
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        refPath: 'targetType'
    },
    status: {
        type: STring, 
        enum: ['lost', 'found', 'returned'],
        default: 'found'
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Report', ReportSchema);