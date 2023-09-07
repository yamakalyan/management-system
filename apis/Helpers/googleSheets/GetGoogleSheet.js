const {
    google
} = require("googleapis")
require("dotenv").config()


module.exports = async (SheetType) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "./credentials/service_account_credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
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

    const readData = await googleSheetInstance.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: process.env.AGENT_RANGE,
    })

    return readData.data.values
}