#!/bin/bash

# Survey Deployment Script for GitHub Pages
# This script helps you deploy your survey to GitHub Pages

echo "🚀 Survey Deployment Script"
echo "=========================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy survey to GitHub Pages - $(date)"

# Check if remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "🌐 No remote repository found."
    echo "Please create a repository on GitHub and run:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/survey.git"
    echo "git branch -M main"
    echo "git push -u origin main"
    exit 1
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click 'Settings' → 'Pages'"
echo "3. Under 'Source', select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click 'Save'"
echo ""
echo "🌐 Your survey will be live at:"
echo "https://YOUR_USERNAME.github.io/survey"
echo ""
echo "🎉 Happy surveying!" 