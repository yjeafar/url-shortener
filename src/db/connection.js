const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/urlShortener';
const db = monk(connectionString);
 
module.exports = db;