const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
const uri = process.env.MONGO_URI // Replace 'mydatabase' with your database name
// const mongoURL = process.env.MONGODB_URL;

if (!uri) {
    throw new Error('MONGO_URI is not defined in the environment variables');
  }
  
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });

// Export the database connection
// module.exports = db;