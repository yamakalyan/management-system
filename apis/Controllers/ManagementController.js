const express = require("express");
const management = express.Router();
const jwtVerify = require("../Helpers/JwtVerify");

const {
    getUnique,
    getProfile,
    getSimilarDetails
} = require("../Controllers/GetMethods/GetMethod")
const {
    postCreate,
    similarInsertionCases
} = require("../Controllers/PostMethods/PostMethod");
const {
    deleteMethod
} = require("./DeleteMethods/DeleteMethod");
const { putUpdate } = require("./PutMethods/PutMethod");


// PROFILE
management.get("/by/:id", jwtVerify, getUnique, async (req, res, next) => {
    try {
        return res.status(200).json(req.getuniqueResults)
    } catch (error) {
        next(error);
    }
});

// PROFILE
management.get("/profile", jwtVerify, getProfile, (req, res, next) => {
    try {
        return res.status(200).json(req.getProfileResults)
    } catch (error) {
        next(error);
    }
});

// CREATE
management.post("/user/create/:type", jwtVerify, postCreate, async (req, res, next) => {
    try {
        return await res.status(200).json(req.createResponse)
    } catch (error) {
        next(error);
    }
});

// SIMILAR LISTS
management.get('/list/:type', jwtVerify, getSimilarDetails, async (req, res, next) => {
    try {
        await res.send(req.getAccountingResults)

    } catch (error) {
        next(error)
    }
})

// CREATE FOR SIMILAR CASES IN MANAGEMENT
management.post("/create/:case", jwtVerify, similarInsertionCases, async (req, res, next) => {
    try {
        await res.send(req.results)

    } catch (error) {
        next(error)
    }
})

// UPDATE TABLES BY TYPE
management.put("/update/:type/:id", jwtVerify, putUpdate, (req, res, next) => {
    try {
        res.send(req.updateResponse)
    } catch (error) {
        next(error)
    }
})

// DELETE TABLE BY TYPE
management.delete("/delete/:type", jwtVerify, deleteMethod, async (req, res, next) => {
    try {
        await res.send(req.deleteResults)
    } catch (error) {
        next(error)
    }
})


module.exports = management