# 🔧 Google Sheets Setup - Step by Step

## 🎯 Goal: Get Data Flowing to Google Sheets

Follow these steps **exactly** to get your survey data into Google Sheets:

## Step 1: Create Google Apps Script

1. **Go to [Google Apps Script](https://script.google.com/)**
2. **Click "New Project"**
3. **Delete the default code** (the `function myFunction() {}` part)
4. **Copy ALL the code from `google-apps-script.js`** and paste it into the editor
5. **Save the project** with name "Survey Data Collection"

## Step 2: Create Google Sheet

1. **Go to [Google Sheets](https://sheets.google.com/)**
2. **Create a new spreadsheet**
3. **Rename the first sheet to "Survey Answers"** (exactly this name)
4. **Make sure the sheet is completely blank** (no headers yet)

## Step 3: Link Apps Script to Sheet

1. **Go back to your Google Apps Script project**
2. **In the Apps Script editor**, you'll see a dropdown next to "Files" 
3. **Click on it and select your Google Sheet** (the one with "Survey Answers")
4. **This links the script to your specific sheet**

## Step 4: Deploy as Web App

1. **Click "Deploy" → "New deployment"**
2. **Choose "Web app"** as the type
3. **Set these settings:**
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. **Click "Deploy"**
5. **Copy the Web App URL** - you'll need this for the next step

## Step 5: Update Your Survey Code

1. **Open `script.js`** in your survey project
2. **Find line 982** (the Google Apps Script URL)
3. **Replace the URL** with your new Web App URL from Step 4
4. **Save the file**

## Step 6: Test the Connection

1. **Open `test-connection.html`** in your browser
2. **Click "Test Connection"** - should show success
3. **Click "Test Data Submission"** - should add data to your sheet
4. **Check your Google Sheet** - you should see the test data

## Step 7: Test Your Survey

1. **Open `index.html`** in your browser
2. **Complete a test survey**
3. **Check your Google Sheet** - data should appear automatically

## 🚨 Common Issues & Fixes

### Issue: "Script not found" error
**Fix**: Make sure you copied ALL the code from `google-apps-script.js`

### Issue: "Sheet not found" error  
**Fix**: Make sure the sheet is named exactly "Survey Answers"

### Issue: CORS errors
**Fix**: Make sure the Web App is deployed with "Anyone" access

### Issue: Data not appearing in sheet
**Fix**: 
1. Check that the Apps Script is linked to the correct spreadsheet
2. Make sure the sheet is completely blank initially
3. Headers will be created automatically on first submission

## 🔍 Debugging

If it's still not working:

1. **Check browser console** for error messages
2. **Use `test-connection.html`** to test the connection
3. **Verify the Web App URL** is correct in `script.js`
4. **Make sure the sheet name** is exactly "Survey Answers"

## 📞 Need Help?

If you're still having issues:

1. **What error message** are you seeing?
2. **What step** are you stuck on?
3. **Can you share** the Web App URL you're using?

---

**Once this is working, your survey will send data directly to Google Sheets automatically!** 