const express = require("express");
const bookdata = require("./src/model/bookdata");

const app = express();
const cors = require('cors');
const bodyparser = require("body-parser");
app.use(cors());

app.get('/',function(req,res){
    res.send("API response correctly")
    
    })
    
    app.get('/book',function(req,res){
        res.header("Acces-Control-Allow-Origin","*");
        res.header('Acces-Control-Allow-Methods:GET,POST,PUT,DELETE');
        bookdatadata.find().then(function(book){
           res.send(book);
    
    
        })
    })
    
    
    app.listen(5000,()=>{
        console.log("server started...")
    
    });
    