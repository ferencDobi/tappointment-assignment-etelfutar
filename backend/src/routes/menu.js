const express = require('express');
const logger = require('log4js').getLogger('router:menu');

const menuController = require('../controllers/menuController');

logger.level = process.env.LOG_LEVEL;

const menuRouter = (MenuItem) => {
  const controller = menuController(MenuItem);
  const router = express.Router();

  router.route('/').get(controller.get);

  return router;
};

module.exports = menuRouter;
