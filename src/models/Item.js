// const mongoose = require('mongoose');

// const ItemSchema = new mongoose.Schema({
//     title: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'Title', 
//         required: true,
//     },
//     description: {
//         type: String, 
//         required: true,
//     }, 
//     category: {
//         type: String, 
//         enum: ['electronics', 'misc', 'clothing', 'keys'],
//         default: 'misc',
//     }, 
//     location: {
//         type: String, 
//         required: true,
//         trim: true,
//     }, 
//     eventDate: {
//         type: Date,
//         default: Date.now
//     },
//     status: {
//         type: String, 
//         enum: ['open', 'closed'], 
//         default: 'open',
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: 'User', 
//         required: true
//     },
//     createdAt: {
//         type: Date, 
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Item', ItemSchema);