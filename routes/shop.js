const express = require("express");

const Router = express.Router();

Router.get('/',(req,res,next)=>{
    return res.send('<h1>HomePage</h1>');
 })

 module.exports = Router;