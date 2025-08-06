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
const japaneseQuestionsSection1 = [
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
        options: ["正社員（フルタイム）", "パート・アルバイト", "契約社員・派遣社員", "自営業・フリーランス", "学生", "無職", "その他"]
    },
    {
        id: 7,
        type: "radio",
        question: "毎月の手取り収入（税引き後・1人あたり）：",
        options: ["170,000円未満", "170,000円〜250,000円", "250,000円〜420,000円", "420,000円〜670,000円", "670,000円以上", "無回答"]
    },
    {
        id: 8,
        type: "likert",
        question: "環境や持続可能性のための取り組み（例：気候変動対策、資源の節約）は、どのくらい大切だと思いますか？<br><br>(1 = 全く大切だと思いません … 5 = とても大切だと思います)",
        options: ["1", "2", "3", "4", "5"]
    }
];

// Japanese questions for Section 2 (Cultural Orientation)
const japaneseQuestionsSection2 = [
    {
        id: 9,
        type: "likert-multiple",
        question: "次の文にどの程度同意しますか？<br><br>(1 = 全くそう思いません … 5 = とてもそう思います)",
        options: ["1", "2", "3", "4", "5"],
        statements: [
            "独立して行動するよりも、グループの一員であるほうがよいと思います。",
            "意思決定は集団で行うことが重要だと思います。",
            "調和と合意を保つことが大切だと思います。"
        ]
    },
    {
        id: 10,
        type: "radio",
        question: "表示された広告の主な内容は何でしたか？",
        options: ["環境や持続可能性", "製品の味や楽しみ方", "特に強調点のない一般的な情報", "その他"]
    },
    {
        id: 11,
        type: "likert-multiple",
        question: "次の文にどの程度同意しますか？<br><br>(1 = 全くそう思いません … 5 = とてもそう思います)",
        options: ["1", "2", "3", "4", "5"],
        statements: [
            "この製造元を信頼できると思います。",
            "製造元は信頼できて、信頼性が高いと思います。",
            "製造元は、環境や社会に対して責任ある行動を取っていると思います。",
            "製造元は誠実に情報を伝えていると感じます。",
            "広告メッセージは本物らしいと感じます。"
        ]
    }
];

// German questions for Section 1 (Basic Information)
const germanQuestionsSection1 = [
    {
        id: 1,
        type: "radio",
        question: "Alter:",
        options: ["18–24 Jahre", "25–34 Jahre", "35–44 Jahre", "45–54 Jahre", "55–64 Jahre", "65 Jahre oder älter"]
    },
    {
        id: 2,
        type: "radio",
        question: "Geschlecht:",
        options: ["Männlich", "Weiblich", "Divers", "Keine Angabe"]
    },
    {
        id: 3,
        type: "radio",
        question: "Wohnsitzland:",
        options: ["Deutschland", "Japan", "Anderes"]
    },
    {
        id: 4,
        type: "radio",
        question: "Kulturelle Zugehörigkeit (Selbstidentifikation):",
        options: ["Deutsch", "Japanisch", "Andere"]
    },
    {
        id: 5,
        type: "radio",
        question: "Bildungsstand:",
        options: ["Abitur / Matura", "Berufsausbildung / Fachschule", "Bachelor / Hochschulabschluss", "Master / Promotion", "Anderes"]
    },
    {
        id: 6,
        type: "radio",
        question: "Beschäftigungsstatus:",
        options: ["Vollzeit angestellt (Festanstellung)", "Teilzeit angestellt", "Befristet / Leiharbeit (Vertrag oder Zeitarbeit)", "Selbstständig / Freiberuflich", "Student/in", "Arbeitslos / Nicht erwerbstätig", "Anderes"]
    },
    {
        id: 7,
        type: "radio",
        question: "Monatliches Nettoeinkommen (nach Steuern, pro Person):",
        options: ["Unter 1.100 €", "1.100 – 1.600 €", "1.600 – 2.800 €", "2.800 – 4.400 €", "Über 4.400 €", "Keine Angabe"]
    },
    {
        id: 8,
        type: "likert",
        question: "Wie wichtig finden Sie Maßnahmen für Umwelt und Nachhaltigkeit (z. B. Klimaschutz, Ressourcenschonung)?<br><br>(1 = gar nicht wichtig … 5 = sehr wichtig)",
        options: ["1", "2", "3", "4", "5"]
    }
];

