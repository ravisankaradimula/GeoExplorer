// backend/config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

// This function can be used to connect to the database from server.js
// Although in this setup we connect directly in server.js,
// a separate file is useful for more complex configurations.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
