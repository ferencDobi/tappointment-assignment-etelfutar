const express = require('express');
const morgan = require('morgan');
const path = require('path');
const logger = require('log4js').getLogger('app');
const mysql = require('mysql');

const connection = mysql.createConnection(require('./config/dbsettings'));

connection.query('SELECT * FROM MenuItems;', (error, rows) => {
  if (error) {
    logger.error(error.message);
  } else {
    logger.warn(rows[0]);
  }
});

connection.end();

const port = process.env.PORT || 3001;
const { NODE_ENV } = process.env;

logger.level = NODE_ENV === 'development' ? 'info' : 'off';

const app = express();

app.use(morgan('tiny'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});
