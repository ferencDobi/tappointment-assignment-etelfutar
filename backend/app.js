const express = require('express');
const morgan = require('morgan');
const path = require('path');
const logger = require('log4js').getLogger('app');

const { PORT, NODE_ENV } = process.env;

logger.level = NODE_ENV === 'development' ? 'info' : 'off';

const app = express();

app.use(morgan('tiny'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}...`);
});
