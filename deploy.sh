#!/bin/bash
# Deployment automation script for Online Skill Platform

echo "=========================================="
echo "🚀 Online Skill Platform Deployment"
echo "=========================================="
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Download from: https://git-scm.com/download/win"
    exit 1
fi

echo "✅ Git found"
echo ""

# Initialize Git repo
echo "📦 Initializing Git repository..."
git init
git config user.name "vamsivalluri-19"
git config user.email "your-email@gmail.com"

echo ""
echo "📝 Staging all files..."
git add .

echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Online Skill Platform - MERN Stack"

echo ""
echo "=========================================="
echo "🎯 NEXT STEPS:"
echo "=========================================="
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY:"
echo "   • Go to: https://github.com/new"
echo "   • Name: online-skill-platform"
echo "   • Make it PUBLIC ⭐"
echo "   • Click 'Create Repository'"
echo ""

echo "2️⃣  COPY REPOSITORY URL:"
echo "   • From GitHub page, click 'Code' button"
echo "   • Copy the HTTPS URL"
echo "   • Example: https://github.com/vamsivalluri-19/online-skill-platform.git"
echo ""

echo "3️⃣  PUSH CODE TO GITHUB:"
echo "   • Paste this command (replace with your URL):"
echo "   → git remote add origin [YOUR_GITHUB_URL]"
echo "   → git branch -M main"
echo "   → git push -u origin main"
echo ""

echo "4️⃣  ENABLE GITHUB PAGES:"
echo "   • Go to: https://github.com/vamsivalluri-19/online-skill-platform"
echo "   • Click Settings → Pages"
echo "   • Select 'Deploy from a branch'"
echo "   • Choose: main branch, / (root) folder"
echo "   • Wait 1-2 minutes"
echo "   • Your site: https://vamsivalluri-19.github.io/online-skill-platform/"
echo ""

echo "5️⃣  DEPLOY BACKEND:"
echo "   • Go to: https://render.com"
echo "   • Sign up with GitHub"
echo "   • New Web Service → Select repository"
echo "   • Build Command: npm install"
echo "   • Start Command: node backend/server.js"
echo "   • Add environment variables (see guides)"
echo "   • Deploy!"
echo ""

echo "✅ Git setup complete!"
echo ""
echo "📖 For detailed guides, read:"
echo "   • QUICK_DEPLOY.md (fast track)"
echo "   • DEPLOYMENT_GUIDE.md (complete guide)"
echo "   • README_DEPLOY.md (full documentation)"
echo ""
echo "=========================================="
