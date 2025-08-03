// Survey data - all surveys have the same questions but different videos
const surveys = [
    {
        id: 1,
        title: "Research Survey - Version 1",
        videoUrl: "https://www.youtube.com/watch?v=lsCperzvhok",
        videoId: "lsCperzvhok"
    },
    {
        id: 2,
        title: "Research Survey - Version 2", 
        videoUrl: "https://www.youtube.com/watch?v=3jhRDJR5_c0",
        videoId: "3jhRDJR5_c0"
    },
    {
        id: 3,
        title: "Research Survey - Version 3",
        videoUrl: "https://www.youtube.com/watch?v=y4-jl17dUgE", 
        videoId: "y4-jl17dUgE"
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
        
        // Use the specific video for this survey
        this.videoIframe.src = `https://www.youtube.com/embed/${this.currentSurvey.videoId}`;
        
        // Update title with language indicator for testing
        const languageIndicator = this.selectedLanguage === 'german' ? '🇩🇪 GERMAN' : '🇯🇵 JAPANESE';
        document.querySelector('.title').textContent = `${this.currentSurvey.title} - ${languageIndicator}`;
        
        // Load survey questions
        this.renderSurvey();
        
        console.log(`📊 Loaded Survey ${this.currentSurvey.id}: ${this.currentSurvey.title} in ${this.selectedLanguage}`);
        console.log(`🎥 Video: ${this.currentSurvey.videoUrl}`);
    }

    renderSurvey() {
        this.surveyContent.innerHTML = '';
        
        // Use the universal questions for all surveys
        universalQuestions.forEach(question => {
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
            timestamp: new Date().toISOString(),
            responses: {}
        };
        
        this.currentSurvey.questions.forEach(question => {
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