const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Express API Documentation',
        version: '1.0.0',
        description: 'API documentation for Users, Posts, and Comments',
      },
      servers: [
        {
          url: 'http://localhost:5000',
          description: 'Local server',
        },
      ],
    },
    apis: ['./routes/*.js'], // Points to route files with Swagger comments
  };

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.listen(5000, () => console.log('Server running on port 5000'));


