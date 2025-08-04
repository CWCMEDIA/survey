// Video collections for each language
const germanVideos = [
    {
        id: "yUJC60rE_Mo",
        url: "https://youtu.be/yUJC60rE_Mo"
    },
    {
        id: "GfaGvQaS3n0", 
        url: "https://youtu.be/GfaGvQaS3n0"
    },
    {
        id: "4wu05H7vofQ",
        url: "https://youtu.be/4wu05H7vofQ"
    }
];

const japaneseVideos = [
    {
        id: "DO3jsDSufbA",
        url: "https://youtu.be/DO3jsDSufbA"
    },
    {
        id: "fVZ-z4_5WFQ",
        url: "https://youtu.be/fVZ-z4_5WFQ"
    },
    {
        id: "UcNUFn0C7Jk",
        url: "https://youtu.be/UcNUFn0C7Jk"
    }
];

// Survey data - all surveys have the same questions but different videos based on language
const surveys = [
    {
        id: 1,
        title: "Research Survey - Version 1"
    },
    {
        id: 2,
        title: "Research Survey - Version 2"
    },
    {
        id: 3,
        title: "Research Survey - Version 3"
    }
];

// Universal question set for all surveys
const universalQuestions = [
    {
        id: 1,
        type: "radio",
        question: "What's your favorite social media platform?",
        options: ["Instagram", "TikTok", "Twitter", "Facebook", "LinkedIn"]
    },
    {
        id: 2,
        type: "rating",
        question: "How would you rate your tech-savviness?",
        options: ["1 - Beginner", "2", "3 - Average", "4", "5 - Expert"]
    },
    {
        id: 3,
        type: "checkbox",
        question: "Which devices do you own? (Select all that apply)",
        options: ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Gaming Console", "Smart TV"]
    },
    {
        id: 4,
        type: "text",
        question: "What's the most annoying thing about modern technology?"
    },
    {
        id: 5,
        type: "textarea",
        question: "Describe your ideal smartphone in 3 sentences or less."
    }
];

// Japanese questions for Section 1 (Basic Information)
const japaneseQuestions = [
    {
        id: 1,
        type: "radio",
        question: "年齢：",
        options: ["18–24歳", "25–34歳", "35–44歳", "45–54歳", "55–64歳", "65歳以上"]
    },
    {
        id: 2,
        type: "radio",
        question: "性別：",
        options: ["男性", "女性", "その他", "回答しない"]
    },
    {
        id: 3,
        type: "radio",
        question: "居住国：",
        options: ["ドイツ", "日本", "その他"]
    },
    {
        id: 4,
        type: "radio",
        question: "文化的所属（自己認識）：",
        options: ["ドイツ文化", "日本文化", "その他"]
    },
    {
        id: 5,
        type: "radio",
        question: "最終学歴：",
        options: ["高校卒業", "専門学校・短大卒業", "大学卒業", "大学院修了", "その他"]
    },
    {
        id: 6,
        type: "radio",
        question: "現在の就業状況：",
        options: ["正社員（フルタイム）", "契約社員・派遣社員", "パート・アルバイト", "学生", "無職", "その他"]
    },
    {
        id: 7,
        type: "radio",
        question: "毎月の可処分所得（手取り）（任意回答）：",
        options: ["250,000円未満", "250,000円～300,000円", "300,000円～350,000円", "350,000円～400,000円", "400,000円以上"]
    },
    {
        id: 8,
        type: "radio",
        question: "環境や社会のための取り組み（例：エコ、リサイクル）は、どのくらい大切だと思いますか？",
        options: ["とても大切だと思う", "まあ大切だと思う", "あまり大切だと思わない", "全く大切だと思わない"]
    }
];

// No longer needed - each survey now has its own specific video

class SurveyApp {
    constructor() {
        this.currentSurvey = null;
        this.selectedLanguage = null;
        this.form = document.getElementById('surveyForm');
        this.surveyContent = document.getElementById('surveyContent');
        this.videoIframe = document.getElementById('surveyVideo');
        this.languageModal = document.getElementById('languageModal');
        
        this.init();
    }

    init() {
        // Show language selection modal first
        this.showLanguageModal();
    }

