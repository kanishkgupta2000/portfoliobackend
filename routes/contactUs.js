const express = require("express");
const router = express.Router();
const ContactUs = require("../model/ContactUs");

router.post("/contact_us", async (req, res) => {
  try {
    console.log("1");
    console.log(req.body);
    const {
      name,
      email,
      phone,
      message,
      subject
    } = req.body;

    contactUs = new ContactUs({
      name,
      email,
      phone,
      message,
      subject
    });
    await contactUs.save();
    res.status(200).json("Message successfully registered !!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error !!");
  }
});

module.exports = router;
