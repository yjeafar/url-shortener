const express = require('express');

const app = express();

// Connect to database


app.use(express.json( { extended: false} )); // Allows api to accept json

// Define Routes
// app.use('/', require('./routes/index'));
// app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));