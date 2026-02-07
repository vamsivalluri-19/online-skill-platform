# Deploy.ps1 - Deployment automation script for Online Skill Platform
# Windows PowerShell version

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🚀 Online Skill Platform Deployment Setup" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "🔍 Checking Git installation..." -ForegroundColor Yellow
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "📥 Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}
Write-Host "✅ Git found!" -ForegroundColor Green
Write-Host ""

# Initialize Git repository
Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host "⚙️  Configuring Git..." -ForegroundColor Yellow
git config user.name "vamsivalluri-19"
git config user.email "vamsivalluri19@gmail.com"

Write-Host ""
Write-Host "📝 Staging all files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Online Skill Platform - MERN Stack Learning Platform"

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ GIT SETUP COMPLETE!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "⬇️  FOLLOW THESE STEPS TO GO LIVE:" -ForegroundColor Magenta
Write-Host ""

Write-Host "1️⃣  CREATE GITHUB REPOSITORY" -ForegroundColor Cyan
Write-Host "   📍 Go to: https://github.com/new" -ForegroundColor White
Write-Host "   📝 Repository name: online-skill-platform" -ForegroundColor White
Write-Host "   🌐 Make it PUBLIC (required for GitHub Pages)" -ForegroundColor Yellow
Write-Host "   ✅ Click 'Create Repository'" -ForegroundColor White
Write-Host ""

Write-Host "2️⃣  COPY YOUR GITHUB URL" -ForegroundColor Cyan
Write-Host "   📍 Go to your new repo, click 'Code' button" -ForegroundColor White
Write-Host "   📌 Copy HTTPS URL" -ForegroundColor White
Write-Host "   💡 Example: https://github.com/vamsivalluri-19/online-skill-platform.git" -ForegroundColor Yellow
Write-Host ""

Write-Host "3️⃣  PUSH CODE TO GITHUB" -ForegroundColor Cyan
Write-Host "   ⌨️  In PowerShell, run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin [PASTE_YOUR_GITHUB_URL_HERE]" -ForegroundColor Green
Write-Host "   git branch -M main" -ForegroundColor Green
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "   📊 Wait for upload to complete..." -ForegroundColor Yellow
Write-Host ""

Write-Host "4️⃣  ENABLE GITHUB PAGES (Frontend Goes Live)" -ForegroundColor Cyan
Write-Host "   📍 GitHub Repo → Settings → Pages" -ForegroundColor White
Write-Host "   🔧 Source: Deploy from a branch" -ForegroundColor White
Write-Host "   🌿 Branch: main" -ForegroundColor White
Write-Host "   📁 Folder: / (root)" -ForegroundColor White
Write-Host "   ✅ Click 'Save'" -ForegroundColor White
Write-Host "   ⏳ Wait 1-2 minutes" -ForegroundColor Yellow
Write-Host ""
Write-Host "   🎉 YOUR FRONTEND GOES LIVE AT:" -ForegroundColor Green
Write-Host "      https://vamsivalluri-19.github.io/online-skill-platform/" -ForegroundColor Yellow
Write-Host ""

Write-Host "5️⃣  CREATE FREE MONGODB DATABASE" -ForegroundColor Cyan
Write-Host "   📍 Go to: https://www.mongodb.com/cloud/atlas" -ForegroundColor White
Write-Host "   📝 Sign up with your Gmail" -ForegroundColor White
Write-Host "   🗄️  Create FREE Tier Cluster" -ForegroundColor White
Write-Host "   🔑 Get connection string: mongodb+srv://..." -ForegroundColor Yellow
Write-Host "   💾 Save it - you'll need it next" -ForegroundColor White
Write-Host ""

Write-Host "6️⃣  DEPLOY BACKEND (The API)" -ForegroundColor Cyan
Write-Host "   📍 Go to: https://render.com" -ForegroundColor White
Write-Host "   🔐 Sign up with GitHub" -ForegroundColor White
Write-Host "   ➕ Click 'New +' → 'Web Service'" -ForegroundColor White
Write-Host "   📦 Select your GitHub repository" -ForegroundColor White
Write-Host "   ⚙️  Configure:" -ForegroundColor White
Write-Host "      • Name: online-skill-platform-api" -ForegroundColor Yellow
Write-Host "      • Runtime: Node" -ForegroundColor Yellow
Write-Host "      • Build Command: npm install" -ForegroundColor Yellow
Write-Host "      • Start Command: node backend/server.js" -ForegroundColor Yellow
Write-Host "   🔧 Add Environment Variables:" -ForegroundColor White
Write-Host "      • MONGODB_URI = [paste MongoDB connection string]" -ForegroundColor Yellow
Write-Host "      • JWT_SECRET = some-random-secret-key" -ForegroundColor Yellow
Write-Host "      • NODE_ENV = production" -ForegroundColor Yellow
Write-Host "      • FRONTEND_URL = https://vamsivalluri-19.github.io/online-skill-platform" -ForegroundColor Yellow
Write-Host "   ✅ Click 'Create Web Service'" -ForegroundColor White
Write-Host "   ⏳ Wait 2-3 minutes for deployment" -ForegroundColor Yellow
Write-Host ""
Write-Host "   🎉 YOUR BACKEND GOES LIVE AT:" -ForegroundColor Green
Write-Host "      https://online-skill-platform-api.onrender.com" -ForegroundColor Yellow
Write-Host ""

Write-Host "7️⃣  UPDATE FRONTEND API URL" -ForegroundColor Cyan
Write-Host "   📂 In backend/server.js (already updated in CORS)" -ForegroundColor White
Write-Host "   🔗 Update API calls in frontend JS files:" -ForegroundColor White
Write-Host "      - Change: const API = 'http://localhost:3000'" -ForegroundColor Yellow
Write-Host "      - To: const API = '[Your Render Backend URL]'" -ForegroundColor Yellow
Write-Host "   📤 Commit and push:" -ForegroundColor White
Write-Host ""
Write-Host "   git add ." -ForegroundColor Green
Write-Host "   git commit -m 'Update API endpoint for production'" -ForegroundColor Green
Write-Host "   git push origin main" -ForegroundColor Green
Write-Host ""

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🎯 FINAL LIVE LINKS" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "After all steps complete:" -ForegroundColor White
Write-Host ""
Write-Host "🌐 FRONTEND (Website):   " -ForegroundColor Yellow -NoNewline
Write-Host "https://vamsivalluri-19.github.io/online-skill-platform/" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚙️  BACKEND (API):        " -ForegroundColor Yellow -NoNewline
Write-Host "https://online-skill-platform-api.onrender.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "📦 GITHUB REPOSITORY:    " -ForegroundColor Yellow -NoNewline
Write-Host "https://github.com/vamsivalluri-19/online-skill-platform" -ForegroundColor Cyan
Write-Host ""

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "📚 HELPFUL DOCUMENTATION" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📖 QUICK_DEPLOY.md       - Fast 15-min setup" -ForegroundColor White
Write-Host "📖 DEPLOYMENT_GUIDE.md   - Detailed steps" -ForegroundColor White
Write-Host "📖 README_DEPLOY.md      - Full documentation" -ForegroundColor White
Write-Host ""

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "🎉 YOU'RE READY TO DEPLOY!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next: Create your GitHub repository!" -ForegroundColor Yellow
Write-Host ""

# Offer to open GitHub new repo page
$openGitHub = Read-Host "Would you like to open GitHub in browser? (Y/n)"
if ($openGitHub -eq "Y" -or $openGitHub -eq "y") {
    Start-Process "https://github.com/new"
}

Write-Host ""
Write-Host "✅ Setup script completed successfully!" -ForegroundColor Green
