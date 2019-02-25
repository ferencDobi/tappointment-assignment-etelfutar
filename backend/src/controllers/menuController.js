const logger = require('log4js').getLogger('controller:menu');
const { Op } = require('sequelize');

const MenuToDTO = require('../models/MenuToDTO');

logger.level = process.env.LOG_LEVEL || 'info';

const categories = ['starter', 'soup', 'maindish', 'pizza', 'dessert', 'drink'];

const menuController = (MenuItem) => {
  const get = (request, response) => {
    let { category } = request.query;

    if (!categories.includes(category)) category = '%';

    return MenuItem.findAll({
      where: {
        Category: {
          [Op.like]: category
        }
      }
    }).then((items) => {
      logger.debug(items);
      response.json(MenuToDTO.convertMany(items));
    }).catch((error) => {
      logger.error(error);
      response.status(500).json({ error: 'Váratlan hiba történt.' });
    });
  };

  return { get };
};

module.exports = menuController;
