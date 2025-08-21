const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shipali:<db_password>@cluster0.9ulvoti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch(err => console.log(err));
