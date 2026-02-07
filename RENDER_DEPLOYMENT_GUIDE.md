# 🚀 RENDER DEPLOYMENT - COMPLETE GUIDE

**Status:** Backend ready to deploy  
**Target:** Render.com (Free tier)  
**Result:** Live API at render.com URL  

---

## ✅ YOUR BACKEND IS READY!

```
✅ Backend code: Complete & tested
✅ Port configuration: process.env.PORT || 5000
✅ CORS enabled: For GitHub Pages
✅ Database ready: MongoDB Atlas connection
✅ Environment vars: All documented in .env.example
```

---

## 🎯 DEPLOY IN 5 MINUTES

### Step 1: Go to Render.com
**URL:** https://render.com

### Step 2: Sign Up (or Login)
- Click "Sign up"
- Use your GitHub account (easiest!)
- Authorize Render to access GitHub

### Step 3: Create Web Service
1. Click "New" button (top right)
2. Select **"Web Service"**
3. Click **"Connect GitHub Account"** (if not already done)
4. Find and SELECT: `online-skill-platform`
5. Click "Connect"

### Step 4: Configure Service
Fill in these EXACT values:

**Service Information:**
```
Service Name:          online-skill-platform-api
Environment:           Node
Region:                USA East (default)
Branch:                main
Root Directory:        backend
Build Command:         npm install
Start Command:         npm start
```

**Instance:**
```
Price Plan:            Free
```

### Step 5: Add Environment Variables
Click "Advanced" dropdown. Add these variables:

**Variable 1: JWT Secret**
```
KEY:   JWT_SECRET
VALUE: MySecureSecret@12345#ChangeMe!
```

**Variable 2: Node Environment**
```
KEY:   NODE_ENV
VALUE: production
```

**Variable 3: MongoDB Connection (IMPORTANT!)**
```
KEY:   MONGODB_URI
VALUE: mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/online-skill-db?retryWrites=true&w=majority
```
*(Get this from MongoDB Atlas)*

**Variable 4: Frontend URL**
```
KEY:   FRONTEND_URL
VALUE: https://vamsivalluri-19.github.io/online-skill-platform
```

### Step 6: Deploy!
1. Click **"Create Web Service"**
2. **Wait 3-5 minutes** (watch build logs)
3. When done, you'll see a URL like:
   ```
   https://online-skill-platform-api-xxxxx.onrender.com
   ```
4. **COPY THIS URL!** (you need it for next step)

### Step 7: Test Backend
Visit in browser:
```
https://online-skill-platform-api-xxxxx.onrender.com/api/health
```
You should see:
```json
{"status":"ok","message":"API is running"}
```

If you see that, backend is WORKING! ✅

---

## 🔄 UPDATE FRONTEND WITH BACKEND URL

Once you have your Render URL, you need to update the frontend to use it.

### Option A: Manual Update

**Edit these 2 files:**

1. **File 1:** `js/script.js` (root)
2. **File 2:** `frontend/js/script.js` (backup)

**Find line 1:**
```javascript
const API_BASE = "http://localhost:5000";
```

**Replace with your Render URL:**
```javascript
const API_BASE = "https://online-skill-platform-api-xxxxx.onrender.com";
```

**Example (replace xxxxx with YOUR service name):**
```javascript
const API_BASE = "https://online-skill-platform-api-a1b2c3d4.onrender.com";
```

### Option B: Use Script
**PowerShell (copy all 3 lines at once):**
```powershell
$renderUrl = "https://online-skill-platform-api-xxxxx.onrender.com"
(Get-Content "js/script.js") -replace "http://localhost:5000", $renderUrl | Set-Content "js/script.js"
(Get-Content "frontend/js/script.js") -replace "http://localhost:5000", $renderUrl | Set-Content "frontend/js/script.js"
```

---

## 📤 PUSH TO GITHUB

**PowerShell:**
```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"

git add js/script.js frontend/js/script.js

git commit -m "Update API URL to production Render backend"

git push origin main
```

**GitHub Pages auto-updates in 1-2 minutes!**

---

## 🧪 TEST YOUR WEBSITE

### Visit:
```
https://vamsivalluri-19.github.io/online-skill-platform/
```

