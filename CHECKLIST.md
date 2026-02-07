# ✨ YOUR DEPLOYMENT CHECKLIST - Copy & Paste Everything!

**Account Username:** vamsivalluri-19  
**Total Time:** ~20 minutes  
**Cost:** 100% FREE 🎉

---

## 📋 STEP-BY-STEP CHECKLIST

### ✅ STEP 1: Run Setup Script (2 minutes)

**Open PowerShell** in your project folder and run:

```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"
.\deploy.ps1
```

The script will initialize Git automatically!

---

### ✅ STEP 2: Create GitHub Repository (3 minutes)

1. **Go to:** https://github.com/new
2. **Fill in:**
   - Name: `online-skill-platform`
   - Description: `Online Learning Platform`
   - ⭐ **PUBLIC** (Very Important!)
3. **Click:** Create Repository
4. **Copy:** The HTTPS URL shown (looks like: `https://github.com/vamsivalluri-19/online-skill-platform.git`)

---

### ✅ STEP 3: Push Code to GitHub (2 minutes)

**In PowerShell:**

```powershell
git remote add origin [PASTE_YOUR_URL_HERE]
git branch -M main
git push -u origin main
```

⏳ Wait for upload to finish...

---

### ✅ STEP 4: Enable GitHub Pages - Frontend (2 minutes)

1. **Go to:** Your GitHub repo
2. **Click:** Settings (top menu)
3. **Scroll:** Find "Pages" on left sidebar
4. **Configure:**
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. **Click:** Save
6. ⏳ **Wait:** 1-2 minutes

**✅ Your Frontend is LIVE at:**
```
https://vamsivalluri-19.github.io/online-skill-platform/
```

---

### ✅ STEP 5: Create MongoDB Database (3 minutes)

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. **Sign up** with your Gmail
3. **Create FREE Cluster:**
   - Click: Build a Database
   - Choose: Free tier
   - Choose: Nearest region
   - Click: Create Deployment
4. **Create Database User:**
   - Set username and password
   - Remember these!
5. **Get Connection String:**
   - Click: Connect
   - Choose: Drivers
   - Copy the string: `mongodb+srv://...`
6. **Replace in string:**
   - `<username>` with your username
   - `<password>` with your password
   - `databasename` with `skillplatform`

**Save this string - you need it next!**

---

### ✅ STEP 6: Deploy Backend on Render.com (5 minutes)

1. **Go to:** https://render.com
2. **Sign up** with GitHub (authorize)
3. **Go to Dashboard**
4. **Click:** New + → Web Service
5. **Select:** Your repository
6. **Fill form:**
   - Name: `online-skill-platform-api`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node backend/server.js`
   - Plan: Free ✅
7. **Click:** Create Web Service
8. ⏳ Wait for initial build...
9. **Add Environment Variables:**
   - Click: Environment → Add from file or manually
   - Add these:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/skillplatform

JWT_SECRET=ThisIsYourSecretKey12345ChangeThis

NODE_ENV=production

FRONTEND_URL=https://vamsivalluri-19.github.io/online-skill-platform

PORT=3000
```

10. **Click:** Deploy
11. ⏳ **Wait:** 2-3 minutes for deployment

**✅ Your Backend is LIVE at:**
```
https://online-skill-platform-api.onrender.com
```
(The URL appears in Render dashboard when ready)

---

### ✅ STEP 7: Connect Frontend to Backend (2 minutes)

The backend CORS is already updated in `backend/server.js`! ✅

But check your frontend JS files for API calls and make sure they point to:
```javascript
const API_URL = 'https://online-skill-platform-api.onrender.com'
```

Then push to GitHub:
```powershell
git add .
git commit -m "Update API endpoint for production"
git push origin main
```

---

## 🎉 YOU'RE DONE! 

### Your Website is LIVE:

| What | Link |
|------|------|
| **Website** | https://vamsivalluri-19.github.io/online-skill-platform/ |
| **API** | https://online-skill-platform-api.onrender.com |
| **GitHub** | https://github.com/vamsivalluri-19/online-skill-platform |

---

## 🧪 Test Your Deployment

1. ✅ Open the website link in browser
2. ✅ Try login/register
3. ✅ View courses
4. ✅ Download resources
5. ✅ Switch themes
6. ✅ Watch YouTube videos

---

## ❌ TROUBLESHOOTING

### Site doesn't load?
- Check if GitHub Pages is enabled (Settings → Pages)
- Wait 3 minutes and refresh
- Clear cache: Ctrl+Shift+Del

### API errors?
- Check Render dashboard logs
- Verify MongoDB connection string
- Test: `https://online-skill-platform-api.onrender.com/api/health`

### Can't connect to database?
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Check Render environment variables

---

## 📚 Need More Help?

- Read: `QUICK_DEPLOY.md` for fast overview
- Read: `DEPLOYMENT_GUIDE.md` for detailed guide
- Read: `README_DEPLOY.md` for full docs

---

## 🔐 Important Notes

### Free Tier Limitations:
- **Render:** Goes to sleep after 15 min inactivity (wakes on request)
- **MongoDB:** 512MB storage (free tier)
- **GitHub Pages:** Static content only

To upgrade when you have users, Render and MongoDB offer paid plans!

---

## 🚀 Your Website is Now Live!

**Share these links with anyone:**

- 🌐 Frontend: https://vamsivalluri-19.github.io/online-skill-platform/
- 📦 GitHub: https://github.com/vamsivalluri-19/online-skill-platform

**Congratulations! 🎊**

---

## 💡 Next Steps

1. **Share** your links with friends
2. **Monitor** logs in Render dashboard
3. **Add features** and push to GitHub (auto-deploys!)
4. **Scale** when you have users

---

**Happy Deploying! 🚀**

*Questions? Check the documentation files or GitHub issues.*
