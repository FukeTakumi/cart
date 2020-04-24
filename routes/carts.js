var express = require('express');
var router = express.Router();
const db = require('../models/index');

//カートの一覧表示
router.get('/',(req,res)=>{
    const options = {
        include:[{
            model:db.cart
        }]
    };

    db.user.findByPk(1,options).then((results_user)=>{
        db.item.findAll().then((results_items)=>{
            res.render('carts/index.ejs',{carts:results_user.carts,items:results_items});
        });
    });//ユーザー1を商品明細の情報と紐づけ,商品の一覧情報とともに送信
});

//商品をカートから削除
router.delete('/delete/:id',(req,res)=>{
    filter = {
        where:{
            id:req.params.id
        }
    }
    db.cart.destroy(filter).then((results)=>{
        res.redirect('/carts');
    });
});

//注文情報の編集
router.get('/edit/:id',(req,res)=>{
    const filter = {
        where:{
            user_id:1,
            item_id:req.params.id
        }
    }
    db.cart.findAll(filter).then((results_cart)=>{
        db.item.findAll().then((results_items)=>{
            res.render('carts/edit.ejs',{cart:results_cart[0],items:results_items});
        });
    });
});

//注文個数の更新
router.put('/edit/:id',(req,res)=>{
    const filter = {
        where:{
            item_id:req.params.id
        }
    };
    const params = {
        item_count:req.body.item_count
    };
    db.cart.update(params,filter).then((results)=>{
        res.redirect('/carts');
    });
});

//注文確定の確認
router.get('/confirm',(req,res)=>{
    const options = {
        include:[{
            model:db.cart
        }]
    };

    db.user.findByPk(1,options).then((results_user)=>{
        db.item.findAll().then((results_items)=>{
            res.render('carts/confirm.ejs',{carts:results_user.carts,items:results_items});
        });
    });
});

//注文の終了(該当ユーザーのカートのデータをリセット)
router.delete('/finish',(req,res)=>{
    const filter = {
        where:{
            user_id:1
        }
    };
    db.cart.destroy(filter).then((results)=>{
        res.redirect('/carts/finish');
    });
});

router.get('/finish',(req,res)=>{
    res.render('carts/finish.ejs');
});

module.exports = router;