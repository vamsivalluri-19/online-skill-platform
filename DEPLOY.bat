@echo off
REM Quick Deployment Script - Online Skill Platform
REM February 7, 2026

echo.
echo ===================================================
echo   ONLINE SKILL PLATFORM - DEPLOYMENT READY
echo ===================================================
echo.

if not exist "package.json" (
    echo ERROR: Not in project root directory
    echo Please run from: online-skill-platform/
    exit /b 1
)

echo Status: Code uploaded to GitHub
echo Repository: https://github.com/vamsivalluri-19/online-skill-platform
echo.

REM Display Git status
echo --- Git Commit History ---
git log --oneline -3
echo.
echo --- Remote URL ---
git remote -v
echo.

echo ===================================================
echo.
echo FRONTEND DEPLOYMENT (GitHub Pages) - 5 MINUTES
echo.
echo Action Required:
echo 1. Go to Settings: https://github.com/vamsivalluri-19/online-skill-platform/settings/pages
echo 2. Source = "Deploy from a branch"
echo 3. Branch = "main"
echo 4. Folder = "/ (root)"
echo 5. Click: SAVE
echo 6. Wait 2 minutes
echo.
echo Then visit: https://vamsivalluri-19.github.io/online-skill-platform/
echo.

echo ===================================================
echo.
echo BACKEND DEPLOYMENT (Render.com) - 10 MINUTES
echo.
echo Action Required:
echo 1. Create account at https://render.com
echo 2. New Web Service
echo 3. Connect GitHub (this repo)
echo 4. Build cmd: cd backend ^&^& npm install
echo 5. Start cmd: cd backend ^&^& npm start
echo 6. Environment Variables:
echo    - MONGODB_URI = (from MongoDB Atlas)
echo    - JWT_SECRET = (random string)
echo    - NODE_ENV = production
echo 7. Click: CREATE WEB SERVICE
echo 8. Wait 3-5 minutes for deployment
echo.
echo Your backend URL: https://online-skill-platform-api.onrender.com
echo.

echo ===================================================
echo.
echo DATABASE SETUP (MongoDB Atlas) - 5 MINUTES
echo.
echo Action Required:
echo 1. Create account at https://www.mongodb.com/cloud/atlas
echo 2. Create M0 Free Cluster
echo 3. Create Database User (admin)
echo 4. Whitelist IP: 0.0.0.0/0
echo 5. Get Connection String
echo 6. Add to Render as MONGODB_URI
echo.

echo ===================================================
echo.
echo FINAL STEP: Connect Frontend to Backend
echo.
echo Update: frontend/js/script.js
echo Replace: const API_URL = 'http://localhost:3000/api'
echo With:    const API_URL = 'https://online-skill-platform-api.onrender.com/api'
echo.
echo Then run:
echo   git add .
echo   git commit -m "Update API URL for production"
echo   git push origin main
echo.

echo ===================================================
echo.
echo Your deployment is READY!
echo.
echo Frontend: https://vamsivalluri-19.github.io/online-skill-platform/
echo Backend:  https://online-skill-platform-api.onrender.com
echo.
echo ===================================================
echo.
pause
