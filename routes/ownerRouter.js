const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");
require("dotenv").config();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 1) {
      return res.status(401).send("you can't create owner");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
  });
}

router.get("/", (req, res) => {
  res.send("it is working na bala");
});

module.exports = router;
