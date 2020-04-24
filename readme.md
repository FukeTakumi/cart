セットアップ手順

```
git clone https://github.com/FukeTakumi/cart.git
cd cart
npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start
```