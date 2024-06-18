const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs');
const User = require("../models/User");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password","Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }

    const salt= await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt)

    try {
      console.log(req.body);
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: securePassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
