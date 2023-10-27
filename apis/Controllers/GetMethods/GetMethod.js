const database = require("../../Config/database")
const {
    middleWareForManagementStaff,
    middleWareForStudent
} = require("../../Helpers/AuthMiddleWares")
const Tables = require("../../Helpers/Tables")


// GET STUDENT UNIQUE DETAILS BASED ON STUDENT ID
const getStudentDetails = (req, res, next) => {
    try {

        const conditions = req.body.conditions
        const addingQuestionMarkWithTypeKey = conditions.map((value) => `${value.type}= ?`).join(" AND ")
        const valuesToSearch = conditions.map(key => key.value)

        const authCheck = middleWareForManagementStaff(req.role, req.params.type)
        const authStudent = middleWareForStudent(req.role, req.params.type)

        if (authCheck.success || authStudent.success) {

            const getSql = `SELECT * FROM ${req.params.type} WHERE ${addingQuestionMarkWithTypeKey}`
            database.query(getSql, valuesToSearch, (err, results) => {
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

        } else {
            res.status(401).json(authCheck)
        }
    } catch (error) {
        next(error)
    }
}
// GET UNIQUE DETAILS
const getUnique = async (req, res, next) => {
    try {

        const conditions = req.body.conditions
        const addingQuestionMarkWithTypeKey = conditions.map((value) => `${value.type}= ?`).join(" AND ")
        const valuesToSearch = conditions.map(key => key.value)

        const authCheck = middleWareForManagementStaff(req.role, req.params.type)

        if (authCheck.success) {

            const getSql = `SELECT * FROM ${req.params.type} WHERE ${addingQuestionMarkWithTypeKey}`
            database.query(getSql, valuesToSearch, (err, results) => {
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

        } else {
            res.status(401).json(authCheck)
        }
    } catch (error) {
        next(error)
    }

}

// GET PROFILE BASED ON ROLE AND TOKEN
const getProfile = (req, res, next) => {
    try {

        const columnName = req.role + "_id"
        const sqlRejectValues = {
            [columnName]: req.id,
        }
        const ifDeleted = {
            ifdeleted: 0
        }
        const getSql = `SELECT * FROM ${req.role} WHERE ? AND ?`

        database.query(getSql, [sqlRejectValues, ifDeleted], (err, results) => {
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
                        results,
                    }
                }
            }
        })
    } catch (error) {
        next(error)
    }
}

// GET ACCOUNTING DETAILS BASED ON ROLE AND TYPE
const getSimilarDetails = async (req, res, next) => {
    try {

        // EXAMPLE BODY INPUT

        // "conditions": [
        //     {
        //         "type": "accounting_type",
        //         "value": "staff"
        //     },
        //     {
        //         "type": "date",
        //         "value": "20-07-2000"
        //     },
        // ]

        const conditions = req.body.conditions

        // METHOD PREVIOUS
        // const addingQuestionMarkWithTypeKey = conditions.map((value) => `${value.type}= '${value.value}'`).join(" AND ")


        // METHOD LATEST
        const addingQuestionMarkWithTypeKey = conditions.map((value) => `${value.type}= ?`).join(" AND ")
        const valuesToSearch = conditions.map(key => key.value)

        const authCheck = middleWareForManagementStaff(req.role, req.params.type)

        if (authCheck.success) {

            const getSql = `SELECT * FROM ${req.params.type} WHERE ${addingQuestionMarkWithTypeKey}`
            database.query(getSql, valuesToSearch, (err, results) => {
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
                        req.getAccountingResults = {
                            success: true,
                            message: `${req.params.type} DataFound.`,
                            results
                        }
                    }
                }
            })
        } else {
            res.status(401).json(authCheck)
        }

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getUnique,
    getProfile,
    getStudentDetails,
    getSimilarDetails
}