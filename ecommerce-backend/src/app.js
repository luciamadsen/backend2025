const express = require('express');
const cors = require('cors');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'Documentación de la API para el proyecto final',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;

