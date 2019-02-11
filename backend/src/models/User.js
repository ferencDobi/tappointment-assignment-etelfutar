/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

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


User.beforeCreate(user => bcrypt.hash(user.password, 10).then(hash => user.password = hash));


module.exports = User;
