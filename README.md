# 🎯 Random Survey System

A modern, responsive survey application that randomly selects from 3 different surveys each time it's accessed. Perfect for research studies where you want to randomize survey content.

## ✨ Features

- **🎲 Random Survey Selection**: Each time someone visits the link, they get a randomly selected survey
- **🎥 YouTube Video Integration**: Different videos for each survey version
- **🌍 Language Selection**: German and Japanese language options
- **📱 Modern & Responsive Design**: Beautiful, custom CSS with glassmorphism effects
- **🔄 Multiple Question Types**: Radio buttons, checkboxes, ratings, text inputs, and textareas
- **💾 Google Sheets Integration**: Automatic data collection and storage
- **⚡ Smooth Animations**: Hover effects, loading states, and smooth transitions

## 🎨 Design Features

- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Gradient Backgrounds**: Beautiful purple-blue gradient theme
- **Custom Animations**: Slide-up entrance, hover effects, and loading spinners
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Typography**: Inter font family for clean, readable text

## 📊 Survey Structure

### 3 Survey Versions (Same Questions, Different Videos)
- **Survey 1**: Video 1 + Universal Questions
- **Survey 2**: Video 2 + Universal Questions  
- **Survey 3**: Video 3 + Universal Questions

### Universal Question Set
1. **Social Media Platform** (Radio buttons)
2. **Tech-Savviness Rating** (1-5 scale)
3. **Devices Owned** (Checkboxes)
4. **Most Annoying Tech Thing** (Text input)
5. **Ideal Smartphone Description** (Textarea)

## 🚀 Live Demo

**🌐 Survey URL**: [https://yourusername.github.io/survey](https://yourusername.github.io/survey)

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/survey.git
   cd survey
   ```

2. **Open in browser:**
   ```bash
   open index.html
   ```
   Or simply double-click `index.html` in your file explorer.

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial survey deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your survey will be live at:**
   ```
   https://yourusername.github.io/survey
   ```

### Manual Deployment

If you prefer manual deployment:

1. **Create a new repository** on GitHub named `survey`
2. **Upload all files** to the repository
3. **Enable GitHub Pages** in repository settings
4. **Access your survey** at the provided URL

## 📊 Google Sheets Integration

The survey automatically sends data to Google Sheets. See `GOOGLE_SHEETS_SETUP.md` for setup instructions.

### Data Structure in Google Sheets:
```
Timestamp | Survey ID | Survey Title | Language | Q1 | Q2 | Q3 | Q4 | Q5
2024-01-15 | 1 | Research Survey - Version 1 | german | Instagram | 4 | Smartphone, Laptop | Slow internet | Fast and reliable...
```

## 🎯 Perfect for Research

This system is ideal for:
- **A/B Testing**: Compare different video impacts on responses
- **Randomized Studies**: Eliminate bias through randomization
- **User Experience Research**: Gather diverse feedback
- **Academic Studies**: Conduct controlled experiments
- **Market Research**: Test different video content effectiveness

## 📱 Mobile Experience

The survey is fully responsive and optimized for mobile devices:
- Touch-friendly buttons and inputs
- Optimized spacing for small screens
- Smooth scrolling and interactions
- Proper viewport handling

## 🔧 Customization

### Changing Videos
Edit the `surveys` array in `script.js`:
```javascript
const surveys = [
    {
        id: 1,
        title: "Research Survey - Version 1",
        videoUrl: "YOUR_VIDEO_URL_1",
        videoId: "YOUR_VIDEO_ID_1"
    },
    // ... more surveys
];
```

### Adding Questions
Edit the `universalQuestions` array in `script.js`:
```javascript
const universalQuestions = [
    {
        id: 1,
        type: "radio",
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3"]
    },
    // ... more questions
];
```

### Styling
All styling is in `styles.css` with CSS custom properties for easy theming.

## 🐛 Troubleshooting

### GitHub Pages Issues
- **404 Error**: Make sure `index.html` is in the root directory
- **CORS Errors**: Normal for local testing, upload to GitHub Pages
- **Script Not Loading**: Check file paths and case sensitivity

### Google Sheets Issues
- **Data Not Appearing**: Check the setup guide in `GOOGLE_SHEETS_SETUP.md`
- **Authorization Errors**: Re-deploy and re-authorize the Apps Script

## 📄 File Structure

```
survey/
├── index.html              # Main HTML file
├── styles.css              # Custom CSS styling
├── script.js               # JavaScript functionality
├── google-apps-script.js   # Google Apps Script code
├── GOOGLE_SHEETS_SETUP.md  # Setup instructions
├── README.md               # This file
└── .gitignore              # Git ignore rules
```

## 🔮 Future Enhancements

- **Backend Integration**: Connect to a real database
- **Analytics Dashboard**: View survey results and statistics
- **More Question Types**: Sliders, image selection, etc.
- **Survey Templates**: Pre-built survey templates
- **Export Features**: Export responses to CSV/Excel
- **User Authentication**: Track individual users

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the Google Sheets setup guide
3. Check browser console for error messages
4. Ensure all files are properly uploaded to GitHub

---

**Built with ❤️ for research and learning**

**Live Demo**: [https://yourusername.github.io/survey](https://yourusername.github.io/survey) 