# 🚀 Deployment Guide - Online Skill Platform

Complete guide to deploy your frontend and backend to get a free live website.

## 📋 Prerequisites
- GitHub account: **vamsivalluri-19** (already have it)
- Free backend hosting account (we'll use Render.com or Railway.app)
- Git installed on your computer

---

## **PART 1: Prepare Your Project**

### Step 1: Initialize Git Repository
```bash
cd c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform
git init
git config user.name "vamsivalluri-19"
git config user.email "your-email@gmail.com"
```

### Step 2: Create .gitignore File
Create a file named `.gitignore` in the root folder:
```
node_modules/
.env
.DS_Store
*.log
dist/
build/
```

---

## **PART 2: Deploy Frontend (Static Site) on GitHub Pages**

### Step 1: Create GitHub Repository
1. Go to **https://github.com/new**
2. Repository name: `online-skill-platform`
3. Description: "Online Learning Platform - VNR Learning"
4. Choose: **Public** (required for free GitHub Pages)
5. Click **Create Repository**

### Step 2: Push Frontend to GitHub
```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Online Skill Platform"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/vamsivalluri-19/online-skill-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Source: Select "Deploy from a branch"
4. Branch: Select `main` folder: `/root` (or `/docs` if you move files)
5. Click **Save**
6. Wait 1-2 minutes for deployment

**Your Frontend Live Link:** `https://vamsivalluri-19.github.io/online-skill-platform/`

---

## **PART 3: Deploy Backend with Free Hosting**

### **Option A: Deploy on Render.com (Recommended)**

#### Step 1: Create Render Account
1. Go to **https://render.com**
2. Sign up with GitHub (easier setup)
3. Authorize Render to access your GitHub

#### Step 2: Create Web Service
1. Click **New +** → **Web Service**
2. Connect your GitHub repository
3. Fill details:
   - **Name:** `online-skill-platform-api`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node backend/server.js`
   - **Environment:** Add from `.env` file

#### Step 3: Environment Variables
Add these in Render Dashboard:
```
MONGODB_URI=mongodb+srv://[your-cluster]:[password]@cluster.mongodb.net/[database-name]
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
NODE_ENV=production
```

**Your Backend Live Link:** `https://online-skill-platform-api.onrender.com` (will be given after deployment)

---

### **Option B: Deploy on Railway.app (Alternative)**

#### Step 1: Create Railway Account
1. Go to **https://railway.app**
2. Sign up with GitHub

#### Step 2: Create New Project
1. Click **New Project** → **Deploy from GitHub repo**
2. Select your repository
3. Click **Deploy**

#### Step 3: Add Environment Variables
1. In Railway Dashboard → Variables
2. Add your `.env` variables

**Your Backend Live Link:** Will be provided by Railway

---

## **PART 4: Connect Frontend to Backend**

Update your frontend JavaScript files to use the live backend URL:

### Step 1: Update API Calls
In `frontend/js/script.js` and other JS files, change:

**From:**
```javascript
const API_BASE = 'http://localhost:3000'
```

**To:**
```javascript
const API_BASE = 'https://online-skill-platform-api.onrender.com'
```

### Step 2: Update Dashboard API Calls
In `frontend/dashboard.html`, find all fetch calls and update URLs.

---

## **PART 5: Set Up Database (MongoDB - Free Tier)**

### Step 1: Create MongoDB Atlas Account
1. Go to **https://www.mongodb.com/cloud/atlas**
2. Sign up with Gmail
3. Create Organization

### Step 2: Create Free Database
1. Click **Create Deployment**
2. Select **Free** tier
3. Provider: AWS, Region: Nearest to you
4. Click **Create**

### Step 3: Get Connection String
1. Click **Connect**
2. Select **Drivers**
3. Copy connection string
4. Replace in your `.env` file:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

---

## **PART 6: Verification Checklist**

✅ GitHub repository created and public
✅ Frontend pushed to GitHub
✅ GitHub Pages enabled
✅ Backend deployment service configured
✅ Environment variables set
✅ MongoDB connection working
✅ Frontend updated with backend URL
✅ Backend deployed successfully

---

## **Final Live Links**

Once deployed, you'll have:

- **Frontend:** `https://vamsivalluri-19.github.io/online-skill-platform/`
- **Backend API:** `https://online-skill-platform-api.onrender.com/`
- **GitHub Repo:** `https://github.com/vamsivalluri-19/online-skill-platform/`

---

## **Troubleshooting**

### Frontend Not Loading
- Check GitHub Pages is enabled
- Verify branch is set to `main`
- Wait 2-3 minutes for deployment
- Clear browser cache (Ctrl+Shift+Del)

### Backend API Errors
- Check Render/Railway logs for errors
- Verify environment variables are set
- Test API: `https://your-backend-url/api/health`
- Check MongoDB connection string

### CORS Errors
In `backend/server.js`, update CORS:
```javascript
const cors = require('cors');
app.use(cors({
  origin: ['https://vamsivalluri-19.github.io', 'http://localhost:3000'],
  credentials: true
}));
```

---

## **Next Steps**

1. Complete deployment
2. Test all features on live website
3. Share your links with friends!
4. Monitor logs for any issues

Happy Deploying! 🎉
