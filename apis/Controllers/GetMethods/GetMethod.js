const database = require("../../Config/database")

const getUnique = async (req, res, next) => {
    const {id} = req.params

    const columnName = req.role + "_id"

    const getSql = `SELECT * FROM ${req.role} WHERE ${columnName}=${id} AND ifdeleted='0'`
    database.query(getSql, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: "HavingIssues",
                err
            })
        } else {
            if (results.length == 0) {
                res.status(400).json({
                    success: false,
                    message: "NoDataFound",
                })
            } else {
                req.getuniqueResults = {
                    success: true,
                    message: `${req.role} DataFound.`,
                    results
                }
                next()
            }
        }
    })
}

const getProfile = (req, res, next) => {

    const columnName = req.role + "_id"
    const getSql = `SELECT * FROM ${req.role} WHERE ${columnName}=${req.id} AND ifdeleted='0'`
    database.query(getSql, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: "HavingIssues",
                err
            })
        } else {
            if (results.length == 0) {
                res.status(400).json({
                    success: false,
                    message: "NoDataFound",
                })
            } else {
                req.getProfileResults = {
                    success: true,
                    message: `${req.role} DataFound.`,
                    results
                }
                next()
            }
        }
    })
}

const getList = async (req, res, next) => {

    const getSql = `SELECT * FROM ${req.role} WHERE ifdeleted='0' ORDER BY id DESC`
    database.query(getSql, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: "HavingIssues",
                err
            })
        } else {
            if (results.length == 0) {
                res.status(400).json({
                    success: false,
                    message: "NoDataFound",
                })
            } else {
                req.getListResults = {
                    success: true,
                    message: `${req.role} DataFound.`,
                    results
                }
                next()
            }
        }
    })
}

module.exports = {
    getUnique,
    getProfile,
    getList
}