require('dotenv').config();  // Load environment variables
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to MongoDB...");

  try {
    // Check if the MONGO_URI is loaded correctly
    if (!process.env.MONGO_URI) {
      console.error('Mongo URI is not defined in the .env file');
      process.exit(1);  // Exit if the URI is not found
    }

    // Connect to MongoDB using the URI from the environment
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      ssl: true,               // Enable SSL for secure connections
      useNewUrlParser: true,   // Optional, but useful for parsing MongoDB connection string
      useUnifiedTopology: true // Ensures the new connection management engine (optional)
    });

    // Log the host of the connected MongoDB instance
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`); // Log the connection error
    process.exit(1);  // Exit the process with failure if there's an error
  }
};

module.exports = connectDB;
