const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // No need for the deprecated options anymore
    console.log(`MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`); // Includes host and port in the log
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
