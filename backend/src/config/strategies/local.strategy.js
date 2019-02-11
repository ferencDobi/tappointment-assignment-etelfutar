const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const logger = require('log4js').getLogger('passport:local.strategy');
const { Op } = require('sequelize');

const User = require('../../models/User');

logger.level = process.env.LOG_LEVEL;

const localStrategy = () => {
  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
    logger.info({ email, password });
    User.findOne({
      where: {
        email: {
          [Op.like]: email
        }
      },
      raw: true
    }).then((user) => {
      logger.info(`User ${user.id} found.`);
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          done(null, user.id);
        } else {
          logger.error('Password does not match.');
          done(null, false);
        }
      });
    }).catch((error) => {
      logger.error(error);
      done(null, false);
    });
  }));
};

module.exports = localStrategy;
