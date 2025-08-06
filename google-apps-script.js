// Google Apps Script for Survey Data Collection
// Deploy this as a web app to receive survey submissions

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    console.log('Received data:', data);

    // Handle test requests
    if (data.test) {
      return testConnection();
    }

    // Directly open the specific spreadsheet by URL
    const spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11nZZc3-0taBL0hxGX0XjmCw4U3bYi_w7JMxNWMpO8hY/edit");
    const sheet = spreadsheet.getSheetByName("Survey Answers");
    
    console.log('Sheet found:', sheet.getName());
    console.log('Current row count:', sheet.getLastRow());

    // Prepare the row data with proper formatting for German/Japanese surveys
    const rowData = formatSurveyData(data, sheet);
    
    console.log('Row data to append:', rowData);

    // Add the data as a new row
    sheet.appendRow(rowData);
    
    console.log('Row appended successfully');

    // Auto-resize columns for better readability
    autoResizeColumns(sheet);

    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: "Data received successfully",
        rowCount: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');

  } catch (error) {
    console.error('Error in doPost:', error);
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

// Handle CORS preflight requests
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Format survey data into a single row for the sheet
function formatSurveyData(data, sheet) {
  const timestamp = new Date(data.timestamp);
  const formattedDate = timestamp.toLocaleString();
  
  console.log('Formatting data for language:', data.language);
  
  // Create headers if this is the first submission
  if (sheet.getLastRow() === 0) {
    console.log('Creating headers for first submission');
    const headers = createHeaders(data.language);
    sheet.appendRow(headers);
    console.log('Headers created:', headers);
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

// Automatically resize columns for better readability
function autoResizeColumns(sheet) {
  const lastColumn = sheet.getLastColumn();
  for (let i = 1; i <= lastColumn; i++) {
    sheet.autoResizeColumn(i);
  }
}

// Test function to verify the setup
function testConnection() {
  try {
    const spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11nZZc3-0taBL0hxGX0XjmCw4U3bYi_w7JMxNWMpO8hY/edit");
    const sheet = spreadsheet.getSheetByName("Survey Answers");
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: "Google Apps Script is working correctly",
        timestamp: new Date().toISOString(),
        sheetName: sheet.getName(),
        rowCount: sheet.getLastRow(),
        columnCount: sheet.getLastColumn()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString(),
        message: "Failed to connect to Google Sheet"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to add sample data manually
function testAddSampleData() {
  try {
    const spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11nZZc3-0taBL0hxGX0XjmCw4U3bYi_w7JMxNWMpO8hY/edit");
    const sheet = spreadsheet.getSheetByName("Survey Answers");
    
    // Create sample data
    const sampleData = {
      surveyId: 1,
      surveyTitle: "Test Survey",
      language: "german",
      videoUrl: "https://youtu.be/test",
      timestamp: new Date().toISOString(),
      responses: {
        1: "25–34 Jahre",
        2: "Männlich",
        3: "Deutschland",
        4: "Deutsch",
        5: "Bachelor / Hochschulabschluss",
        6: "Vollzeit angestellt (Festanstellung)",
        7: "1.600 – 2.800 €",
        8: "4",
        9: ["3", "4", "3"],
        10: "Umwelt und Nachhaltigkeit",
        11: ["4", "3", "4", "3", "4"]
      }
    };
    
    // Format the data
    const rowData = formatSurveyData(sampleData, sheet);
    
    // Add the data
    sheet.appendRow(rowData);
    
    console.log('✅ Sample data added successfully');
    console.log('Row count:', sheet.getLastRow());
    
    return "Sample data added successfully! Check your Google Sheet.";
    
  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    return "Error: " + error.toString();
  }
} 