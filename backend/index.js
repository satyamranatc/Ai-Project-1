const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/heart_attack_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const predictionRoutes = require('./routes/predictionRoutes');
app.use('/api', predictionRoutes); // Ensure this is the correct route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
