const database = require("../../Config/database")
const {
    middleWareForManagementStaff
} = require("../../Helpers/AuthMiddleWares")
const bcrypt = require("bcrypt")
const salt = 10


// POST METHOD TO CREATE / MANAGEMENT / STAFF / STUDENT BASED ON ROLE
const postCreate = async (req, res, next) => {
    const values = req.body.values
    const tableName = req.params.type

    // SANITIZING INPUT VALUES
    const allowedCharecterForName = /^[A-Z/a-z]+$/
    const allowedLettersForEmail = /^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$/;

    if (values[0].name && !values[0].name.match(allowedCharecterForName)) {
        return res.status(400).json("No special characters are allowed in Name");
    }
    if (values[0].email && !values[0].email.match(allowedLettersForEmail)) {
        return res.status(400).json("Invalid email format");
    }
    if (values[0].mobile && isNaN(Number(values[0].mobile))) {
        return res.status(400).json("No special characters are allowed in Mobile");
    }

    // FOR CHECHING IF EMAIL AND MOBILE EXIST IN DATABASE
    const name = values.map((na) => na.name)
    const email = values.map((em) => em.email)
    const mobile = values.map((mob) => mob.mobile)

    // COMBINIG THE OBJECTS USING LOOP AND OBJECT METHOD
    // const combinigToObject = {}
    // for (let i = 0; i < values.length; i++) {
    // CHECHING IF ITS OBJECT OR NOT
    //     if (typeof values[i] === "object") {
    // IF TRUE IT MIXES OBJECT WITH OBJECT KEY AND VALUE
    //         Object.assign(combinigToObject, values[i])
    //     } else {
    // IF FALSE IT MIXES AND TAKES combingToObject.key as KEY AND VALUE EX = KEY : VALUE
    //         const add = [tableName + '_id'].toLocaleString().toLowerCase()
    //         combinigToObject[add] = values[i]
    //     }
    // }


    const firstTwoLettersFromTableName = tableName.substring(0, 3).toUpperCase()
    const tableWithId = tableName + '_id'
    const mixedValues = values.map(mix => (
        {
        ...mix,
        created_by: req.id,
        [tableWithId]: firstTwoLettersFromTableName + Math.floor(1000000 + Math.random() * 9999999)
        }))

    // HASHING PASSWORD HERE
    const Password = values.map((pass) => pass.password)
    console.log(Password)
    const hashingPAssword = await bcrypt.hash(Password[0], salt)

    // const comparePAssword = await bcrypt.compare(Password[0], hashingPAssword)
    const bcryptingPasswordWITHvalues = mixedValues.map(values => {
        if (values.password) {
            values.password = hashingPAssword
        }
        return values
    })

    const checkEmailSql = `SELECT * FROM ${tableName} WHERE ? AND ifdeleted='0'`
    database.query(checkEmailSql, {
        email
    }, (err, emailCheckResults) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "HavingIssues",
                err
            })
        } else {
            if (emailCheckResults.length == 0) {
                const checkMobileSql = `SELECT * FROM ${tableName} WHERE ? AND ifdeleted='0' `
                database.query(checkMobileSql, {
                    mobile
                }, (err, mobileCheckResults) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            message: "HavingIssues",
                            err
                        })
                    } else {
                        if (mobileCheckResults.length == 0) {
                            const createSql = `INSERT INTO ${tableName} SET ?`

                            database.query(createSql, bcryptingPasswordWITHvalues, (err, results) => {
                                if (err) {
                                    return res.status(400).json({
                                        success: false,
                                        message: "HavingIssues",
                                        err
                                    })
                                } else {
                                    return req.createResponse = res.status(200).json({
                                        success: true,
                                        message: `${name} SuccessfullyInserted into ${tableName}`,
                                        results
                                    })
                                }
                            })
                        } else {
                            return res.status(400).json({
                                success: false,
                                message: "MobileNumberAlreadyExists",
                            })
                        }
                    }
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "EmailAddressAlreadyExists",
                })
            }
        }
    })

}

// POST METHOD TO CREATE SIMILAR INSERTION CASES
const similarInsertionCases = async (req, res, next) => {
    try {
        const tableName = req.params.case

        // REMOVING LAST LETTER IF S INCLUDES AT LAST
        const checkingIFSincludesAtLast = tableName[tableName.length - 1]

        const removingLastLetter = (checkingIFSincludesAtLast).toLowerCase() == "s" ? tableName.slice(0, -1) : tableName

        // TAKING 3 LETTERS FROM TABLENAME FOR ID
        const firstTwoLettersFromTableName = tableName.substring(0, 3).toUpperCase()

        const values = req.body.values
        const tableWithId = removingLastLetter + '_id'

        // const getColumnNames = `DESCRIBE ${tableName}`

        // database.query(getColumnNames, (err, result) => {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         const test = result.map((item) => ({
        //             column: item.Field
        //         }))
        //         result = test
        //         console.log(result)
        //     }
        // })

        const authCheck = middleWareForManagementStaff(req.role, tableName)

        if (authCheck.success) {

            const checkingLastTableID = `SELECT ${tableWithId} FROM ${tableName} ORDER BY id DESC LIMIT 1`
            database.query(checkingLastTableID, (err, lastIdResults) => {
                if (err) {
                    res.status(400).json({
                        success: false,
                        message: "HavingInternalIssues",
                        err
                    })
                } else {

                    const resultID = lastIdResults[0] == undefined || null ? "0" : lastIdResults[0][tableWithId]
                    const removingStringFromNumberID = resultID.match(/\d+/)
                    const finalLastID = parseFloat(removingStringFromNumberID) + 1
                    const ifTransactions = tableName == "transactions" ? "transaction_made_by" : "created_by"

                    const mixedValues = values.map(mix => ({
                        ...mix,
                        [ifTransactions]: req.id,
                        [tableWithId]: firstTwoLettersFromTableName + finalLastID
                    }))
                    const createSql = `INSERT INTO ${tableName} SET ?`
                    database.query(createSql, mixedValues, (err, results) => {
                        if (err) {
                            res.status(400).json({
                                success: false,
                                message: "HavingIssues",
                                err
                            })
                        } else {
                            return res.results = res.status(200).json({
                                success: true,
                                message: `Data SuccessfullyInserted into ${tableName}`,
                                results
                            })
                        }
                    })
                }
            })

        } else {
            res.status(401).json(authCheck)
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    postCreate,
    similarInsertionCases
}