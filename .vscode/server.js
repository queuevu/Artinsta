const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://viyolah:viyu_04@cluster0.9ulvoti.mongodb.net/?retryWrites=true&w=majority&appName=ArtinstaDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));
