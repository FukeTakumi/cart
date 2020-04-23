'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('carts','item_id', {
      allowNull:false,
      type:Sequelize.INTEGER,
      references:{
        model:'items',
        key:'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('carts','item_id');
  }
};
