const URL = require('../models/urlModel');
const shortid = require('shortid');

const handleShortCodeURL = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) res.status(400).send("URL cannot be empty");

        const url = new URL({
            shortUrlCode: shortid.generate(),
            originalUrl: originalUrl
        })
        await url.save();
        res.send(url);
    } catch (error) {
        res.status(400).send(error);
    }
}

const handleOriginalURL = async (req, res) => {
    try {
        const { shortUrlCode } = req.params;

        if (!shortUrlCode) return res.status(400).send("URL cannot be empty");
        const url = await URL.findOne({ shortUrlCode });
        if (url) {
            url.visitHistory.push(Date.now());
            await url.save();
            return res.redirect(url.originalUrl)
        } else {
            return res.status(404).send("URL not found");
        }
    } catch (error) {
        res.status(404).send(error);
    }
}

const handleUrlAnalytics = async (req, res) => {
    try {
        const { shortUrlCode } = req.params;

        if (!shortUrlCode) return res.status(400).send("URL cannot be empty");

        const url = await URL.findOne({ shortUrlCode });
        if (url) {
            return res.json({ count: url.visitHistory.length, url });
        }
    } catch (error) {
        return res.status(404).send(error);
    }
}


module.exports = { handleShortCodeURL, handleOriginalURL, handleUrlAnalytics };