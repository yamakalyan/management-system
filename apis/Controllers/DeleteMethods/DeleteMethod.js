const {
    middleWareForManagementStaff,
} = require("../../Helpers/AuthMiddleWares")
const database = require("../../Config/database")

const deleteMethod = (req, res, next) => {
    try {

        const key = req.params.type + '_id'
         
        const conditions = {
            [key]: req.body.id
        }
        const ifdeleted = {
            ifdeleted: 0
        }

        const authCheck = middleWareForManagementStaff(req.role, req.params.type)
        if (authCheck.success) {

            const getSql = `SELECT * FROM ${req.params.type} WHERE ? AND ?`
            database.query(getSql, [conditions, ifdeleted], (err, results) => {
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
                        const deleteSql = `UPDATE ${req.params.type} SET ifdeleted='1' WHERE ? AND ?`
                        database.query(deleteSql, [conditions, ifdeleted], (err, results) => {
                            if (err) {
                                res.status(400).json({
                                    success: false,
                                    message: "HavingIssues",
                                    err
                                })
                            } else {
                                req.deleteResults = {
                                    success: true,
                                    message: `${req.params.type} Deleted.`,
                                }
                            }
                        })
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
    deleteMethod
}