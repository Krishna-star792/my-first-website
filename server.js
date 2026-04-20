const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*"
}));

// Connect MongoDB
mongoose.connect("mongodb+srv://krishnadwivedi792_db_user:881NjY120WxkkRIE@cluster0.g1qpzaj.mongodb.net/?appName=Cluster0");

// Create User Schema
const User = mongoose.model("User", {
  username: String,
  password: String
});

// API route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  console.log("Received:", username, password);

  await User.create({ username, password });

  res.json({ message: "User saved!" });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});