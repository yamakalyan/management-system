const {
    google
} = require("googleapis")
require("dotenv").config()

module.exports = async (SheetType, inputValues) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: process.env.KEY_FILE,
        scopes: process.env.SCOPES
    })

    const authClientObject = await auth.getClient()

    const googleSheetInstance = google.sheets({
        version: 'v4',
        auth: authClientObject
    })

    let spreadsheetId = ""

    switch (SheetType) {

        case "agent":
            spreadsheetId = process.env.AGENT_SHEET_ID
            break;
        case "distributer":
            spreadsheetId = process.env.DISTRIBUTER_SHEET_ID
            break;
        case "master_distributer":
            spreadsheetId = process.env.MASTER_DISTRIBUTER_SHEET_ID
            break;
        default:
            break;
    }

    googleSheetInstance.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: process.env.MASTER_DISTRIBUTER_RANGE,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: inputValues,
        },
    });

}






// service account email address

// g - seva - sheet - admin @g - seva - sheets.iam.gserviceaccount.com


// agent sheet

// https: //docs.google.com/spreadsheets/d/1BobGn61pYyUkDLq-6xdrpbASeqoy1TE3JKnPi2Me6WE/edit?usp=sharing


// distributer sheet

// https: //docs.google.com/spreadsheets/d/13OsINUKYlbY_HkjwLbkomnS9BHXQ-Nq_qY1GEkTZIsA/edit?usp=sharing


// master distributer

// https: //docs.google.com/spreadsheets/d/1KqGSXswtT0IX30K90JSFP_z9Brf7783c240dcDFnPng/edit#gid=0