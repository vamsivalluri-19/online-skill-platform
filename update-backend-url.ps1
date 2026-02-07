#!/usr/bin/env pwsh
# Update API URLs after Render Backend Deployment
# Usage: .\update-backend-url.ps1 -RenderUrl "https://online-skill-platform-api-xxxxx.onrender.com"

param(
    [Parameter(Mandatory=$false)]
    [string]$RenderUrl
)

# Colors for output
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Error2 { Write-Host $args -ForegroundColor Red }
function Write-Info { Write-Host $args -ForegroundColor Cyan }

Write-Info "
╔════════════════════════════════════════════════════════════╗
║   BACKEND API URL UPDATE TOOL                              ║
║   Updates frontend to connect to Render backend            ║
╚════════════════════════════════════════════════════════════╝
"

# If URL not provided, ask user
if ([string]::IsNullOrEmpty($RenderUrl)) {
    Write-Info "Enter your Render backend URL"
    Write-Info "(e.g., https://online-skill-platform-api-a1b2c3d4.onrender.com)"
    Write-Host ""
    $RenderUrl = Read-Host "Render URL"
}

# Validate URL format
if ($RenderUrl -notmatch "^https://.*\.onrender\.com") {
    Write-Error2 "❌ Invalid Render URL format!"
    Write-Error2 "Must be: https://online-skill-platform-api-xxxxx.onrender.com"
    exit 1
}

Write-Info "
✅ Using Render URL: $RenderUrl
"

$oldUrl = "http://localhost:5000"
$filesUpdated = @()
$filesFailed = @()

# Files to update
$filesToUpdate = @(
    "js/script.js",
    "frontend/js/script.js"
)

Write-Info "Updating API URLs...
"

foreach ($file in $filesToUpdate) {
    if (Test-Path $file) {
        try {
            # Read file
            $content = Get-Content $file -Raw
            
            # Check if file needs updating
            if ($content -contains $oldUrl) {
                # Replace
                $newContent = $content -replace [regex]::Escape($oldUrl), $RenderUrl
                Set-Content $file -Value $newContent -NoNewline
                
                Write-Success "  ✅ Updated: $file"
                $filesUpdated += $file
            } else {
                Write-Info "  ℹ️  Already updated or not found: $file"
            }
        }
        catch {
            Write-Error2 "  ❌ Failed to update: $file"
            Write-Error2 "     Error: $_"
            $filesFailed += $file
        }
    }
    else {
        Write-Error2 "  ⚠️  File not found: $file"
    }
}

Write-Info "
Committing to GitHub...
"

# Git operations
try {
    git add js/script.js frontend/js/script.js 2>$null
    $commitMsg = "Update API URL to production Render backend: $RenderUrl"
    git commit -m $commitMsg 2>$null
    git push origin main 2>$null
    
    Write-Success "  ✅ Committed to GitHub"
    Write-Success "  ✅ Pushed to origin/main"
}
catch {
    Write-Error2 "  ⚠️  Git operation failed: $_"
}

Write-Info "
╔════════════════════════════════════════════════════════════╗
║                      DEPLOYMENT STATUS                      ║
╚════════════════════════════════════════════════════════════╝
"

Write-Success "  ✅ Backend Render URL: $RenderUrl"
Write-Success "  ✅ Frontend Updated: $($filesUpdated.Count) files"
Write-Info "  ⏳ GitHub Pages Updating: 1-2 minutes..."

Write-Info "
╔════════════════════════════════════════════════════════════╗
║                      NEXT STEPS                             ║
╚════════════════════════════════════════════════════════════╝
"

Write-Info "  1️⃣  Wait 2 minutes for GitHub Pages to update"
Write-Info "  2️⃣  Hard refresh browser: Ctrl+F5"
Write-Info "  3️⃣  Visit: https://vamsivalluri-19.github.io/online-skill-platform/"
Write-Info "  4️⃣  Try Register/Login"
Write-Info "  5️⃣  Everything should work now! ✅"

Write-Info "
╔════════════════════════════════════════════════════════════╗
║                     VERIFICATION                            ║
╚════════════════════════════════════════════════════════════╝
"

Write-Info "  Test your backend API:"
Write-Info "  $RenderUrl/api/health"
Write-Info "  
  Should return JSON with status:ok
"

Write-Success "
✅ All set! Your backend is live and frontend is updated!
"
