const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'lostAndFound'
        });
        console.log('Connected to database: lostAndFound')
    } catch (err) {
        console.error('Mongoose connection error:', err);
        process.exit(1);
    }
};

module.exports = connectMongoose;