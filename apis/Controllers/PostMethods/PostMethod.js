const database = require("../../Config/database")

const postCreate = async (req, res, next) => {
    const values = req.body.values
    const tableName = req.body.role
    const createSql = `INSERT INTO ${tableName} SET ?`

    database.query(createSql, values,  (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: "HavingIssues",
                err
            })
        } else {
           req.createResponse = res.status(200).json({
                success: true,
                message: "SuccessfullyInserted",
                results
            })
        }
    })
}

module.exports = {postCreate}