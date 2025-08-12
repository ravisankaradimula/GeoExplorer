// backend/app.js
const express = require("express");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable CORS for the frontend

// API Routes
app.use("/api/auth", authRoutes);

// A simple test route
app.get("/", (req, res) => {
  res.send("GeoBlast Backend is running!");
});

module.exports = app;
