@echo off
REM Update API URL after Render Deployment
REM Usage: update-api-url.bat https://YOUR-RENDER-URL

setlocal enabledelayedexpansion

echo.
echo ========================================
echo   API URL Update Script
echo ========================================
echo.

if "%1"=="" (
    echo ERROR: Please provide your Render URL
    echo.
    echo Usage:
    echo   update-api-url.bat https://online-skill-platform-api-xxxxx.onrender.com
    echo.
    pause
    exit /b 1
)

set "RENDER_URL=%1"
set "OLD_URL=http://localhost:5000"

echo Updating API endpoints to:
echo %RENDER_URL%
echo.

REM Update root js/script.js
echo Updating: js/script.js
powershell -Command "(Get-Content 'js/script.js') -replace [regex]::Escape('%OLD_URL%'), '%RENDER_URL%' | Set-Content 'js/script.js'"
if !errorlevel! equ 0 (
    echo   ✅ Updated successfully
) else (
    echo   ❌ Failed to update
)

REM Update frontend/js/script.js
echo Updating: frontend/js/script.js
powershell -Command "(Get-Content 'frontend/js/script.js') -replace [regex]::Escape('%OLD_URL%'), '%RENDER_URL%' | Set-Content 'frontend/js/script.js'"
if !errorlevel! equ 0 (
    echo   ✅ Updated successfully
) else (
    echo   ❌ Failed to update
)

echo.
echo ========================================
echo   Committing to GitHub
echo ========================================
echo.

git add js/script.js frontend/js/script.js
git commit -m "Update API URL to production Render backend: %RENDER_URL%"
git push origin main

echo.
echo ✅ Done! GitHub Pages updating...
echo.
echo Your website should be fully working in 2 minutes!
echo.
echo Visit: https://vamsivalluri-19.github.io/online-skill-platform/
echo.
pause
