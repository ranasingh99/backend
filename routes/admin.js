const express = require("express");
const path = require("path");
const Router = express.Router();
const rootDir = require('../util/path');

Router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname+'/index.html'));
    //res.send('<form action="/product" method ="post"><input type="text" name="productname"><button type="submit">AddProduct</button></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})


Router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = Router;