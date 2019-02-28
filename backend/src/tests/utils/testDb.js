const Sequelize = require('sequelize');
const logger = require('log4js').getLogger('test:database');

logger.level = process.env.LOG_LEVEL;

const connection = new Sequelize(
  'sqlite://:memory:',
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
