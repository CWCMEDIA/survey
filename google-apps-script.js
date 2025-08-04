// Google Apps Script for Survey Data Collection
// Deploy this as a web app to receive survey submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the row data
    const rowData = formatSurveyData(data);
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    autoResizeColumns(sheet);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Data received successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function formatSurveyData(data) {
  const timestamp = new Date(data.timestamp);
  const formattedDate = timestamp.toLocaleString();
  
  // Create headers if this is the first submission
  const sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getLastRow() === 0) {
    const headers = createHeaders();
    sheet.appendRow(headers);
  }
  
  // Format the responses (same for all surveys now)
  const responses = [
    data.responses[1] || '', // Social media platform
    data.responses[2] || '', // Tech-savviness rating
    Array.isArray(data.responses[3]) ? data.responses[3].join(', ') : data.responses[3] || '', // Devices owned
    data.responses[4] || '', // Most annoying thing about tech
    data.responses[5] || ''  // Ideal smartphone description
  ];
  
  // Return the complete row data
  return [
    formattedDate,           // Timestamp
    data.surveyId,           // Survey ID (1, 2, or 3)
    data.surveyTitle,        // Survey Title
    data.language,           // Language (german/japanese)
    data.videoUrl || '',     // Video URL that was shown
    ...responses             // Spread the responses
  ];
}

function createHeaders() {
  const questionHeaders = [
    'Social Media Platform',
    'Tech-Savviness Rating', 
    'Devices Owned',
    'Most Annoying Tech Thing',
    'Ideal Smartphone Description'
  ];
  
  return [
    'Timestamp',
    'Survey ID',
    'Survey Title', 
    'Language',
    'Video URL',
    ...questionHeaders
  ];
}

function autoResizeColumns(sheet) {
  const lastColumn = sheet.getLastColumn();
  for (let i = 1; i <= lastColumn; i++) {
    sheet.autoResizeColumn(i);
  }
}

// Optional: Function to set up the sheet formatting
function setupSheetFormatting() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Set up headers if they don't exist
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Survey ID', 
      'Survey Title',
      'Language',
      'Question 1',
      'Question 2',
      'Question 3',
      'Question 4',
      'Question 5'
    ];
    sheet.appendRow(headers);
  }
  
  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  headerRange.setBackground('#667eea');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Add borders
  const dataRange = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());
  dataRange.setBorder(true, true, true, true, true, true);
  
  // Auto-resize columns
  autoResizeColumns(sheet);
  
  // Freeze the header row
  sheet.setFrozenRows(1);
}

// Test function to verify the setup
function testConnection() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: "Google Apps Script is working correctly",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
} 