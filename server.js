require('dotenv').config();

var express=require('express');
var app=express();
const path = require('path'); 
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get("/upload",function(req,res){
    
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));

const port=process.env.port || 3000;

app.listen(port,function(){
    console.log("server running");
}) ;