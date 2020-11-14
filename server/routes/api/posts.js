const { Router } = require('express');
const mongoose = require('mongoose');

const router = Router()

// Get Posts
router.get('/', (req, res) => {
    res.send('hello');
})

module.exports = router;
