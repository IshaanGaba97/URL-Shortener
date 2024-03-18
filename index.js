const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
require('./db/connectDB');
const URL = require('./models/urlModel');
const urlRouter = require('./routes/urlRoutes');
const cors = require('cors');


const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/url', urlRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});