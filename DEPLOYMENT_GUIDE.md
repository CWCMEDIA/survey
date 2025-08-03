# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your survey to GitHub Pages and make it live on the internet!

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Git installed on your computer
- ✅ All survey files ready

## 🎯 Quick Deployment (Recommended)

### Step 1: Create GitHub Repository

1. **Go to GitHub**: [github.com](https://github.com)
2. **Click "New repository"** (green button)
3. **Repository name**: `survey`
4. **Make it Public** (required for free GitHub Pages)
5. **Don't initialize** with README (we already have files)
6. **Click "Create repository"**

### Step 2: Upload Your Files

**Option A: Using the deployment script (Easiest)**
```bash
# Run the deployment script
./deploy.sh
```

**Option B: Manual upload**
1. **Drag and drop** all files to GitHub
2. **Commit** the changes
3. **Push** to main branch

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top menu)
3. **Click "Pages"** (left sidebar)
4. **Under "Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"main"** branch
   - Choose **"/ (root)"** folder
5. **Click "Save"**

### Step 4: Your Survey is Live! 🎉

Your survey will be available at:
```
https://YOUR_USERNAME.github.io/survey
```

## 🔧 Manual Setup (Alternative)

If you prefer to do it manually:

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial survey deployment"
```

### 2. Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/survey.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
- Follow Step 3 above

## 📱 Testing Your Deployment

1. **Visit your survey URL**
2. **Test language selection** (German/Japanese)
3. **Fill out a survey** and submit
4. **Check Google Sheets** for data collection
5. **Test on mobile** devices

## 🐛 Troubleshooting

### Common Issues:

**❌ 404 Error**
- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled
- Wait a few minutes for deployment

**❌ CORS Errors**
- This is normal for local testing
- Upload to GitHub Pages to fix

**❌ Script Not Loading**
- Check file paths are correct
- Ensure case sensitivity matches

**❌ Google Sheets Not Working**
- Check the setup guide in `GOOGLE_SHEETS_SETUP.md`
- Verify your Apps Script is deployed

### Still Having Issues?

1. **Check browser console** for error messages
2. **Verify all files** are uploaded to GitHub
3. **Test locally** first with `open index.html`
4. **Check GitHub Pages settings** are correct

## 🔄 Updating Your Survey

To update your survey after deployment:

```bash
# Make your changes to the files
# Then run:
./deploy.sh
```

Or manually:
```bash
git add .
git commit -m "Update survey"
git push origin main
```

## 📊 Monitoring

- **GitHub Pages** will automatically rebuild when you push changes
- **Check deployment status** in your repository's "Actions" tab
- **Monitor Google Sheets** for incoming survey responses

## 🎯 Next Steps

Once deployed:
1. **Share your survey URL** with participants
2. **Monitor responses** in Google Sheets
3. **Analyze data** for your research
4. **Make updates** as needed

## 🌟 Pro Tips

- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: GitHub Pages automatically provides SSL certificates
- **Analytics**: Consider adding Google Analytics to track usage
- **Backup**: Regularly export your Google Sheets data

---

**🎉 Congratulations! Your survey is now live on the internet!**

**Survey URL**: `https://YOUR_USERNAME.github.io/survey` 