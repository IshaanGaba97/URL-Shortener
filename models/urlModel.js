const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortUrlCode: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ type: Number }]
}, { timestamps: true })

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;