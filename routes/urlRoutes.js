const express = require('express');
const URL = require('../models/urlModel');
const { handleShortCodeURL, handleOriginalURL, handleUrlAnalytics } = require('../controllers/urlController');

const router = express.Router();

/**
     * @openapi
     * '/url':
     *  post:
     *     tags:
     *     - Create a short URL
     *     summary: Create a short url 
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - originalUrl
     *            properties:
     *              originalUrl:
     *                type: string
     *                default: https://ishaangaba.netlify.app 
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post('/', handleShortCodeURL);


/**
     * @openapi
     * '/url/{shortUrlCode}':
     *  get:
     *     tags:
     *     - Short URL Controller
     *     summary: Enter shortened URL
     *     content:
     *        text/html:
     *     parameters:
     *      - name: shortUrlCode
     *        in: path
     *        description: Enter shortened URL
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get('/:shortUrlCode', handleOriginalURL);

router.get('/analytics/:shortUrlCode', handleUrlAnalytics)
module.exports = router;