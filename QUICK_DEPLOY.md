# 🚀 QUICK START: Deploy Your Live Website in 15 Minutes

**Account:** vamsivalluri-19  
**Free Services Used:** GitHub Pages + Render.com + MongoDB Atlas

---

## **STEP 1: Initialize Git (2 minutes)**

Open PowerShell in your project folder:

```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"

git init
git config user.name "vamsivalluri-19"
git config user.email "your-email@gmail.com"

git add .
git commit -m "Initial commit: Online Skill Platform"
```

---

## **STEP 2: Create GitHub Repository (3 minutes)**

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `online-skill-platform`
   - **Description:** "Online Learning Platform - VNR Learning"
   - **Public:** ✅ (Important for free GitHub Pages)
3. Click **Create Repository**
4. Copy the HTTPS URL (e.g., `https://github.com/vamsivalluri-19/online-skill-platform.git`)

---

## **STEP 3: Push to GitHub (2 minutes)**

In PowerShell:

```powershell
git remote add origin https://github.com/vamsivalluri-19/online-skill-platform.git
git branch -M main
git push -u origin main
```

Wait for upload to complete...

---

## **STEP 4: Enable GitHub Pages - Frontend (3 minutes)**

1. Go to **https://github.com/vamsivalluri-19/online-skill-platform**
2. Click **Settings** → **Pages** (left sidebar)
3. **Source:** Select "Deploy from a branch"
4. **Branch:** Select `main`
5. **Folder:** Select `/ (root)`
6. Click **Save**
7. Wait 1-2 minutes

✅ **Your Frontend Live:** `https://vamsivalluri-19.github.io/online-skill-platform/`

---

## **STEP 5: Set Up MongoDB Atlas - Database (3 minutes)**

1. Go to **https://www.mongodb.com/cloud/atlas**
2. Sign up with **Gmail**
3. Create **Free Tier** database
4. Create database user and get connection string
5. Copy: `mongodb+srv://username:password@cluster.mongodb.net/dbname`
6. Save it - you'll need it next

---

## **STEP 6: Deploy Backend on Render.com (5 minutes)**

### Option A: Automatic Deployment

1. Go to **https://render.com**
2. Sign up with **GitHub** account
3. Authorize Render
4. Click **New +** → **Web Service**
5. Select your `online-skill-platform` repository
6. Fill in:
   - **Name:** `online-skill-platform-api`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node backend/server.js`
   - **Environment:** Free
7. Click **Create Web Service**
8. Add **Environment Variables:**
   - `MONGODB_URI` = your MongoDB connection string
   - `JWT_SECRET` = `your-secret-key-12345`
   - `NODE_ENV` = `production`
   - `FRONTEND_URL` = `https://vamsivalluri-19.github.io/online-skill-platform`

9. Click **Deploy**
10. Wait 2-3 minutes

✅ **Your Backend Live:** `https://online-skill-platform-api.onrender.com` (shown in Render dashboard)

---

## **STEP 7: Update Frontend with Backend URL (2 minutes)**

In your project, find and update all API calls:

**In files like `frontend/js/script.js` or `frontend/dashboard.html`:**

Change:
```javascript
const API_URL = 'http://localhost:3000'
```

To:
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

## **FINAL LIVE LINKS** ✅

Once all steps are complete, you'll have:

| Service | Link |
|---------|------|
| **Frontend (Live)** | `https://vamsivalluri-19.github.io/online-skill-platform/` |
| **Backend API** | `https://online-skill-platform-api.onrender.com/` |
| **GitHub Repo** | `https://github.com/vamsivalluri-19/online-skill-platform/` |
| **MongoDB** | Free Atlas database |

---

## **TEST YOUR DEPLOYMENT** 🧪

1. Visit your **Frontend Link** above
2. Try all features:
   - ✅ Login/Register
   - ✅ View Courses
   - ✅ Download Resources
   - ✅ Switch Themes
   - ✅ YouTube Videos

---

## **TROUBLESHOOTING**

### ❌ Frontend not loading
- Wait 2-3 minutes for GitHub Pages
- Go to Settings → Pages and verify
- Clear browser cache (Ctrl+Shift+Del)

### ❌ Backend API errors
- Check Render dashboard logs
- Verify environment variables are set
- Test API: `https://online-skill-platform-api.onrender.com/api/health`

### ❌ Database not connecting
- Check MongoDB connection string
- Whitelist your IP in MongoDB Atlas
- Verify `MONGODB_URI` in Render

---

## **NEXT STEPS** 🎉

1. **Share your links** with friends!
2. **Monitor logs** in Render dashboard
3. **Add more features** and push to GitHub
4. **Custom domain** (optional - upgrade Render to paid)

---

## **FREE LIMITS**

- **GitHub Pages:** Unlimited
- **Render Web Service:** Free tier (auto-sleeps after 15 min of inactivity)
- **MongoDB Atlas:** 512MB storage (free tier)

For production, consider upgrading when you have users!

---

**Happy Deploying! 🚀**
