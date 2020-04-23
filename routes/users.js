var express = require('express');
var router = express.Router();
const db = require('../models/index');

router.get('/login',(req,res)=>{
    res.render('users/login.ejs');
});

router.post('/login',(req,res)=>{
    const filter = {
        where:{
            email:req.body.email,
            password:req.body.password
        }
    };
    db.user.findOne(filter).then((results)=>{
        if(results === null){
            res.redirect('/users/login');
        }else{
            res.redirect('/products');
        };
    });
});

router.get('/signup',(req,res)=>{
    res.render('users/signin.ejs');
});

router.put('/signup',(req,res)=>{
    const params = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };
    db.user.create(params).then((results)=>{
        res.redirect('/products');
    });
});

module.exports = router;