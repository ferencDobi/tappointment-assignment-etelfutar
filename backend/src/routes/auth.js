const express = require('express');
const passport = require('passport');
const logger = require('log4js').getLogger('router:auth');

const User = require('../models/User');
const controller = require('../controllers/authController')(User);

logger.level = process.env.LOG_LEVEL;

const router = express.Router();

router.route('/login').post(
  passport.authenticate('local', { session: true }),
  controller.login
);

router.route('/logout').get(controller.logout);

router.route('/register').post(controller.register);

module.exports = router;
