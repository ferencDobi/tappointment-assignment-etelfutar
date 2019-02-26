const passport = require('passport');
const logger = require('log4js').getLogger('passport');

const localStrategy = require('./strategies/local.strategy');

logger.level = process.env.LOG_LEVEL;

const config = (app, User) => {
  localStrategy(User);
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    logger.info(`Serializing User ${user.id}`);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    logger.info(`Deserializing User ${id}`);
    User.findByPk(id)
      .then(user => done(null, user))
      .catch(error => logger.error(error));
  });
};

module.exports = config;
