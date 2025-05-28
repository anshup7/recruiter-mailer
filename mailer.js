import dotenv from "dotenv";
dotenv.config();
import { getSheetData } from "./getSheetData.js";
import { getTemplate } from "./assets/getTemplate.js";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.passkey
    }
});

// Define the email options
const mailOptions = {
    from: {
        address: process.env.email,
        name: "Anshuman Upadhyay" // Your Name that will be shown in the subject of the mail
    },
    attachments: [
        {
            filename: `resume.pdf`,
            path: "./assets/mailer-resume.pdf" 
        }
    ],
    to: '',
    subject: '(8 Years Exp)Application for React.js, Node.js, Frontend/Fullstack Profiles',
};

function sendMail(message, toEmail) {
    let option = {...mailOptions};
    option.text = message;
    option.subject = `${option.subject}`;
    option.to = toEmail;
    // Send the email
    return new Promise((resolve, reject) => {
        transporter.sendMail(option, (error, info) => { // return before transporter is not needed. Only resolve and reject matters.
            if (error) {
                reject(error);
            }
            resolve({message: `Mail Sent Successfully to = ${toEmail}`, info})
        });
    });
}

function sleep(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done"), seconds * 1000);
    });
}

async function processMails() {
    const recruitersToMail = await getSheetData(); // If there are no rows in sheet with "Should Send" as Yes. An error will be raised.
    for(const eachRecruiterData of recruitersToMail) {
        const templateToSend = getTemplate(eachRecruiterData);
        console.log("Template to Send", templateToSend);
        try {
            const mailResponse = await sendMail(templateToSend, eachRecruiterData["Recruiter Email"]);
            console.log(mailResponse);
            console.log("Sleeping");
            await sleep(5);
            console.log("Resuming");
        } catch(err) {
            console.err(err);
        }
    }
}

processMails();