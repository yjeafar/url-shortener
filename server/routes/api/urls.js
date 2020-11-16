const { Router } = require('express');
const mongoose = require('mongoose');

const router = Router()

// Get Posts
router.get('/', (req, res) => {
    res.send('hello');
})

router.put('/shortenUrl', (req, res) => {
    console.log(req.body); 
    res.send(req.body);
})

module.exports = router;
