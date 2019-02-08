const express = require('express');
const logger = require('log4js').getLogger('menu');
const { Op } = require('sequelize');

const MenuItem = require('../models/MenuItem');
const MenuToDTO = require('../models/MenuToDTO');

logger.level = process.env.LOG_LEVEL;

const router = express.Router();

const categories = ['starter', 'soup', 'maindish', 'pizza', 'dessert', 'drink'];

router.route('/').get((request, response) => {
  let { category } = request.query;

  if (!categories.includes(category)) category = '%';

  MenuItem.findAll({
    where: {
      Category: {
        [Op.like]: category
      }
    }
  }).then((items) => {
    response.json(MenuToDTO.convertMany(items));
    logger.info(items);
  }).catch((error) => {
    response.json({ error: 'Something went wrong.' });
    logger.error(error);
  });
});

module.exports = router;
