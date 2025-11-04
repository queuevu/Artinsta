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


const artistSchema = new mongoose.Schema({
  Full_Name: String,
  Artist_Name: String,
  Email: String,
  Phone_Number:String,
  Country:String,
  Bio:String,
  social_media_account:String,
  Artwork_Title:String,
  Medium:String,
  Year_created:Date,
  Sell_it:Boolean,
  Price:Number,
  Description_art:String,
  Keywords:String,
  Hashtags:String,
  Category:String,
  Other_category:String,
  Theme:String,
  License:String,
});

const Art = mongoose.model('Art', artistSchema);

const port=process.env.port || 3000;

app.listen(port,async () => {
  console.log('Server running on http://localhost:3000');

  // // Test route trigger manually
  // const testStudent = new Art({ name: 'Viyola', age: 22, course: 'MCA' });
  // await testStudent.save();
  // console.log('Student added automatically!');
});
