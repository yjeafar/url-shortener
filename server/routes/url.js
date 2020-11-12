const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
// import { nanoid } from 'nanoid'
const config = require ('config');

const url = require('../models/url')

// @route   POST /api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    // const { longUrl } = req.body;
    // const baseUrl = config.get('baseUrl');

    // if (!validUrl.isUri(baseUrl)) {
    //     return res.status(401).json('Invalid base url');
    // }

    // // Create url code
    // const urlCode = nanoid();

    // if (validUrl.isUri(longUrl)) {
    //     try {
    //         let url = await Url.findOne({ longUrl });

    //         if (url) {
    //             res.json(url);
    //         } else {
    //             const shortUrl = baseUrl + '/' + urlCode;

    //             url = new Url({
    //                 longurl,
    //                 shortUrl,
    //                 urlCode,
    //                 date: new Date()
    //             });

    //             url.save();

    //             res.json(url);
    //         }
    //     } catch(err) {

    //     }
    // }

    return "Hello world"; 
});

module.exports = router;