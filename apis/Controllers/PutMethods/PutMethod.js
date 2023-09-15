const database = require("../../Config/database")

const putCreate = async (req, res, next) => {
    const values = req.body.values
    const tableName = req.body.role

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

    // ADDING ID TO FIRST PLACE IN ARRAY VALUES
    const takingFirstLetter = tableName.substring(0, 3).toUpperCase()
    const insertionId = takingFirstLetter + Math.floor(100000 * Math.random() + 999999)
    values.unshift(insertionId)

    // ADDING STATUS AND IFDELETED TO LAST PLACE IN ARRAY VALUES
    const lastValuesForArray = {
        status: 0,
        ifdeleted: 0
    }
    values.push(lastValuesForArray)

    // COMBINIG THE OBJECTS USING LOOP AND OBJECT METHOD
    const combinigToObject = {}

    for (let i = 0; i < values.length; i++) {
        // CHECHING IF ITS OBJECT OR NOT
        if (typeof values[i] === "object") {
            // IF TRUE IT MIXES OBJECT WITH OBJECT KEY AND VALUE
            Object.assign(combinigToObject, values[i])
        } else {
            // IF FALSE IT MIXES AND TAKES combingToObject.key as KEY AND VALUE EX = KEY : VALUE
            const add = [tableName + '_id'].toLocaleString().toLowerCase()
            combinigToObject[add] = values[i]
        }
    }

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
                            const createSql = `UPDATE ${tableName} SET ? WHERE ?`

                            database.query(createSql, combinigToObject, (err, results) => {
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