const express = require("express");
const Auth = express.Router();
const database = require("../../Config/database");
const table = require("../../Helpers/Tables");
const jwtVerify = require("../../Helpers/JwtVerify");
const jwt = require("jsonwebtoken")


// AUTHENTICATION 
Auth.get("/authenticate", jwtVerify, (req, res, next) => {
    try {
        let role = req.role
        let tableName = ""
        let whereClause = ""

        switch (role) {
            case "management":
                tableName = table.management
                whereClause = `management_id='${req.id}'`
                break;
            case "staff":
                tableName = table.staff
                whereClause = `staff_id='${req.id}'`
                break;
            case "student":
                tableName = table.student
                whereClause = `student_id='${req.id}'`
                break;
            default:
                break;
        }

        const checkSql = `SELECT * FROM ${tableName} WHERE ${whereClause}`
        database.query(checkSql, (err, results) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "HavingIssues",
                    err
                })
            } else {
                if (results.length == 0) {
                    res.status(404).json({
                        success: false,
                        message: "notFound",
                    })
                } else {
                    const id = role == "management" ? results[0].management_id : role == "staff" ? results[0].staff_id : role == "student" ? results[0].student_id : ""
                    const result = {
                        [role + '_id']: id,
                        name: results[0].name,
                        email: results[0].email,
                        mobile: results[0].mobile,
                        role: role

                    }
                    results = result
                    res.status(200).json({
                        success: true,
                        message: "successAuthentication",
                        results
                    })
                }
            }
        })
    } catch (error) {
        next(error)
    }
})

// LOGIN BASED ON ROLE
Auth.post("/login", (req, res, next) => {
    try {
        let role = req.body.role
        let tableName = ""

        switch (role) {
            case "management":
                tableName = table.management
                break;
            case "staff":
                tableName = table.staff
                break;
            case "student":
                tableName = table.student
                break;
            default:
                break;
        }

        const checkSql = `SELECT * FROM ${tableName} WHERE email='${req.body.username}' OR mobile='${req.body.username}' AND ifdeleted='0'`
        database.query(checkSql, (err, results) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: "HavingIssues",
                    err
                })
            } else {
                if (results.length == 0) {
                    res.status(404).json({
                        success: false,
                        message: "notFound",
                    })
                } else {
                    if (results[0].password == req.body.password) {

                        const id = role == "management" ? results[0].management_id :
                            role == "staff" ? results[0].staff_id :
                            role == "student" ? results[0].student_id : "";

                        const details = {
                            [role + '_id']: id,
                            role: role,
                            time: Date()
                        };

                        const token = jwt.sign(details, process.env.JWT_SECURE, {
                            expiresIn: process.env.JWT_EXPIREIN
                        })

                        res.status(200).json({
                            success: true,
                            message: "successLogin",
                            token
                        })
                    } else {
                        res.status(400).json({
                            success: false,
                            message: "incorrectPassword",
                        })
                    }
                }
            }
        })
    } catch (error) {
        next(error)
    }
})

module.exports = Auth