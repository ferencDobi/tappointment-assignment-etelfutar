const Sequelize = require('sequelize');
const logger = require('log4js').getLogger('database');

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  LOG_LEVEL
} = process.env;

logger.level = LOG_LEVEL;

const connection = new Sequelize(
  `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:3306/${DB_NAME}`,
  {
    operatorsAliases: false,
    logging: logger.debug.bind(logger)
  }
);

connection
  .sync()
  .then(() => logger.info('Database connection established successfully.'))
  .catch(error => logger.error('Unable to connect to the database:', error));

module.exports = connection;
