require('dotenv').config();

var express=require('express');
var app=express();
const path = require('path'); 
const mongoose = require('mongoose');
const multer = require("multer");
const Artist = require("./models/Artist");

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


// ✅ Multer Setup (Add this)
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/"); // auto create folder if not exists
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

// ✅ Handle Form Submission (Add this)
app.post("/register-artist", upload.single("profile_photo"), async (req, res) => {
  try {
    const newArtist = new Artist({
      artist_fullname: req.body.artist_fullname,
      artist_brand: req.body.artist_brand,
      display_name: req.body.display_name === "on",
      email: req.body.email,
      phone_no: req.body.phone_no,
      country: req.body.country,
      profile_photo: req.file.filename,
      bio: req.body.bio,
      website: req.body.website,
      social_media: req.body.social_media
    });

    await newArtist.save();
    res.send("✅ Artist Registered Successfully!");
  } catch (error) {
    console.log(error);
    res.send("❌ Error While Registering");
  }
  });

<<<<<<< HEAD
  const port=process.env.port || 3000;

app.listen(port,function(){
    console.log("server running");
}) ;
=======
  
>>>>>>> 20ebecf10849d2b19144754d83e9baaed5a1574d
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