### Try this:
1. **Hard refresh:** Ctrl+F5 (clear cache)
2. **Click "Register"**
3. **Create new account** (any email, username, password)
4. **Should see:** Success message or redirect
5. **Try login:** Use your new account credentials
6. **See dashboard:** You should see courses & dashboard!

---

## 📊 FLOW DIAGRAM

```
GitHub Pages Frontend
https://vamsivalluri-19.github.io/online-skill-platform/
        ↓ (sends API request)
Render Backend
https://online-skill-platform-api-xxxxx.onrender.com/api/auth/login
        ↓ (queries database)
MongoDB Atlas
database stores login data
        ↓ (returns response)
Frontend receives success/error
        ↓
User sees result (login success or error)
```

---

## ⚠️ MONGODB SETUP (If NOT done yet)

If you don't have MongoDB set up:

1. Go: https://www.mongodb.com/cloud/atlas
2. Create FREE M0 cluster
3. Create user: `admin`
4. Whitelist IP: `0.0.0.0/0`
5. Get connection string
6. Add MONGODB_URI to Render env vars

---

## 🆘 TROUBLESHOOTING

### "Build failed"
- Check logs for errors
- Usually missing environment variables
- Verify NODE_ENV, JWT_SECRET, MONGODB_URI are set

### "Render URL shows "Application Error"
- Check service logs in Render dashboard
- Verify MongoDB connection string
- Verify environment variables

### "Website still shows errors"
- Make sure you updated BOTH script.js files
- Hard refresh: Ctrl+F5
- Wait 2-3 minutes for GitHub Pages update
- Check browser console (F12) for errors

### "Login still doesn't work"
- Verify backend is running: Visit `/api/health` URL
- Check Render logs for MongoDB connection
- Check API_BASE URL is exactly correct (no typos)
- Hard refresh browser

---

## ✅ CHECKLIST

- [ ] GitHub account has admin-skill-platform repo
- [ ] Created Render account
- [ ] Created Web Service on Render
- [ ] Set Build Command: npm install
- [ ] Set Start Command: npm start
- [ ] Added JWT_SECRET env var
- [ ] Added NODE_ENV=production env var
- [ ] Added MONGODB_URI env var (if using MongoDB)
- [ ] Added FRONTEND_URL env var
- [ ] Clicked "Create Web Service"
- [ ] Waited for deployment (check build logs)
- [ ] Got Render URL (backend is live!)
- [ ] Tested /api/health endpoint (should work!)
- [ ] Updated js/script.js with Render URL
- [ ] Updated frontend/js/script.js with Render URL
- [ ] Committed to GitHub
- [ ] Pushed to GitHub
- [ ] Waited 2 minutes for Pages update
- [ ] Hard refreshed website
- [ ] Tried registration/login
- [ ] Everything works! ✅

---

## 🔗 IMPORTANT LINKS

**Your Services:**
```
Render Dashboard:
https://dashboard.render.com

MongoDB Atlas:
https://www.mongodb.com/cloud/atlas

GitHub Repository:
https://github.com/vamsivalluri-19/online-skill-platform

Your Website:
https://vamsivalluri-19.github.io/online-skill-platform/
```

---

## 💡 TIPS

1. **Free tier note:** Render free services sleep after 15 minutes inactivity
   - First request may take 5-30 seconds (waking up)
   - After that, requests are fast
   - This is fine for learning/development

2. **Free MongoDB:** 512MB storage (plenty for learning)

3. **GitHub Pages:** Updates slowly (1-3 minutes after push)
   - Always hard refresh after waiting

4. **Check logs:** Both Render and MongoDB have logs
   - Super helpful for debugging

---

## 🎯 AFTER DEPLOYMENT

Your website will have:
- ✅ Registration with database storage
- ✅ Login with JWT tokens
- ✅ Dashboard access for logged-in users
- ✅ Course management
- ✅ Progress tracking
- ✅ Full-stack functionality

**You'll have a REAL working website on the internet!** 🎉

---

## 🚀 NEXT STEP

**Go to:** https://render.com and start deployment!

Follow the steps above exactly and you'll have your backend LIVE in 5 minutes.

**Good luck!** 💪

