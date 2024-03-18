const express = require('express');
const URL = require('../models/urlModel');
const { handleShortCodeURL, handleOriginalURL, handleUrlAnalytics } = require('../controllers/urlController');

const router = express.Router();

router.post('/', handleShortCodeURL);

router.get('/:shortUrlCode', handleOriginalURL);

router.get('/analytics/:shortUrlCode', handleUrlAnalytics)
module.exports = router;