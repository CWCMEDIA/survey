# Google Sheets Setup Guide

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Delete the default code and paste the contents of `google-apps-script.js`
4. Save the project with a name like "Survey Data Collection"

## Step 2: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following settings:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for the next step

## Step 3: Update Survey Code

1. Open `script.js` in your survey project
2. Find this line:
   ```javascript
   const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE', {
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web App URL from Step 2

## Step 4: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Rename the first sheet to "Survey Answers"
4. **Important**: Make sure this sheet is completely blank (no headers yet)

## Step 5: Link Apps Script to Sheet

1. Go back to your Google Apps Script project
2. In the Apps Script editor, you'll see a dropdown next to "Files" 
3. Click on it and select your Google Sheet (the one with "Survey Answers")
4. This links the script to your specific sheet

## Step 6: Test the Setup

1. Deploy your survey to a web server
2. Fill out a test survey
3. Check your Google Sheet - you should see:
   - Headers automatically created on first submission
   - Survey data in new rows
   - Proper formatting for German/Japanese responses

## Troubleshooting

### If data isn't appearing in the sheet:
1. Check that the sheet name is exactly "Survey Answers"
2. Verify the Apps Script is linked to the correct spreadsheet
3. Check the browser console for error messages
4. Ensure the Web App URL is correct in your JavaScript code

### If you get CORS errors:
1. Make sure the Web App is deployed with "Anyone" access
2. Check that the Apps Script URL is correct
3. The survey will still store data locally as backup

### If headers aren't created:
1. Make sure the sheet is completely blank initially
2. The headers will be created automatically on the first submission

## Data Format

The survey will create columns for:
- Timestamp
- Survey ID
- Survey Title  
- Language
- Video URL
- All survey responses (formatted based on language)

For German/Japanese surveys, this includes:
- Basic demographic information
- Cultural orientation questions
- Video-related questions
- Manufacturer evaluation questions 