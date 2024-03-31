const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();


const Users = require("../models/Users");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    // return res.status(404).json({ error: "User not found" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({ email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ message: "Account created successfully" });
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    } else {
      res.status(200).json({ message: "Login successful" });
    }
  }
});

module.exports = router;