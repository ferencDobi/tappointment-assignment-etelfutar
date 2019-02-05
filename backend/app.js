const express = require('express');
const morgan = require('morgan');
const path = require('path');
const logger = require('log4js').getLogger('app');

require('dotenv').config();

const port = process.env.PORT || 3001;
const { NODE_ENV } = process.env;

logger.level = NODE_ENV === 'development' ? 'info' : 'off';

const app = express();

app.use(morgan('tiny'));

app.use('/menu', require('./routes/menu'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});
