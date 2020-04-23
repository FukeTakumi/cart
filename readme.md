商品のデータベース作成

```
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

params.map((param)=>{
  db.item.create(param);
});

```