    showLanguageModal() {
        // Hide the main survey content initially
        document.querySelector('.container').style.display = 'none';
        
        // Show the language modal
        this.languageModal.style.display = 'flex';
        
        // Add event listeners to language buttons
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const language = e.currentTarget.getAttribute('data-language');
                this.selectLanguage(language);
            });
        });
    }

    selectLanguage(language) {
        this.selectedLanguage = language;
        
        // Hide the modal
        this.languageModal.style.display = 'none';
        
        // Show the main survey content
        document.querySelector('.container').style.display = 'block';
        
        // Load the survey with the selected language
        this.loadRandomSurvey();
        this.setupEventListeners();
        
        console.log(`🌍 Language selected: ${language}`);
    }

    loadRandomSurvey() {
        // Randomly select a survey
        const randomIndex = Math.floor(Math.random() * surveys.length);
        this.currentSurvey = surveys[randomIndex];
        
        // Select a random video based on the chosen language
        let selectedVideo;
        if (this.selectedLanguage === 'german') {
            const randomVideoIndex = Math.floor(Math.random() * germanVideos.length);
            selectedVideo = germanVideos[randomVideoIndex];
        } else {
            const randomVideoIndex = Math.floor(Math.random() * japaneseVideos.length);
            selectedVideo = japaneseVideos[randomVideoIndex];
        }
        
        // Store the selected video for data collection
        this.currentVideo = selectedVideo;
        
        // Use the selected video for this survey
        this.videoIframe.src = `https://www.youtube.com/embed/${selectedVideo.id}`;
        
        // Update title with language indicator for testing
        const languageIndicator = this.selectedLanguage === 'german' ? '🇩🇪 GERMAN' : '🇯🇵 JAPANESE';
        document.querySelector('.title').textContent = `${this.currentSurvey.title} - ${languageIndicator}`;
        
        // Load survey questions
        this.renderSurvey();
        
        console.log(`📊 Loaded Survey ${this.currentSurvey.id}: ${this.currentSurvey.title} in ${this.selectedLanguage}`);
        console.log(`🎥 Video: ${selectedVideo.url}`);
    }

    renderSurvey() {
        this.surveyContent.innerHTML = '';
        
        // Choose questions based on selected language
        const questionsToUse = this.selectedLanguage === 'japanese' ? japaneseQuestions : universalQuestions;
        
        // Add section header for Japanese
        if (this.selectedLanguage === 'japanese') {
            const sectionHeader = document.createElement('div');
            sectionHeader.className = 'section-header';
            sectionHeader.innerHTML = '<h2>基本情報</h2>';
            this.surveyContent.appendChild(sectionHeader);
        }
        
        // Use the appropriate questions for the selected language
        questionsToUse.forEach(question => {
            const questionElement = this.createQuestionElement(question);
            this.surveyContent.appendChild(questionElement);
        });
    }

    createQuestionElement(question) {
        const questionGroup = document.createElement('div');
        questionGroup.className = 'question-group';
        
        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.innerHTML = `
            <span class="question-number">${question.id}</span>
            ${question.question}
        `;
        
        questionGroup.appendChild(questionTitle);
        
        switch (question.type) {
            case 'radio':
                questionGroup.appendChild(this.createRadioOptions(question));
                break;
            case 'checkbox':
                questionGroup.appendChild(this.createCheckboxOptions(question));
                break;
            case 'rating':
                questionGroup.appendChild(this.createRatingOptions(question));
                break;
            case 'text':
                questionGroup.appendChild(this.createTextInput(question));
                break;
            case 'textarea':
                questionGroup.appendChild(this.createTextareaInput(question));
                break;
        }
        
        return questionGroup;
    }

    createRadioOptions(question) {
        const optionsGroup = document.createElement('div');
        optionsGroup.className = 'options-group';
        
        question.options.forEach((option, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question_${question.id}`;
            input.id = `q${question.id}_opt${index}`;
            input.value = option;
            
            const label = document.createElement('label');
            label.htmlFor = `q${question.id}_opt${index}`;
            label.textContent = option;
            
            optionItem.appendChild(input);
            optionItem.appendChild(label);
            optionsGroup.appendChild(optionItem);
        });
        
        return optionsGroup;
    }

    createCheckboxOptions(question) {
        const optionsGroup = document.createElement('div');
        optionsGroup.className = 'options-group';
        
        question.options.forEach((option, index) => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = `question_${question.id}`;
            input.id = `q${question.id}_opt${index}`;
            input.value = option;
            
            const label = document.createElement('label');
            label.htmlFor = `q${question.id}_opt${index}`;
            label.textContent = option;
            
            optionItem.appendChild(input);
            optionItem.appendChild(label);
            optionsGroup.appendChild(optionItem);
        });
        
        return optionsGroup;
    }

    createRatingOptions(question) {
        const ratingGroup = document.createElement('div');
        ratingGroup.className = 'rating-group';
        
        question.options.forEach((option, index) => {
            const ratingOption = document.createElement('div');
            ratingOption.className = 'rating-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question_${question.id}`;
            input.id = `q${question.id}_rating${index}`;
            input.value = option;
            
            const label = document.createElement('label');
            label.htmlFor = `q${question.id}_rating${index}`;
            label.textContent = option;
            
            ratingOption.appendChild(input);
            ratingOption.appendChild(label);
            ratingGroup.appendChild(ratingOption);
        });
        
        return ratingGroup;
    }

    createTextInput(question) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input';
        input.name = `question_${question.id}`;
        input.placeholder = 'Type your answer here...';
        return input;
    }

    createTextareaInput(question) {
        const textarea = document.createElement('textarea');
        textarea.className = 'text-input textarea-input';
        textarea.name = `question_${question.id}`;
        textarea.placeholder = 'Type your detailed answer here...';
        return textarea;
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const submitBtn = this.form.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        
        // Collect form data
        const formData = this.collectFormData();
        
        // Simulate submission delay
        setTimeout(() => {
            this.processSubmission(formData);
            
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }, 2000);
    }

    collectFormData() {
        const formData = {
            surveyId: this.currentSurvey.id,
            surveyTitle: this.currentSurvey.title,
            language: this.selectedLanguage,
            videoUrl: this.currentVideo ? this.currentVideo.url : '',
            timestamp: new Date().toISOString(),
            responses: {}
        };
        
        // Choose questions based on selected language
        const questionsToUse = this.selectedLanguage === 'japanese' ? japaneseQuestions : universalQuestions;
        
        questionsToUse.forEach(question => {
            const questionName = `question_${question.id}`;
            
            if (question.type === 'checkbox') {
                // Handle multiple selections
                const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
            } else {
                // Handle single selection or text input
                const element = document.querySelector(`[name="${questionName}"]`);
                if (element) {
                    formData.responses[question.id] = element.value;
                }
            }
        });
        
        return formData;
    }

    async processSubmission(formData) {
        try {
            // Send data to Google Sheets
            const response = await this.sendToGoogleSheets(formData);
            
            if (response.success) {
                console.log('✅ Data sent to Google Sheets successfully');
                this.showSuccessMessage();
            } else {
                console.error('❌ Failed to send to Google Sheets:', response.error);
                this.showErrorMessage('Failed to submit. Please try again.');
            }
            
        } catch (error) {
            console.error('❌ Error sending to Google Sheets:', error);
            this.showErrorMessage('Network error. Please try again.');
        }
        
        // Also store in localStorage as backup
        this.storeSubmission(formData);
    }

    async sendToGoogleSheets(formData) {
        // Your Google Apps Script web app URL
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_0OP-jjTD5wWeZJYuuqEO5n5YK5LcGBCnxSenCzZ9loYqZILU6gy51SHrgm-FVTQM/exec';
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        return await response.json();
    }

    showErrorMessage(message) {
        this.surveyContent.innerHTML = `
            <div class="question-group" style="text-align: center;">
                <h2 style="color: #e53e3e; margin-bottom: 16px;">⚠️ Error</h2>
                <p style="font-size: 1.1rem; color: #4a5568; margin-bottom: 24px;">
                    ${message}
                </p>
                <button onclick="location.reload()" class="submit-btn" style="background: linear-gradient(135deg, #e53e3e, #c53030);">
                    Try Again
                </button>
            </div>
        `;
    }

    showSuccessMessage() {
        this.surveyContent.innerHTML = `
            <div class="question-group" style="text-align: center;">
                <h2 style="color: #667eea; margin-bottom: 16px;">🎉 Thank You!</h2>
                <p style="font-size: 1.1rem; color: #4a5568; margin-bottom: 24px;">
                    Your survey response has been submitted successfully.<br>
                    <small style="color: #888;">Language: ${this.selectedLanguage === 'german' ? '🇩🇪 German' : '🇯🇵 Japanese'}</small>
                </p>
                <button onclick="location.reload()" class="submit-btn" style="background: linear-gradient(135deg, #48bb78, #38a169);">
                    Take Another Survey
                </button>
            </div>
        `;
    }

    storeSubmission(formData) {
        // Get existing submissions or create new array
        const existingSubmissions = JSON.parse(localStorage.getItem('surveySubmissions') || '[]');
        existingSubmissions.push(formData);
        localStorage.setItem('surveySubmissions', JSON.stringify(existingSubmissions));
        
        console.log(`💾 Total submissions stored: ${existingSubmissions.length}`);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SurveyApp();
});

// Add some fun console messages
console.log('🎯 Survey App Loaded!');
console.log('🌍 Language selection enabled');
console.log('📊 Random survey selection active');
console.log('🎥 Random YouTube videos enabled');
console.log('💾 Responses stored in localStorage'); 