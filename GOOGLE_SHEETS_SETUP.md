# 📊 Google Sheets Integration Setup Guide

Follow these steps to connect your survey to Google Sheets and collect responses automatically.

## 🚀 Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Survey Responses"
4. Keep it open - you'll need it for the next steps

## 🔧 Step 2: Set Up Google Apps Script

1. **Open Google Apps Script:**
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"
   - Name it "Survey Data Collector"

2. **Copy the Script Code:**
   - Delete the default `myFunction()` code
   - Copy all the code from `google-apps-script.js` file
   - Paste it into the Apps Script editor

3. **Save the Project:**
   - Click "Save" (💾 icon)
   - Name it "Survey Data Collector"

## 🌐 Step 3: Deploy as Web App

1. **Deploy the Script:**
   - Click "Deploy" → "New deployment"
   - Click the gear icon ⚙️ next to "Select type"
   - Choose "Web app"

2. **Configure the Deployment:**
   - **Description:** "Survey Data Collector v1"
   - **Execute as:** "Me" (your Google account)
   - **Who has access:** "Anyone" (for now, you can restrict later)
   - Click "Deploy"

3. **Authorize the App:**
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Survey Data Collector (unsafe)"
   - Click "Allow"

4. **Copy the Web App URL:**
   - You'll get a URL like: `https://script.google.com/macros/s/AKfycbz.../exec`
   - Copy this URL - you'll need it for the next step

## 🔗 Step 4: Connect Your Survey

1. **Update the JavaScript:**
   - Open `script.js` in your survey project
   - Find line with `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
   - Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual web app URL
   - Save the file

2. **Test the Connection:**
   - Open your survey in a browser
   - Fill out a test survey and submit
   - Check your Google Sheet - you should see the data appear!

## 📋 Step 5: Format Your Google Sheet (Optional)

1. **Run the Setup Function:**
   - Go back to your Google Apps Script
   - In the function dropdown, select `setupSheetFormatting`
   - Click the "Run" button ▶️
   - This will format your sheet with headers and styling

2. **Manual Formatting (Alternative):**
   - In your Google Sheet, select the header row
   - Make it bold and center-aligned
   - Add a background color
   - Freeze the first row

## 🎯 What You'll See in Your Sheet

Each survey submission will create a new row with:

| Column | Description |
|--------|-------------|
| Timestamp | When the survey was submitted |
| Survey ID | 1, 2, or 3 (which survey) |
| Survey Title | Full survey name |
| Language | German or Japanese |
| Question 1-5 | The actual responses |

## 🔒 Security Notes

- **For Production:** Change "Who has access" to "Anyone with Google Account" or restrict further
- **Rate Limiting:** Google Apps Script has daily quotas, but they're generous for surveys
- **Data Backup:** Consider exporting data regularly

## 🐛 Troubleshooting

### "Script not found" Error
- Make sure you deployed the script as a web app
- Check that the URL is correct in your JavaScript

### "Authorization required" Error
- Make sure you authorized the script when deploying
- Try redeploying and re-authorizing

### Data not appearing in sheet
- Check the browser console for errors
- Make sure your Google Sheet is the active spreadsheet
- Try running the `setupSheetFormatting` function

### CORS Errors
- This is normal for local testing
- Upload your survey to a web server for production use

## 📊 Sample Data Structure

Your sheet will look like this:

```
Timestamp           | Survey ID | Survey Title                    | Language | Q1        | Q2        | Q3                    | Q4                    | Q5
2024-01-15 14:30:25 | 1         | Technology Preferences Survey  | german   | Instagram | 4         | Smartphone, Laptop    | Slow internet         | Fast and reliable...
2024-01-15 14:35:12 | 2         | Food & Lifestyle Survey        | japanese | Italian   | 3         | Avocado Toast, Bubble | Pizza with pineapple  | Spaghetti carbonara...
```

## 🎉 You're All Set!

Once you've completed these steps:
1. Your survey will automatically send data to Google Sheets
2. Each submission creates a new row
3. Data is formatted and organized
4. You can analyze responses directly in Google Sheets
5. Export to Excel or other formats as needed

The integration is now complete! Test it out and let me know if you need any adjustments. 🚀 