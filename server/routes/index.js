const { Router } = require('express');
const router = Router()

const Url = require('../models/url')

// Redirects to long/original url

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        console.log(url);

        if (url) {
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json('No url found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Server error');
    }
});


module.exports = router;