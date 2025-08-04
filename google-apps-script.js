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
    const headers = createHeaders(data.language);
    sheet.appendRow(headers);
  }
  
  // Format the responses based on language
  let responses = [];
  
  if (data.language === 'japanese') {
    // Japanese questions (Section 1 - Basic Information)
    const section1Responses = [
      data.responses[1] || '', // 年齢 (Age)
      data.responses[2] || '', // 性別 (Gender)
      data.responses[3] || '', // 居住国 (Country of Residence)
      data.responses[4] || '', // 文化的所属 (Cultural Affiliation)
      data.responses[5] || '', // 最終学歴 (Education)
      data.responses[6] || '', // 現在の就業状況 (Employment Status)
      data.responses[7] || '', // 毎月の可処分所得 (Monthly Disposable Income)
      data.responses[8] || ''  // 環境や社会のための取り組み (Environmental/Social Initiatives)
    ];
    
    // Japanese questions (Section 2 - Cultural Orientation)
    const section2Responses = [
      data.responses[9] || '', // 文化的志向 (Cultural Orientation)
      data.responses[10] || '', // 操作チェック (Manipulation Check)
      Array.isArray(data.responses[11]) ? data.responses[11].join(', ') : data.responses[11] || '' // 製造元に関する評価 (Manufacturer Evaluation)
    ];
    
    responses = [...section1Responses, ...section2Responses];
  } else if (data.language === 'german') {
    // German questions (Section 1 - Basic Information)
    const section1Responses = [
      data.responses[1] || '', // Alter (Age)
      data.responses[2] || '', // Geschlecht (Gender)
      data.responses[3] || '', // Wohnsitzland (Country of Residence)
      data.responses[4] || '', // Kulturelle Zugehörigkeit (Cultural Affiliation)
      data.responses[5] || '', // Bildungsstand (Education)
      data.responses[6] || '', // Beschäftigungsstatus (Employment Status)
      data.responses[7] || '', // Monatliches verfügbares Konsumeinkommen (Monthly Disposable Income)
      data.responses[8] || ''  // Umweltbewusstsein (Environmental Awareness)
    ];
    
    // German questions (Section 2 - Cultural Orientation)
    const section2Responses = [
      data.responses[9] || '', // Kulturelle Orientierung (Cultural Orientation)
      data.responses[10] || '', // Manipulationscheck (Manipulation Check)
      Array.isArray(data.responses[11]) ? data.responses[11].join(', ') : data.responses[11] || '' // Einstellungen gegenüber dem Hersteller (Manufacturer Evaluation)
    ];
    
    responses = [...section1Responses, ...section2Responses];
  } else {
    // English questions (original universal questions)
    responses = [
      data.responses[1] || '', // Social media platform
      data.responses[2] || '', // Tech-savviness rating
      Array.isArray(data.responses[3]) ? data.responses[3].join(', ') : data.responses[3] || '', // Devices owned
      data.responses[4] || '', // Most annoying thing about tech
      data.responses[5] || ''  // Ideal smartphone description
    ];
  }
  
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

function createHeaders(language) {
  let questionHeaders = [];
  
  if (language === 'japanese') {
    // Japanese question headers (Section 1 - Basic Information)
    const section1Headers = [
      '年齢 (Age)',
      '性別 (Gender)',
      '居住国 (Country of Residence)',
      '文化的所属 (Cultural Affiliation)',
      '最終学歴 (Education)',
      '現在の就業状況 (Employment Status)',
      '毎月の可処分所得 (Monthly Disposable Income)',
      '環境や社会のための取り組み (Environmental/Social Initiatives)'
    ];
    
    // Japanese question headers (Section 2 - Cultural Orientation)
    const section2Headers = [
      '文化的志向 (Cultural Orientation)',
      '操作チェック (Manipulation Check)',
      '製造元に関する評価 (Manufacturer Evaluation)'
    ];
    
    questionHeaders = [...section1Headers, ...section2Headers];
  } else if (language === 'german') {
    // German question headers (Section 1 - Basic Information)
    const section1Headers = [
      'Alter (Age)',
      'Geschlecht (Gender)',
      'Wohnsitzland (Country of Residence)',
      'Kulturelle Zugehörigkeit (Cultural Affiliation)',
      'Bildungsstand (Education)',
      'Beschäftigungsstatus (Employment Status)',
      'Monatliches verfügbares Konsumeinkommen (Monthly Disposable Income)',
      'Umweltbewusstsein (Environmental Awareness)'
    ];
    
    // German question headers (Section 2 - Cultural Orientation)
    const section2Headers = [
      'Kulturelle Orientierung (Cultural Orientation)',
      'Manipulationscheck (Manipulation Check)',
      'Einstellungen gegenüber dem Hersteller (Manufacturer Evaluation)'
    ];
    
    questionHeaders = [...section1Headers, ...section2Headers];
  } else {
    // English question headers
    questionHeaders = [
      'Social Media Platform',
      'Tech-Savviness Rating', 
      'Devices Owned',
      'Most Annoying Tech Thing',
      'Ideal Smartphone Description'
    ];
  }
  
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