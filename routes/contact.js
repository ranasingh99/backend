const express = require("express");
const path = require("path");
const Router = express.Router();
const rootDir = require('../util/path');

Router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
})
Router.post('/success',(req,res,next)=>{{
    res.redirect('/success');
}}) 
Router.get('/success',(req,res,next)=>{
    res.send('<h1>form successfully submitted</h1>');
})

module.exports = Router;