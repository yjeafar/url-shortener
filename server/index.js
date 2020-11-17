const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');

const app = express();

// Connect to database
dbConnect();

app.use(express.json( { extended: false} )); // Allows api to accept json
app.use(cors());

const urls = require('./routes/urls');

app.use('/api/urls', urls);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));