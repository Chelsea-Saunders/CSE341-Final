require('dotenv').config();

const app = require('./app');
const connectMongoose = require('./db/mongoose');

const PORT = process.env.PORT || 3000;

connectMongoose()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to MongoDB and listening on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error('Mongoose connection error:', err);
        process.exit(1);
    });