const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Lost and Found API'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

//auth endpoints

// post endpoings

//comment endpoings

// report endpoints
 
// admin endpoints

// request/response schemas

// error codes
    // 200 success
    // 403 forbidden
    // 404 not found
    // 500 server error