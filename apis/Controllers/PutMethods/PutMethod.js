const database = require("../../Config/database")


// POST METHOD TO CREATE / MANAGEMENT / STAFF / STUDENT BASED ON ROLE
const putUpdate = async (req, res, next) => {

    const values = req.body.values
    const tableName = req.params.type
    const ID = req.params.id


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
    const Password = values.map((pass) => pass.password)
    Password.password = "123321"

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
    const mixedValues = values.map(mix => ({
        ...mix,
        created_by: req.id,
        [tableWithId]: firstTwoLettersFromTableName + Math.floor(1000000 + Math.random() * 9999999)
    }))

    const fullID = [{
        key: tableWithId,
        value: ID
    }, {
        key: "ifdeleted",
        value: "0"
    }]

    const mappingWHEREkeys = fullID.map((key) =>
        `${key.key} = ?`
    ).join(" AND ")

    const mappingWHEREvalues = fullID.map((value) =>
        value.value
    )
    console.log(mappingWHEREkeys)
    console.log(mappingWHEREvalues)

    const checkIDSql = `SELECT * FROM ${tableName} WHERE ${mappingWHEREkeys}`
    database.query(checkIDSql,
        mappingWHEREvalues, (err, IDCheckResults) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "HavingIssues",
                    err
                })
            } else {
                if (IDCheckResults.length == 0) {
                    return res.status(400).json({
                        success: false,
                        message: "NoDataFound",
                    })
                } else {
                    return res.status(400).json({
                        success: true,
                        message: "SUccess",
                        IDCheckResults
                    })
                }
            }
        })

}

// POST METHOD TO CREATE SIMILAR INSERTION CASES
const similarUpdateCases = async (req, res, next) => {
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
    putUpdate,
    similarUpdateCases
}