const MenuItem = (connection, DataTypes) => connection.define('MenuItem', {
  id: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  Category: {
    type: DataTypes.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  Description: {
    type: DataTypes.STRING(255),
    defaultValue: ''
  },
  Name: {
    type: DataTypes.STRING(120),
    allowNull: false,
    defaultValue: ''
  },
  Price: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  Spicy: {
    type: DataTypes.SMALLINT(1),
    defaultValue: null
  },
  Vegatarian: {
    type: DataTypes.SMALLINT(1),
    defaultValue: null
  }
}, { timestamps: false });

module.exports = MenuItem;
