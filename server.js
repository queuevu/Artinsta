require('dotenv').config();

var express=require('express');
var app=express();
const path = require('path'); 
const mongoose = require('mongoose');
const multer = require("multer");
const Artist = require("./models/artist");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// Home (landing page)
app.get("/", async (req, res) => {
  try {
    const newArtist = await Art.find().sort({ _id: -1 });
    res.render("home", { newArtist });
  } catch (err) {
    console.log(err);
    res.send("Error loading home page");
  }
});



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// ✅ Feed (Gallery Page)
app.get("/feed", async (req, res) => {
  try {
    const arts = await Art.find();
    res.render("feed", { arts });
  } catch (err) {
    console.log(err);
    res.send("Error loading feed");
  }
});




app.get("/upload",function(req,res){
    
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));


// ✅ Multer Setup (Add this)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// ✅ Handle Form Submission (Add this)
app.post("/upload-art", upload.fields([
  { name: "artist_photo", maxCount: 1 },
  { name: "artwork_image", maxCount: 1 }
]), async (req, res) => {
  try {
    const newArtist = new Art({
      Full_Name: req.body.full_name,
      Artist_Name: req.body.artist_name,
      Display_Name: req.body.display_name === "dont_display",
      Email: req.body.email_adr,
      Phone_Number: req.body.ph_number,
      Country: req.body.Country,
      Bio: req.body.descript,
      website: req.body.portfolio,
      social_media_account: req.body.social_media,
      
      profile_photo: req.files.artist_photo ? req.files.artist_photo[0].filename : null,

      Artwork_Title: req.body.title,
      Medium: req.body.medium,
      Year_created: req.body.year_created,
      Sell_it: req.body.sale === "yes",
      Price: req.body.price,
      Description_art: req.body.art_description,
      Keywords: req.body.keywords,
      Hashtags: req.body.hashtags,
      Category: req.body.style,
      Other_category: req.body.other_style,
      Theme: req.body.theme,
      License: req.body.license,

      artwork_image_file: req.files.artwork_image ? req.files.artwork_image[0].filename : null
    });

    await newArtist.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("❌ Error While Registering");
  }
});


  
const artistSchema = new mongoose.Schema({
  Full_Name: String,
  Artist_Name: String,
  Email: String,
  Phone_Number:String,
  Country:String,
  profile_photo:String,
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
  artwork_image_file: String
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
