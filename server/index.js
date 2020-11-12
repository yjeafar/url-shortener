const express = require('express');
const dbConnect = require('./config/db');

const app = express();

// Connect to database
dbConnect();

app.use(express.json( { extended: false} )); // Allows api to accept json

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));