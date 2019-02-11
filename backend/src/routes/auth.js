const express = require('express');
const passport = require('passport');
const logger = require('log4js').getLogger('router:auth');

const User = require('../models/User');

logger.level = process.env.LOG_LEVEL;

const router = express.Router();

router.route('/login').post(passport.authenticate('local', { session: true }),
  (request, response) => {
    logger.info(request.user);
    logger.info(request.session);
    response.status(204).json(request.user);
  });

router.route('/register').post((request, response) => {
  const { email, password } = request.body;

  User.create({ email, password }).then((user) => {
    logger.info(`User created with id ${user.id}.`);
    request.login(user.id, () => {
      logger.info(`User ${user.id} was logged in.`);
      response.json({ id: user.id });
    });
  }).catch((error) => {
    logger.error(error);
    response.status(400).json({ error: 'E-mail cím foglalt.' });
  });
});

module.exports = router;
