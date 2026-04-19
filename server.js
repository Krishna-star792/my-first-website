const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://krishnadwivedi792_db_user:881NjY120WxkkRIE@cluster0.g1qpzaj.mongodb.net/?appName=Cluster0");

// Create User Schema
const User = mongoose.model("User", {
  username: String,
  password: String
});

// API route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await User.create({ username, password });

  res.json({ message: "User saved!" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});