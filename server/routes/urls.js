const { Router } = require('express');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');
const validUrl = require('valid-url');
const config = require ('config');
const router = Router();
const Url = require('../models/url');

// get all urls in backend
router.get('/', (req, res) => {
    res.send('hello');
})

// adds shortened url to database 
router.put('/shortenUrl', async (req, res) => {

    const originalUrl = req.body.url;

    // base url from config/defualt.json base url section
    const baseUrl = config.get('baseUrl');

    let urlResponse = { urlCode: '',  originalUrl: '', shortUrl: ''};

    if (!validUrl.isUri(baseUrl)) {

        // If the url is invalid, returns a 400 bad request error
        return res.status(400).json('Invalid base url');
    }

    if (validUrl.isUri(originalUrl)) {
        try {
            // Find url in mongoose db
            let url = await Url.findOne({ originalUrl });

            if (url) {
                // If in db, return url with database fields as json, 200 OK message
                urlResponse.originalUrl = url.originalUrl;

                urlResponse.shortUrl = url.shortUrl;

                urlResponse.urlCode = url.urlCode;

                res.json(urlResponse);

            } else {
                // Creates unique url code
                 let urlCode;

                 // Makes sure that unqiue id is not in the database
                 do {
                    urlCode = nanoid(8);
                 } while (await Url.exists({ urlCode: urlCode }));
                
                // If not in db, create a new short url which is domain name + / + random nano id 
                const shortUrl =  baseUrl + '/' + urlCode;

                // Create new mongoose object
                url = new Url({
                    originalUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                // Mongoose .save() returns promise so need await. This saves the row to the database
                await url.save();

                urlResponse.originalUrl = url.originalUrl;

                urlResponse.shortUrl = url.shortUrl;

                urlResponse.urlCode = url.urlCode;

                // Returns the newly created object
                res.json(urlResponse);
            }
            
        } catch (err) {
            // If for any reason the server errors out, return error message
            console.log(err);
            res.status(500).json('Server error')
        }
    } else {
        // 400 bad request error if long url is not valid
        res.status(400).json('Invalid long url')
    }
})

module.exports = router;
