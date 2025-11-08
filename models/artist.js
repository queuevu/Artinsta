const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  image: {
    type: String, // storing file path only (recommended)
  }
});


module.exports = mongoose.model("Artist", artistSchema);
