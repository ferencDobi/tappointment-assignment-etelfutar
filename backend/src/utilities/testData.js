const chance = require('chance').Chance();

const generateMenuItem = () => ({
  id: chance.natural(),
  Category: chance.pickone(['starter', 'soup', 'maindish', 'pizza', 'dessert', 'drink']),
  Description: chance.sentence(),
  Name: chance.capitalize(chance.word()),
  Price: chance.natural({ min: 1, max: 9999 }),
  Spicy: chance.natural({ min: 0, max: 1 }),
  Vegatarian: chance.natural({ min: 0, max: 1 })
});

const menuItems = Array.from({ length: 50 }, generateMenuItem);

module.exports = menuItems;
