const express = require('express');
const app = express();

const consign = require('consign');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerSpec = require('./swagger');
const database = require("../database/connection");

database;

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

consign()
    .include("./src/routes")
    .then("./src/controllers")
    .into(app);

module.exports = app;