// German questions for Section 2 (Cultural Orientation)
const germanQuestionsSection2 = [
    {
        id: 9,
        type: "likert-multiple",
        question: "Inwieweit stimmen Sie den folgenden Aussagen zu?<br><br>(1 = stimme überhaupt nicht zu … 5 = stimme voll zu)",
        options: ["1", "2", "3", "4", "5"],
        statements: [
            "Ich bin lieber Teil einer Gruppe als unabhängig zu handeln.",
            "Es ist mir wichtig, dass Entscheidungen gemeinschaftlich getroffen werden.",
            "Ich finde es wichtig, Harmonie und Konsens zu bewahren."
        ]
    },
    {
        id: 10,
        type: "radio",
        question: "Worauf lag der Schwerpunkt der angezeigten Werbung?",
        options: ["Umwelt und Nachhaltigkeit", "Produktgenuss oder Geschmack", "Allgemeine Informationen ohne Schwerpunkt", "Anderes"]
    },
    {
        id: 11,
        type: "likert-multiple",
        question: "Bitte geben Sie an, inwieweit Sie den folgenden Aussagen zustimmen.<br><br>(1 = stimme überhaupt nicht zu … 5 = stimme voll zu)",
        options: ["1", "2", "3", "4", "5"],
        statements: [
            "Ich vertraue dem Hersteller des Produkts.",
            "Ich halte den Hersteller für glaubwürdig und zuverlässig.",
            "Ich denke, dass der Hersteller verantwortungsvoll mit Umwelt und Gesellschaft umgeht.",
            "Ich habe den Eindruck, dass der Hersteller ehrlich kommuniziert.",
            "Die Werbebotschaft erscheint mir authentisch."
        ]
    }
];

// No longer needed - each survey now has its own specific video

class SurveyApp {
    constructor() {
        this.currentSurvey = null;
        this.selectedLanguage = null;
        this.form = document.getElementById('surveyForm');
        this.surveyContent = document.getElementById('surveyContent');
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
        
        // Store the selected video URL for this survey
        this.currentVideoUrl = `https://www.youtube.com/embed/${selectedVideo.id}`;
        
        // Update title based on language
        if (this.selectedLanguage === 'japanese') {
            document.querySelector('.title').textContent = 'Leviteaに関するアンケート';
            document.querySelector('.subtitle').textContent = '（この調査は匿名で行われ、回答は研究目的でのみ使用されます。所要時間は約4分です。）';
        } else if (this.selectedLanguage === 'german') {
            document.querySelector('.title').textContent = 'Levitea Umfrage';
            document.querySelector('.subtitle').textContent = '(Diese Umfrage wird anonym durchgeführt und die Antworten werden nur zu Forschungszwecken verwendet. Dauer: ca. 4 Minuten.)';
        } else {
            document.querySelector('.title').textContent = this.currentSurvey.title;
            document.querySelector('.subtitle').textContent = 'Your feedback helps us improve our research';
        }
        
        // Load survey questions
        this.renderSurvey();
        
        console.log(`📊 Loaded Survey ${this.currentSurvey.id}: ${this.currentSurvey.title} in ${this.selectedLanguage}`);
        console.log(`🎥 Video: ${selectedVideo.url}`);
    }

    renderSurvey() {
        this.surveyContent.innerHTML = '';
        
        if (this.selectedLanguage === 'japanese') {
            // Render Japanese survey with sections
            this.renderJapaneseSurvey();
        } else if (this.selectedLanguage === 'german') {
            // Render German survey with sections
            this.renderGermanSurvey();
        } else {
            // Render English survey
            universalQuestions.forEach(question => {
                const questionElement = this.createQuestionElement(question);
                this.surveyContent.appendChild(questionElement);
            });
        }
    }

