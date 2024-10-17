const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://melbinkmadhu:melbin123456@cluster0.z48zfz0.mongodb.net/");
 //schema
 const schema = mongoose.Schema;
 const bookschema = new schema ({
bookname:String,
author:String,
genre:String,
image:String



 });
 //model creation
 var bookdata = mongoose.model('BOOKS',bookschema);
 module.export = bookdata;