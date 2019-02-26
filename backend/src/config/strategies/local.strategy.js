const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const logger = require('log4js').getLogger('passport:local.strategy');
const { Op } = require('sequelize');

const { AuthenticationException } = require('../../utilities/exceptions');

logger.level = process.env.LOG_LEVEL;

const localStrategy = (User) => {
  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: {
          email: {
            [Op.like]: email
          }
        },
        raw: true
      });

      if (!user) throw new AuthenticationException('User not found.');

      logger.info(`User ${user.id} found.`);
      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new AuthenticationException('Password does not match.');

      done(null, user);
    } catch (error) {
      logger.error(`${error}`);
      done(null, false);
    }
  }));
};

module.exports = localStrategy;
