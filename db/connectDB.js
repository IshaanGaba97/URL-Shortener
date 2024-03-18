const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))