const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

// MongoDB setup
const DB_URL = process.env.MONGODB_URL;
const DB_USERNAME = process.env.MONGODB_USERNAME;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;
const DB_DATABASE = process.env.MONGODB_DATABASE;

// Server setup
const app = express();

// Start server and connect to MongoDB
const PORT = 3001;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await mongoose.connect(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/${DB_DATABASE}?authSource=${DB_DATABASE}&retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
});

// Middleware
app.use(express.json());

// Routes
app.use("/user", require("./routers/userRouter"));
