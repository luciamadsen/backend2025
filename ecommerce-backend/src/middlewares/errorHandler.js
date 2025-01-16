const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  
  const errorResponse = {
    message: err.message || 'Algo salió mal',
    stack: err.stack,
  };

  if (process.env.NODE_ENV === 'production') {
    delete errorResponse.stack;
  }

  res.status(err.statusCode || 500).json(errorResponse);
};

module.exports = { errorHandler };
