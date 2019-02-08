const Sequelize = require('sequelize');

const connection = require('../utilities/connection');

const MenuItem = connection.define('MenuItem', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  Category: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  Description: {
    type: Sequelize.STRING(255),
    defaultValue: ''
  },
  Name: {
    type: Sequelize.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  Price: {
    type: Sequelize.INTEGER(4),
    allowNull: false
  },
  Spicy: {
    type: Sequelize.SMALLINT(1),
    defaultValue: null
  },
  Vegatarian: {
    type: Sequelize.SMALLINT(1),
    defaultValue: null
  }
}, { timestamps: false });

module.exports = MenuItem;
