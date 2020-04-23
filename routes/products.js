var express = require('express');
var router = express.Router();
const db = require('../models/index');

//商品の一覧表示
router.get('/', (req, res)=>{
  db.item.findAll().then((results)=>{
    res.render('products/index.ejs',{items:results});
  });
});

//商品の個別ページ
router.get('/show/:id', (req, res)=>{
  db.item.findByPk(req.params.id).then((results)=>{
    res.render('products/show.ejs',{item:results});
  });
});

//商品をカートに追加
router.post('/show/:id',(req,res)=>{
  const filter = {
    where:{
      user_id:1,
      item_id:req.params.id
    }
  }//ユーザー1で,かつ商品のidがreq.params.idのもの

  db.cart.findAll(filter).then((results)=>{
    if (results.length !== 0){
      const new_item_count = Number(results[0].item_count) + Number(req.body.count);
      const params_update = {
        item_count:new_item_count
      }

      db.cart.update(params_update,filter).then((results)=>{
        res.redirect('/');
      });//ユーザー1のカートにその商品が入っている場合は,カートの個数を追加して更新

    }else{
      const params_create = {
        user_id:1,
        item_id:req.params.id,
        item_count:req.body.count
      }

      db.cart.create(params_create).then((results)=>{
        res.redirect('/');
      });//ユーザー1のカートにその商品がない場合は,カートに新しく作成
    };
  });
});

router.get('/user/:id',(req,res) =>{
  db.item.findAll().then((results)=>{
    res.render('products/index.ejs',{items:results,user:{name:req.params.id}})
  });
});

module.exports = router;