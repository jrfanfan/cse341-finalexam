const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API documentation to test API endpoints',
        version: '1.0.0',
        description: 'by Fanfan Jean Renel. <p><a href="/dashboard">Home</a></p>', // Path to the API routes in your Node.js application
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }],
    servers:[
    {url: "http://localhost:8080"
    },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
