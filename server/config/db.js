const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Mongoose method returns promise, so need async
const dbConnect = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}; 

module.exports = dbConnect;