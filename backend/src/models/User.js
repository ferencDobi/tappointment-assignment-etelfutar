const Sequelize = require('sequelize');

const connection = require('../utilities/connection');

const User = connection.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});

module.exports = User;
