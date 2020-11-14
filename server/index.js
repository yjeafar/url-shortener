const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');

const app = express();

// Connect to database
dbConnect();

app.use(express.json( { extended: false} )); // Allows api to accept json
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));