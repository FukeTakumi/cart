var express = require('express');
var router = express.Router();
const db = require('../models/index');

router.get('/', (req, res)=>{
  db.item.findAll().then((results)=>{
    res.render('products.ejs',{items:results});
  });
});

router.get('/:id', (req, res)=>{
  db.item.findByPk(req.params.id).then((results)=>{
    res.render('product.ejs',{item:results});
  });
});

module.exports = router;