    renderJapaneseSurvey() {
        // Section 1: Basic Information
        const section1Header = document.createElement('div');
        section1Header.className = 'section-header';
        section1Header.innerHTML = '<h2>基本情報</h2>';
        this.surveyContent.appendChild(section1Header);
        
        // Add Section 1 questions
        japaneseQuestionsSection1.forEach(question => {
            const questionElement = this.createQuestionElement(question);
            this.surveyContent.appendChild(questionElement);
        });
        
        // Section 2: Cultural Orientation
        const section2Header = document.createElement('div');
        section2Header.className = 'section-header';
        section2Header.innerHTML = '<h2>文化的志向</h2>';
        this.surveyContent.appendChild(section2Header);
        
        // Add first question of Section 2
        const firstSection2Question = this.createQuestionElement(japaneseQuestionsSection2[0]);
        this.surveyContent.appendChild(firstSection2Question);
        
        // Add new header for video questions
        const videoHeader = document.createElement('div');
        videoHeader.className = 'section-header';
        videoHeader.innerHTML = '<h2>広告動画に関する質問</h2>';
        this.surveyContent.appendChild(videoHeader);
        
        // Add disclaimer and video after first question of Section 2
        const disclaimerContainer = document.createElement('div');
        disclaimerContainer.className = 'disclaimer-container';
        disclaimerContainer.innerHTML = `
            <div class="disclaimer-text">
                <strong>調査に関する注意:</strong><br>
                これから、架空の飲料 Levitea の広告をご覧いただきます。<br>
                広告のメッセージに注目し、映像の質は評価対象外としてください。
            </div>
        `;
        this.surveyContent.appendChild(disclaimerContainer);
        
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="315" 
                src="${this.currentVideoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        this.surveyContent.appendChild(videoContainer);
        
        // Add remaining Section 2 questions
        for (let i = 1; i < japaneseQuestionsSection2.length; i++) {
            const questionElement = this.createQuestionElement(japaneseQuestionsSection2[i]);
            this.surveyContent.appendChild(questionElement);
        }
        
        // Test the questions after they're rendered
        setTimeout(() => {
            this.testJapaneseQuestions();
        }, 100);
    }

