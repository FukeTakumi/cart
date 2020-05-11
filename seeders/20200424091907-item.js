'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
      {
        name:"耳栓",
        price:30,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"掃除機",
        price:1200,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"キャベツ",
        price:90,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"ゲーミングpc",
        price:150000,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"なべしき",
        price:100,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"皿",
        price:300,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"本棚",
        price:12500,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"椅子",
        price:3000,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"マスク",
        price:590000,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name:"トイレットペーパー",
        price:600000,
        item_amount:10,
        created_at: new Date(),
        updated_at: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
