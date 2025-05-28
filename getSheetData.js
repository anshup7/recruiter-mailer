import { google } from "googleapis";

function cleanSheetData(data) {
    // First index contains columns.
    // Starting from index 1, all row Items are present
    let cleanedData = [];
    return data.reduce((acc, curr, index, originalArray) => {
        if(index === 0) return acc;
        const interimObj = {};
        for(let i=0; i < curr.length; i++) {
            interimObj[originalArray[0][i]] = curr[i]; // Taking first array element inside data's array of arrays.
        }
        acc.push(interimObj);
        return acc;
    }, cleanedData);

}

function validateEnvPresence() {
    if(process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SHEET_API_KEY) {
        console.log("Credentials Found");
    } else {
        throw ReferenceError("No Credential References were found from Environment");
    }
}

export async function getSheetData() {
    try {
        validateEnvPresence();
        const sheets = google.sheets({ version: 'v4', auth: process.env.GOOGLE_SHEET_API_KEY });
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: "Sheet1!A:G",
        });
        if(!response || !response.data || response.data.values.length === 0) throw Error("Sheet Data not found in the response or is empty");

        console.log("Data Fetched from the Sheet Successfully");

        const cleanedDataDump = cleanSheetData(response.data.values);

        if(cleanedDataDump.length === 0) throw RangeError("No Data found in the sheet");

        const filteredListRecruiters = cleanedDataDump.filter(detailObj => detailObj["Should Send"] === "Yes");

        if(filteredListRecruiters.length <= 0) throw RangeError("No Recruiters found to send mail");

        console.log("Following Recruiters will be mailed", filteredListRecruiters);

        return filteredListRecruiters;
        
    } catch(err) {
        console.error(err);
        process.exit(0);
    }
}