    renderGermanSurvey() {
        // Section 1: Basic Information
        const section1Header = document.createElement('div');
        section1Header.className = 'section-header';
        section1Header.innerHTML = '<h2>Demografische Fragen</h2>';
        this.surveyContent.appendChild(section1Header);
        
        // Add Section 1 questions
        germanQuestionsSection1.forEach(question => {
            const questionElement = this.createQuestionElement(question);
            this.surveyContent.appendChild(questionElement);
        });
        
        // Section 2: Cultural Orientation
        const section2Header = document.createElement('div');
        section2Header.className = 'section-header';
        section2Header.innerHTML = '<h2>Kulturelle Orientierung</h2>';
        this.surveyContent.appendChild(section2Header);
        
        // Add first question of Section 2
        const firstSection2Question = this.createQuestionElement(germanQuestionsSection2[0]);
        this.surveyContent.appendChild(firstSection2Question);
        
        // Add new header for video questions
        const videoHeader = document.createElement('div');
        videoHeader.className = 'section-header';
        videoHeader.innerHTML = '<h2>Fragen zum Werbevideo</h2>';
        this.surveyContent.appendChild(videoHeader);
        
        // Add disclaimer and video after first question of Section 2
        const disclaimerContainer = document.createElement('div');
        disclaimerContainer.className = 'disclaimer-container';
        disclaimerContainer.innerHTML = `
            <div class="disclaimer-text">
                <strong>Hinweis zur Studie:</strong><br>
                Sie werden nun eine Werbung für das fiktive Getränk Levitea sehen.<br>
                Bitte konzentrieren Sie sich auf die Werbebotschaft und bewerten Sie nicht die Videoqualität.
            </div>
        `;
        this.surveyContent.appendChild(disclaimerContainer);
        
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="315" 
                src="${this.currentVideoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        this.surveyContent.appendChild(videoContainer);
        
        // Add remaining Section 2 questions
        for (let i = 1; i < germanQuestionsSection2.length; i++) {
            const questionElement = this.createQuestionElement(germanQuestionsSection2[i]);
            this.surveyContent.appendChild(questionElement);
        }
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
            case 'likert':
                questionGroup.appendChild(this.createLikertOptions(question));
                break;
            case 'likert-multiple':
                questionGroup.appendChild(this.createLikertMultipleOptions(question));
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
            
            // Add event listener for debugging
            input.addEventListener('change', (e) => {
                console.log(`Radio clicked: Question ${question.id}, Option: ${option}, Value: ${e.target.value}`);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `q${question.id}_opt${index}`;
            label.textContent = option;
            
            // Also make the label clickable
            label.addEventListener('click', () => {
                input.checked = true;
                console.log(`Label clicked: Question ${question.id}, Option: ${option}`);
            });
            
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

    createLikertOptions(question) {
        const likertGroup = document.createElement('div');
        likertGroup.className = 'likert-group';
        
        question.options.forEach((option, index) => {
            const likertOption = document.createElement('div');
            likertOption.className = 'likert-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question_${question.id}`;
            input.id = `q${question.id}_likert${index}`;
            input.value = option;
            
            // Add event listener for debugging
            input.addEventListener('change', (e) => {
                console.log(`Likert clicked: Question ${question.id}, Option: ${option}, Value: ${e.target.value}`);
            });
            
            const label = document.createElement('label');
            label.htmlFor = `q${question.id}_likert${index}`;
            label.textContent = option;
            
            // Make the entire likert option clickable
            likertOption.addEventListener('click', () => {
                input.checked = true;
                console.log(`Likert option clicked: Question ${question.id}, Option: ${option}`);
            });
            
            likertOption.appendChild(input);
            likertOption.appendChild(label);
            likertGroup.appendChild(likertOption);
        });
        
        return likertGroup;
    }

    createLikertMultipleOptions(question) {
        const container = document.createElement('div');
        container.className = 'likert-multiple-container';
        
        // Add statements with individual Likert scales
        question.statements.forEach((statement, statementIndex) => {
            const statementGroup = document.createElement('div');
            statementGroup.className = 'statement-group';
            
            const statementText = document.createElement('p');
            statementText.className = 'statement-text';
            statementText.textContent = statement;
            statementGroup.appendChild(statementText);
            
            const likertGroup = document.createElement('div');
            likertGroup.className = 'likert-group';
            
            question.options.forEach((option, optionIndex) => {
                const likertOption = document.createElement('div');
                likertOption.className = 'likert-option';
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question_${question.id}_statement_${statementIndex}`;
                input.id = `q${question.id}_s${statementIndex}_o${optionIndex}`;
                input.value = option;
                
                // Add event listener for debugging
                input.addEventListener('change', (e) => {
                    console.log(`Likert-multiple clicked: Question ${question.id}, Statement ${statementIndex + 1}, Option: ${option}, Value: ${e.target.value}`);
                });
                
                const label = document.createElement('label');
                label.htmlFor = `q${question.id}_s${statementIndex}_o${optionIndex}`;
                label.textContent = option;
                
                // Make the entire likert option clickable
                likertOption.addEventListener('click', () => {
                    input.checked = true;
                    console.log(`Likert-multiple option clicked: Question ${question.id}, Statement ${statementIndex + 1}, Option: ${option}`);
                });
                
                likertOption.appendChild(input);
                likertOption.appendChild(label);
                likertGroup.appendChild(likertOption);
            });
            
            statementGroup.appendChild(likertGroup);
            container.appendChild(statementGroup);
        });
        
        return container;
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
        
        // Validate form before submission
        if (!this.validateForm()) {
            alert('Please answer all required questions before submitting.');
            return;
        }
        
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
    
    validateForm() {
        let isValid = true;
        const questions = this.selectedLanguage === 'japanese' ? 
            [...japaneseQuestionsSection1, ...japaneseQuestionsSection2] : 
            this.selectedLanguage === 'german' ? 
            [...germanQuestionsSection1, ...germanQuestionsSection2] : 
            universalQuestions;
        
        questions.forEach(question => {
            const questionName = `question_${question.id}`;
            
            if (question.type === 'radio' || question.type === 'likert') {
                const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                if (!checkedRadio) {
                    console.log(`Missing answer for question ${question.id}`);
                    isValid = false;
                }
            } else if (question.type === 'likert-multiple') {
                question.statements.forEach((statement, statementIndex) => {
                    const statementName = `question_${question.id}_statement_${statementIndex}`;
                    const checkedRadio = document.querySelector(`input[name="${statementName}"]:checked`);
                    if (!checkedRadio) {
                        console.log(`Missing answer for question ${question.id} statement ${statementIndex + 1}`);
                        isValid = false;
                    }
                });
            } else if (question.type === 'text' || question.type === 'textarea') {
                const element = document.querySelector(`[name="${questionName}"]`);
                if (!element || !element.value.trim()) {
                    console.log(`Missing text answer for question ${question.id}`);
                    isValid = false;
                }
            }
        });
        
        return isValid;
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
        
        console.log('Collecting data for language:', this.selectedLanguage);
        
        if (this.selectedLanguage === 'japanese') {
            console.log('Collecting Japanese responses...');
            // Collect Japanese Section 1 responses
            japaneseQuestionsSection1.forEach(question => {
                const questionName = `question_${question.id}`;
                
                if (question.type === 'checkbox') {
                    const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
                } else if (question.type === 'radio' || question.type === 'likert') {
                    // For radio buttons, find the checked one
                    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = checkedRadio ? checkedRadio.value : '';
                    console.log(`Japanese Q${question.id}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                } else {
                    const element = document.querySelector(`[name="${questionName}"]`);
                    if (element) {
                        formData.responses[question.id] = element.value;
                        console.log(`Japanese Q${question.id}: ${element.value}`);
                    } else {
                        console.log(`Japanese Q${question.id}: Element not found for ${questionName}`);
                    }
                }
            });
            
            // Collect Japanese Section 2 responses
            japaneseQuestionsSection2.forEach(question => {
                if (question.type === 'likert-multiple') {
                    // Handle multiple statements with individual Likert scales
                    const statementResponses = [];
                    question.statements.forEach((statement, statementIndex) => {
                        const questionName = `question_${question.id}_statement_${statementIndex}`;
                        const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                        statementResponses.push(checkedRadio ? checkedRadio.value : '');
                        console.log(`Japanese Q${question.id} Statement ${statementIndex + 1}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                    });
                    formData.responses[question.id] = statementResponses;
                } else if (question.type === 'radio') {
                    const questionName = `question_${question.id}`;
                    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = checkedRadio ? checkedRadio.value : '';
                    console.log(`Japanese Q${question.id}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                } else {
                    const questionName = `question_${question.id}`;
                    
                    if (question.type === 'checkbox') {
                        const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                        formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
                    } else {
                        const element = document.querySelector(`[name="${questionName}"]`);
                        if (element) {
                            formData.responses[question.id] = element.value;
                        }
                    }
                }
            });
        } else if (this.selectedLanguage === 'german') {
            console.log('Collecting German responses...');
            // Collect German Section 1 responses
            germanQuestionsSection1.forEach(question => {
                const questionName = `question_${question.id}`;
                
                if (question.type === 'checkbox') {
                    const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
                } else if (question.type === 'radio' || question.type === 'likert') {
                    // For radio buttons, find the checked one
                    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = checkedRadio ? checkedRadio.value : '';
                    console.log(`German Q${question.id}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                } else {
                    const element = document.querySelector(`[name="${questionName}"]`);
                    if (element) {
                        formData.responses[question.id] = element.value;
                        console.log(`German Q${question.id}: ${element.value}`);
                    } else {
                        console.log(`German Q${question.id}: Element not found for ${questionName}`);
                    }
                }
            });
            
            // Collect German Section 2 responses
            germanQuestionsSection2.forEach(question => {
                if (question.type === 'likert-multiple') {
                    // Handle multiple statements with individual Likert scales
                    const statementResponses = [];
                    question.statements.forEach((statement, statementIndex) => {
                        const questionName = `question_${question.id}_statement_${statementIndex}`;
                        const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                        statementResponses.push(checkedRadio ? checkedRadio.value : '');
                        console.log(`German Q${question.id} Statement ${statementIndex + 1}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                    });
                    formData.responses[question.id] = statementResponses;
                } else if (question.type === 'radio') {
                    const questionName = `question_${question.id}`;
                    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = checkedRadio ? checkedRadio.value : '';
                    console.log(`German Q${question.id}: ${checkedRadio ? checkedRadio.value : 'Not answered'}`);
                } else {
                    const questionName = `question_${question.id}`;
                    
                    if (question.type === 'checkbox') {
                        const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                        formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
                    } else {
                        const element = document.querySelector(`[name="${questionName}"]`);
                        if (element) {
                            formData.responses[question.id] = element.value;
                        }
                    }
                }
            });
        } else {
            // Collect English responses
            universalQuestions.forEach(question => {
                const questionName = `question_${question.id}`;
                
                if (question.type === 'checkbox') {
                    const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = Array.from(checkboxes).map(cb => cb.value);
                } else if (question.type === 'radio' || question.type === 'rating') {
                    const checkedRadio = document.querySelector(`input[name="${questionName}"]:checked`);
                    formData.responses[question.id] = checkedRadio ? checkedRadio.value : '';
                } else {
                    const element = document.querySelector(`[name="${questionName}"]`);
                    if (element) {
                        formData.responses[question.id] = element.value;
                    }
                }
            });
        }
        
        console.log('Final form data:', formData);
        return formData;
    }

    async processSubmission(formData) {
        try {
            // Send data to Formspark
            const response = await this.sendToFormspark(formData);
            
            if (response.success) {
                console.log('✅ Data sent to Formspark successfully');
                this.showSuccessMessage();
            } else {
                console.error('❌ Failed to send to Formspark:', response.error);
                this.showErrorMessage(`Failed to submit to Formspark: ${response.error}. Please try again.`);
            }
            
        } catch (error) {
            console.error('❌ Error sending to Formspark:', error);
            this.showErrorMessage(`Network error: ${error.message}. Please check your internet connection and try again.`);
        }
    }

    async sendToFormspark(formData) {
        try {
            console.log('📤 Sending data to Formspark:', formData);
            
            // Format data for Formspark
            const formsparkData = {
                formId: 'blQ5Sc5jt',
                data: {
                    surveyId: formData.surveyId,
                    surveyTitle: formData.surveyTitle,
                    language: formData.language,
                    videoUrl: formData.videoUrl || '',
                    timestamp: formData.timestamp,
                    responses: JSON.stringify(formData.responses)
                }
            };
            
            // Send to Formspark
            const response = await fetch('https://submit-form.com/blQ5Sc5jt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formsparkData.data)
            });
            
            console.log('📥 Response status:', response.status);
            
            if (response.ok) {
                console.log('✅ Data sent to Formspark successfully');
                return { success: true, message: "Data sent to Formspark successfully" };
            } else {
                const errorText = await response.text();
                console.error('❌ HTTP error:', response.status);
                console.error('❌ Error response:', errorText);
                return { success: false, error: `HTTP ${response.status}: ${errorText}` };
            }
            
        } catch (error) {
            console.error('❌ Network error:', error);
            return { success: false, error: error.message };
        }
    }
    

    
    emailSurveyData(formData) {
        // Create a mailto link with the survey data
        const subject = encodeURIComponent(`Survey Response - ${formData.language} - ${formData.surveyId}`);
        const body = encodeURIComponent(JSON.stringify(formData, null, 2));
        const mailtoLink = `mailto:connor@example.com?subject=${subject}&body=${body}`;
        
        // Open email client (optional)
        // window.open(mailtoLink);
        
        console.log('Survey data ready for email:', mailtoLink);
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
                    <small style="color: #888;">Language: ${this.selectedLanguage === 'german' ? '🇩🇪 German' : this.selectedLanguage === 'japanese' ? '🇯🇵 Japanese' : '🇺🇸 English'}</small>
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

    // Test function to verify all questions are working
    testJapaneseQuestions() {
        console.log('🧪 Testing Japanese Questions...');
        
        // Test Section 1 questions
        japaneseQuestionsSection1.forEach(question => {
            console.log(`Testing Question ${question.id}: ${question.question}`);
            console.log(`Options: ${question.options.join(', ')}`);
            
            // Check if elements exist
            const questionName = `question_${question.id}`;
            const elements = document.querySelectorAll(`[name="${questionName}"]`);
            console.log(`Found ${elements.length} elements for question ${question.id}`);
            
            if (question.type === 'radio' || question.type === 'likert') {
                const checkedElement = document.querySelector(`input[name="${questionName}"]:checked`);
                console.log(`Selected value: ${checkedElement ? checkedElement.value : 'None selected'}`);
            }
        });
        
        // Test Section 2 questions
        japaneseQuestionsSection2.forEach(question => {
            console.log(`Testing Question ${question.id}: ${question.question}`);
            
            if (question.type === 'likert-multiple') {
                question.statements.forEach((statement, statementIndex) => {
                    const questionName = `question_${question.id}_statement_${statementIndex}`;
                    const checkedElement = document.querySelector(`input[name="${questionName}"]:checked`);
                    console.log(`Statement ${statementIndex + 1}: ${checkedElement ? checkedElement.value : 'None selected'}`);
                });
            } else {
                const questionName = `question_${question.id}`;
                const checkedElement = document.querySelector(`input[name="${questionName}"]:checked`);
                console.log(`Selected value: ${checkedElement ? checkedElement.value : 'None selected'}`);
            }
        });
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