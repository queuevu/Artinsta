var express=require('express');
var app=express();
const path = require('path'); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.get("/upload",function(req,res){
    
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(3000,function(){
    console.log("server running");
}) 