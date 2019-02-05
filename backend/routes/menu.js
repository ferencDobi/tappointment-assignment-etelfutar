const express = require('express');
const logger = require('log4js').getLogger('menu');

const pool = require('../utilities/connection');

const router = express.Router();

const categories = ['starter', 'soup', 'maindish', 'pizza', 'dessert', 'drink'];

router.route('/').get((request, response) => {
  let { category } = request.query;

  if (!categories.includes(category)) category = '%';

  pool.query(
    `SELECT * FROM MenuItems 
    WHERE category LIKE ?`, category,
    (error, results) => {
      if (error) {
        logger.error(error);
      } else {
        logger.warn(results);
        response.send(results);
      }
    }
  );
});

module.exports = router;
