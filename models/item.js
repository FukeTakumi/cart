'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    item_name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};