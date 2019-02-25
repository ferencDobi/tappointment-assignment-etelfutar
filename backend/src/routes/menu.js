const express = require('express');
const logger = require('log4js').getLogger('router:menu');
const Sequelize = require('sequelize');
const connection = require('../utilities/connection');

const MenuItem = require('../models/MenuItem')(connection, Sequelize);
const controller = require('../controllers/menuController')(MenuItem);

logger.level = process.env.LOG_LEVEL;

const router = express.Router();

router.route('/').get(controller.get);

module.exports = router;
