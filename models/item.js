'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  item.associate = function(models) {
    item.hasMany(models.cart);
  };
  return item;
};