const express = require("express");
const admin = express.Router();
const jwtVerify = require("../Helpers/JwtVerify");

const {
  getUnique,
  getProfile
} = require("../Controllers/GetMethods/GetMethod")
const {
  postCreate
} = require("../Controllers/PostMethods/PostMethod")


// PROFILE
admin.get("/by/:id", jwtVerify, getUnique, async (req, res, next) => {
  try {
    res.status(200).json(req.getuniqueResults)

  } catch (error) {
    next(error);
  }
});

// PROFILE
admin.get("/profile", jwtVerify, getProfile, (req, res, next) => {
  try {
    res.status(200).json(req.getProfileResults)
  } catch (error) {
    next(error);
  }
});

// CREATE
admin.post("/create/:type", postCreate, async (req, res, next) => {
  try {
    await res.status(200).json(req.createResponse)
  } catch (error) {
    next(error);
  }
});

module.exports = admin;