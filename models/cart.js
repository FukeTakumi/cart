'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    user_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    item_count: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  cart.associate = function(models) {
    cart.belongsTo(models.item);
    cart.belongsTo(models.user);
  };
  return cart;
};