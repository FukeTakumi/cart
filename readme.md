セットアップ手順

```
$npm install
$npx sequelize-cli db:create
$npx sequelize-cli db:migrate
```

以下をapp.jsなどに貼り付けて
1度だけ実行し、データベースとユーザーを作成してください

```
const db = require('./models/index');

const params = [
  {
    name:"ワイヤレスマウス",
    price:945
  },{
    name:"HDMI切り替え機",
    price:998
  },{
    name:"エアーマット",
    price:1530
  },{
    name:"寝袋",
    price:1680
  },{
    name:"ライトニングケーブル",
    price:625
  },{
    name:"ランタンハンガー",
    price:899
  },{
    name:"Bluetoothスピーカー",
    price:1399
  },{
    name:"二つ折り財布",
    price:1490
  },{
    name:"完全ワイヤレスイヤホン",
    price:1599
  },{
    name:"二つ折り財布",
    price:658
  }
];

//商品のデータベースの作成
params.map((param)=>{
  db.item.create(param);
});


const user_params = {
  name:'山田太郎',
  email:'test@gmail.com',
  password:'testpass'
}

//テスト用のユーザーの追加
db.user.create(user_params);
```