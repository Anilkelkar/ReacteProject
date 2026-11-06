const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// ✅ Connect to MongoDB (no deprecated options)
mongoose.connect('mongodb+srv://kelkar769:kRYNjwGGdOAvuxNE@cluster0.a8odon4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("✅ MongoDB connection successful!"); 
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err);
  });

// Routes
app.get('/', (req, res) => {
  res.render('index');
});


// Start the server
app.listen(4000, () => {
  console.log('🚀 Server is running on port 4000');
});
