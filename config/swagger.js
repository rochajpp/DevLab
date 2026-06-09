const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node&Sequelize',
            version: '1.0.0',
            description: "Documentação API",
        },

        servers: [
            {
                url: 'http://localhost:8080',
            }
        ]
    },

    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;



