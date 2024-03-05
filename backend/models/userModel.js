const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
