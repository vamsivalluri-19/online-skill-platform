# GitHubDeploy.ps1
# Complete automated GitHub deployment script for Online Skill Platform
# Just run this and follow the prompts!

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          🚀 ONLINE SKILL PLATFORM - GITHUB DEPLOYMENT          ║" -ForegroundColor Cyan
Write-Host "║                    Auto Deployment Script                      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ============================================================
# STEP 1: Check Requirements
# ============================================================

Write-Host "📋 STEP 1: Checking Requirements..." -ForegroundColor Yellow
Write-Host ""

# Check Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is NOT installed!" -ForegroundColor Red
    Write-Host "📥 Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "🔄 After installing, restart PowerShell and run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to open download page"
    Start-Process "https://git-scm.com/download/win"
    exit
}

Write-Host "✅ Git is installed: $(git --version)" -ForegroundColor Green
Write-Host ""

# ============================================================
# STEP 2: Configure Git
# ============================================================

Write-Host "⚙️  STEP 2: Configuring Git..." -ForegroundColor Yellow
Write-Host ""

$gitName = "vamsivalluri-19"
$gitEmail = Read-Host "Enter your email address (you@example.com)"

git config --global user.name $gitName
git config --global user.email $gitEmail
git config --global core.autocrlf true

Write-Host "✅ Git configured:" -ForegroundColor Green
Write-Host "   Name:  $gitName" -ForegroundColor White
Write-Host "   Email: $gitEmail" -ForegroundColor White
Write-Host ""

# ============================================================
# STEP 3: Navigate to Project
# ============================================================

Write-Host "📂 STEP 3: Navigating to Project Folder..." -ForegroundColor Yellow
Write-Host ""

$projectPath = "C:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"

