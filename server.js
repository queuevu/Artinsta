var express=require('express');
var app=express();
const path = require('path'); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/upload",function(req,res){
    
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(3000,function(){
    console.log("server running");
}) 

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://viyolah:viyu_04@cluster0.9ulvoti.mongodb.net/?retryWrites=true&w=majority&appName=ArtinstaDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));
