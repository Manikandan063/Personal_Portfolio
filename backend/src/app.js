const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = require('./config/env');

const app = express();

// Security middlewares
app.use(helmet());

// Flexible and secure CORS configuration
const allowedOrigins = [
  env.corsOrigin,
  env.frontendUrl,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || env.nodeEnv === 'development') {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS policy'));
  },
  credentials: true
}));

// Parsers and logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (env.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Mount modular API routes
app.use('/api', require('./routes'));

// Centralized error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errors: err.errors || []
  });
});

module.exports = app;
