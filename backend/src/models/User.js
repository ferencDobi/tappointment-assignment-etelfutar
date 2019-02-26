const bcrypt = require('bcrypt');

const User = (connection, DataTypes) => {
  const model = connection.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });

  model.beforeCreate(user => bcrypt.hash(
    user.password, 10
  ).then((hash) => {
    // eslint-disable-next-line no-param-reassign
    user.password = hash;
  }));

  return model;
};

module.exports = User;
