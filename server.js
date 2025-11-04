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

app.listen(3000,function(){
    console.log("server running");
}) ;

mongoose.connect("mongodb+srv://viyolah:viyu_04@cluster0.9ulvoti.mongodb.net/?retryWrites=true&w=majority&appName=ArtinstaDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));
