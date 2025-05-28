# How to Run This

## 1. Create a Google Sheet

- Create an Excel sheet and upload it to Google Sheets.
- The Google Sheet **must contain the following columns** with **exact casing** (case-sensitive):

    - `Company Name`
    - `Country`
    - `Recruiter Email`
    - `Recruiter Name`
    - `Reach Out Date`
    - `Follow Up Date`
    - `Should Send`

> ⚠️ You must maintain the sheet as described.  
> To trigger an email, set the **"Should Send"** column value to **"Yes"** (case-sensitive).

---

## 2. Prepare Your Environment

### ✅ Create a `.env` file at the root of the cloned repository

Add the following properties to the `.env` file:

1. `GOOGLE_SHEET_ID`  
   The ID found in your Google Sheet URL — it's the part **after** `spreadsheets/d/` and **before** `/edit`.

2. `GOOGLE_SHEET_API_KEY`  
   Get your Google API key from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

3. `email`  
   The email address you want to use for sending emails.

4. `passkey`  
   You **cannot** use your regular email password.  
   Instead, generate an **App Password** from your Google Account's security settings.  
   > 🔍 You can find detailed instructions by searching "how to generate Gmail app password" on Google.

---

## 3. Run the App

Once everything is set up, simply run:

```bash
npm start
```


> ***That said, this application has various scopes which I(we) shall add in future to make it more abstract for Job Seekers.***

