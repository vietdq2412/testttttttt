var express =require('express');
const cons = require('consolidate');
var app=express();
var fs=require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var publicDir =require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
//npm i handlebars consolidate 
const engines =require('consolidate');
const { fstat } = require('fs');
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');   
app.get('/',(req,res)=>{
    res.render('index');
})
const PORT = process.env.PORT || 5000
app.listen(PORT);
console.log('Server is running...');