商品のデータベース作成

```
const params = [
  {
    item_name:"ワイヤレスマウス",
    price:945
  },{
    item_name:"HDMI切り替え機",
    price:998
  },{
    item_name:"エアーマット",
    price:1530
  },{
    item_name:"寝袋",
    price:1680
  },{
    item_name:"ライトニングケーブル",
    price:625
  },{
    item_name:"ランタンハンガー",
    price:899
  },{
    item_name:"Bluetoothスピーカー",
    price:1399
  },{
    item_name:"二つ折り財布",
    price:1490
  },{
    item_name:"完全ワイヤレスイヤホン",
    price:1599
  },{
    item_name:"二つ折り財布",
    price:658
  }
];
```

params.map((param)=>{
  db.item.create(param);
});