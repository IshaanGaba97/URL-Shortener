const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
require('./db/connectDB');
const URL = require('./models/urlModel');
const urlRouter = require('./routes/urlRoutes');
const cors = require('cors');

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(morgan('dev'))

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/url', urlRouter);
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});