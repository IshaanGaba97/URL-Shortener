const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",

    info: {
        title: "URL Shortener API",
        version: "1.0.0",
        description: "URL Shortener API",
    },
};

const options = {
    swaggerDefinition,
    apis: ["./routes/urlRoutes.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;