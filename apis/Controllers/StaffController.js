const express = require("express");
const staff = express.Router();
const database = require("../Config/database");
const table = require("../Helpers/Tables");
const jwtVerify = require("../Helpers/JwtVerify");
const googleSheetInsert = require("../Helpers/googleSheets/PostGoogleSheet")

const {
    getUnique,
    getList,
    getProfile
} = require("../Controllers/GetMethods/GetMethod")
const {
    postCreate
} = require("../Controllers/PostMethods/PostMethod")


// PROFILE
staff.get("/by/:id", jwtVerify, getUnique, async (req, res, next) => {
    try {
        res.status(200).json(req.getuniqueResults)

    } catch (error) {
        next(error);
    }
});

// LIST
staff.get("/list", jwtVerify, getList, async (req, res, next) => {
    try {
        return res.json(req.getListResults)

    } catch (error) {
        next(error)
    }
});

// PROFILE
staff.get("/profile", jwtVerify, getProfile, (req, res, next) => {
    try {
        res.status(200).json(req.getProfileResults)
    } catch (error) {
        next(error);
    }
});

// CREATE
staff.post("/create", postCreate, async (req, res, next) => {
    try {
        await res.status(200).json(req.createResponse)
    } catch (error) {
        next(error);
    }
});

module.exports = staff