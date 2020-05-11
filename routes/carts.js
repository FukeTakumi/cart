var express = require('express');
var router = express.Router();
const db = require('../models/index');

//カートの一覧表示
router.get('/',(req,res)=>{
    if(!req.user){
        res.redirect('/users/new');
    }
    const user = req.user.dataValues
    const options = {
        include:[{
            model:db.cart
        }]
    };

    db.user.findByPk(user.id,options).then((results_user)=>{
        db.item.findAll().then((results_items)=>{
            res.render('carts/index.ejs',{user:results_user,items:results_items});
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
    const filter={
        where:{
            item_id:req.params.id,
            user_id:req.user.dataValues.id
        }
    }
    db.cart.findOne(filter).then((results_cart)=>{
        db.item.findByPk(req.params.id).then((results_item)=>{
            res.render('carts/edit.ejs',{cart:results_cart,item:results_item});
        });
    });
});

//注文個数の更新
router.put('/edit/:id',(req,res)=>{
    const filter = {
        where:{
            user_id:req.user.dataValues.id,
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
    const user = req.user.dataValues
    const options = {
        include:[{
            model:db.cart
        }]
    };

    db.user.findByPk(user.id,options).then((results_user)=>{
        db.item.findAll().then((results_items)=>{
            res.render('carts/confirm.ejs',{user:results_user,items:results_items});
        });
    });
});

//注文の終了(該当ユーザーのカートのデータをリセット)
router.delete('/finish',(req,res)=>{
    const filter = {
        where:{
            user_id:req.user.dataValues.id
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