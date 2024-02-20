const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./util/path')

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contact");



const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoute);


app.use(shopRoute);
// app.use('/success',(req,res,next)=>{
//     return res.send('<h1>Success</h1>');
// })
app.use(contactRoute);


app.use((req,res,next)=>{
    //res.status(404).send("<h1 style='color:red'> 404 :Something Went Wrong</h1>")
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})


app.listen(5000);