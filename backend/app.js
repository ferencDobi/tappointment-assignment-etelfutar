const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const logger = require('log4js').getLogger('app');

require('dotenv').config();

const port = process.env.PORT || 3001;
const { LOG_LEVEL } = process.env;

logger.level = LOG_LEVEL;

const app = express();

app.use(morgan('tiny'));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/menu', require('./routes/menu'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}...`);
});
