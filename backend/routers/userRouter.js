const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password, password_confirm } =
      req.body;
    // Validation - check if all fields are provided
    if (!first_name || !last_name || !email || !password || !password_confirm) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Validation - check if password and password_confirm match
    if (password !== password_confirm) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // Validation - check if email is valid
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    // Validation - check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }
    // Create new user
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      first_name,
      last_name,
      email,
      passwordHash,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", (req, res) => {
  res.send("Login");
});

module.exports = router;
