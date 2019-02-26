const express = require('express');
const passport = require('passport');
const logger = require('log4js').getLogger('router:auth');

const authController = require('../controllers/authController');

logger.level = process.env.LOG_LEVEL;

const authRouter = (User) => {
  const controller = authController(User);
  const router = express.Router();

  router.route('/login').post(
    passport.authenticate('local', { session: true }),
    controller.login
  );

  router.route('/logout').get(controller.logout);

  router.route('/register').post(controller.register);

  return router;
};

module.exports = authRouter;