if (-not (Test-Path $projectPath)) {
    Write-Host "❌ Project folder not found at:" -ForegroundColor Red
    Write-Host "   $projectPath" -ForegroundColor Red
    Write-Host "📍 Please check the path and try again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Set-Location $projectPath
Write-Host "✅ Current folder: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Verify structure
Write-Host "📁 Verifying folder structure..." -ForegroundColor White
$requiredFolders = @("backend", "frontend", ".github")
foreach ($folder in $requiredFolders) {
    if (Test-Path $folder) {
        Write-Host "   ✅ $folder/" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  $folder/ (missing)" -ForegroundColor Yellow
    }
}
Write-Host ""

# ============================================================
# STEP 4: Initialize Git
# ============================================================

Write-Host "🔧 STEP 4: Initializing Git Repository..." -ForegroundColor Yellow
Write-Host ""

# Check if .git already exists
if (Test-Path ".git") {
    Write-Host "⚠️  Git repository already initialized" -ForegroundColor Yellow
    $reinit = Read-Host "Reinitialize? (Y/n)"
    if ($reinit -eq "Y" -or $reinit -eq "y") {
        Remove-Item ".git" -Recurse -Force
        git init
        Write-Host "✅ Repository reinitialized" -ForegroundColor Green
    } else {
        Write-Host "⏭️  Skipping initialization" -ForegroundColor White
    }
} else {
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
}

Write-Host ""

# ============================================================
# STEP 5: Stage All Files
# ============================================================

Write-Host "📦 STEP 5: Staging All Files..." -ForegroundColor Yellow
Write-Host ""

git add .

Write-Host "✅ Files staged" -ForegroundColor Green

# Show what will be committed
Write-Host ""
Write-Host "📋 Files to be committed:" -ForegroundColor White
git status --short | Select-Object -First 20

Write-Host ""
$continue = Read-Host "Continue with commit? (Y/n)"
if ($continue -eq "n" -or $continue -eq "N") {
    Write-Host "⏹️  Deployment cancelled" -ForegroundColor Yellow
    exit
}

Write-Host ""

# ============================================================
# STEP 6: Create Commit
# ============================================================

Write-Host "💾 STEP 6: Creating Commit..." -ForegroundColor Yellow
Write-Host ""

git commit -m "Initial commit: Online Skill Platform - MERN Stack Learning Platform"

Write-Host "✅ Commit created" -ForegroundColor Green
Write-Host ""

# ============================================================
# STEP 7: Configure Remote
# ============================================================

Write-Host "🌐 STEP 7: Configuring GitHub Remote..." -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 Steps to get your GitHub URL:" -ForegroundColor Yellow
Write-Host "   1. Open: https://github.com/new" -ForegroundColor White
Write-Host "   2. Repository name: online-skill-platform" -ForegroundColor White
Write-Host "   3. Make it PUBLIC ⭐" -ForegroundColor White
Write-Host "   4. Create repository" -ForegroundColor White
Write-Host "   5. Copy the HTTPS URL (looks like below)" -ForegroundColor White
Write-Host "      https://github.com/vamsivalluri-19/online-skill-platform.git" -ForegroundColor Cyan
Write-Host ""

$githubUrl = Read-Host "Paste your GitHub repository URL here"

if (-not $githubUrl.StartsWith("https://github.com/")) {
    Write-Host "❌ Invalid GitHub URL" -ForegroundColor Red
    Write-Host "   Should start with: https://github.com/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Check if remote already exists
if (git remote | Select-String "origin") {
    Write-Host "⚠️  Remote 'origin' already exists" -ForegroundColor Yellow
    git remote remove origin
    Write-Host "   Removed old remote" -ForegroundColor White
}

git remote add origin $githubUrl
Write-Host "✅ Remote configured: $githubUrl" -ForegroundColor Green
Write-Host ""

# ============================================================
# STEP 8: Rename Branch
# ============================================================

Write-Host "🔀 STEP 8: Renaming Branch to 'main'..." -ForegroundColor Yellow
Write-Host ""

git branch -M main

Write-Host "✅ Branch renamed to 'main'" -ForegroundColor Green
Write-Host ""

# ============================================================
# STEP 9: Push to GitHub
# ============================================================

Write-Host "📤 STEP 9: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "⏳ This may take 1-2 minutes..." -ForegroundColor White
Write-Host "🔐 You may be asked to authenticate:" -ForegroundColor Yellow
Write-Host "   • Username: vamsivalluri-19" -ForegroundColor White
Write-Host "   • Password: Your GitHub password OR Personal Access Token" -ForegroundColor White
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Push failed. Check error message above." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit
}

Write-Host ""

# ============================================================
# STEP 10: Enable GitHub Pages
# ============================================================

Write-Host "🌐 STEP 10: Enabling GitHub Pages..." -ForegroundColor Yellow
Write-Host ""

$repoUrl = $githubUrl -replace ".git$", ""

Write-Host "📝 Manual Steps Required:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   1. Go to: $repoUrl/settings/pages" -ForegroundColor Cyan
Write-Host "   2. Under 'Build and deployment':" -ForegroundColor White
Write-Host "      • Source: Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "      • Branch: Select 'main'" -ForegroundColor White
Write-Host "      • Folder: Select '/ (root)'" -ForegroundColor White
Write-Host "   3. Click 'Save'" -ForegroundColor White
Write-Host "   4. Wait 1-2 minutes" -ForegroundColor White
Write-Host ""
Write-Host "   Your website will be at:" -ForegroundColor Green
Write-Host "   https://vamsivalluri-19.github.io/online-skill-platform/" -ForegroundColor Cyan
Write-Host ""

$openPages = Read-Host "Would you like to open GitHub Pages settings now? (Y/n)"
if ($openPages -eq "Y" -or $openPages -eq "y") {
    Start-Process "$repoUrl/settings/pages"
}

Write-Host ""

# ============================================================
# SUMMARY
# ============================================================

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                    ✅ DEPLOYMENT COMPLETE!                     ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "📊 SUMMARY:" -ForegroundColor Yellow
Write-Host "   Repository: $repoUrl" -ForegroundColor White
Write-Host "   Branch: main" -ForegroundColor White
Write-Host "   Status: ✅ Pushed to GitHub" -ForegroundColor Green
Write-Host ""

Write-Host "🎯 NEXT STEPS:" -ForegroundColor Yellow
Write-Host "   1. Go to Settings → Pages (link above)" -ForegroundColor White
Write-Host "   2. Configure GitHub Pages" -ForegroundColor White
Write-Host "   3. Wait 1-2 minutes for deployment" -ForegroundColor White
Write-Host "   4. Your website will be LIVE!" -ForegroundColor Green
Write-Host ""

Write-Host "📚 MORE INFORMATION:" -ForegroundColor Yellow
Write-Host "   • QUICK_DEPLOY.md (next steps)" -ForegroundColor White
Write-Host "   • CHECKLIST.md (complete checklist)" -ForegroundColor White
Write-Host "   • GITHUB_DEPLOY_STEP_BY_STEP.md (detailed guide)" -ForegroundColor White
Write-Host ""

Write-Host "💡 TROUBLESHOOTING:" -ForegroundColor Yellow
Write-Host "   Website not loading?" -ForegroundColor White
Write-Host "   → Wait 2-3 minutes" -ForegroundColor White
Write-Host "   → Hard refresh: Ctrl+Shift+Del" -ForegroundColor White
Write-Host "   → Check Settings → Pages" -ForegroundColor White
Write-Host ""

Write-Host "═════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "              🚀 Happy Deploying! 🚀" -ForegroundColor Cyan
Write-Host "═════════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to exit"
