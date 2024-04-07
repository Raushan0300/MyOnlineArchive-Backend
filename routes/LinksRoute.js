const express = require("express");
const router = express.Router();

const Links = require("../models/Links");

const Users = require("../models/Users");

router.post("/add", async (req, res) => {
  const { youtube, id } = req.body;
  try {
    const link = await Links.findOne({ id });
    if (link) {
      if (link.youtube.includes(youtube)) {
        return res.status(400).json({ error: "Link already exists" });
      }
      link.youtube.push(youtube);
      await link.save();
    } else {
      const newLink = new Links({ youtube: [youtube], id });
      await newLink.save();
    }
    res.status(200).json({ message: "Link added successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getyt", async (req, res) => {
  const { id } = req.headers;
  try {
    const links = await Links.findOne({ id: id });
    if (links) {
      res.status(200).json({ youtube: links.youtube });
    } else {
      res.status(200).json({ message: "No links found" });
    }
  } catch (err) {
    res.status(400).json({ error: "Invalid id" });
  }
});

module.exports = router;
