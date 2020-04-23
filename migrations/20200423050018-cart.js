'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('carts','user_id', {
      allowNull:false,
      type:Sequelize.INTEGER,
      references:{
        model:'users',
        key:'id'
      },
      onUpdate:'cascade',
      onDelete:'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('carts','user_id');
  }
};
