# 🚀 COMPLETE DEPLOYMENT GUIDE - Backend & Frontend

## ✅ Problem Fixed!

**The CORS error is now fixed!** We've updated all frontend files to automatically detect the environment and use the correct API URL:
- **Local Development**: `http://localhost:5000`
- **Production (GitHub Pages)**: `https://online-skill-platform.onrender.com`

---

## 📋 STEP 1: Deploy Backend to Render

### 1.1 Prepare Your Backend

Your backend is already configured! Here's what's set up:
- ✅ CORS configured for GitHub Pages
- ✅ Environment variables ready
- ✅ Production-ready server.js
- ✅ MongoDB connection configured

### 1.2 Create Render Account

1. Go to [https://render.com](https://render.com)
2. Click **"Get Started for Free"**
3. Sign up with GitHub (recommended) or email

### 1.3 Deploy to Render

#### Option A: Using Render Dashboard (Easiest)

1. **Click "New +"** → Select **"Web Service"**

2. **Connect Your Repository**:
   - If using GitHub: Click "Connect GitHub" and authorize Render
   - Select your repository: `vamsivalluri-19/online-skill-platform`

3. **Configure the Service**:
   ```
   Name: online-skill-platform
   Environment: Node
   Region: Choose closest to you (e.g., Oregon USA)
   Branch: main
   Root Directory: backend
   Build Command: npm install
   Start Command: npm start
   ```

4. **Select Plan**:
   - Choose **"Free"** plan (perfect for testing)
   - Note: Free tier spins down after 15 minutes of inactivity

5. **Add Environment Variables**:
   Click **"Advanced"** → **"Add Environment Variable"**:
   
   ```
   NODE_ENV = production
   
   MONGODB_URI = mongodb+srv://your-mongodb-connection-string
   (Get this from MongoDB Atlas - see Step 1.4)
   
   JWT_SECRET = your-super-secret-key-change-this-in-production
   (Generate a strong random string)
   
   FRONTEND_URL = https://vamsivalluri-19.github.io
   
   PORT = 10000
   (Render automatically sets this, but you can specify it)
   ```

6. **Click "Create Web Service"**

7. **Wait for Deployment** (2-5 minutes):
   - Render will install dependencies
   - Start your server
   - You'll see: ✅ "Deploy succeeded"

8. **Get Your Backend URL**:
   - It will be: `https://online-skill-platform.onrender.com`
   - Copy this URL!

---

### 1.4 MongoDB Atlas Setup (If not done yet)

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free
3. Click **"Build a Database"** → Choose **"Free"** tier
4. Select cloud provider and region
5. Create cluster (takes 1-3 minutes)

6. **Configure Access**:
   - **Database Access**: Create a user with username/password
   - **Network Access**: Click "Add IP Address" → **"Allow Access from Anywhere"** (0.0.0.0/0)

7. **Get Connection String**:
   - Click **"Connect"** → **"Connect your application"**
   - Copy the connection string
   - Replace `<password>` with your actual password
   - It looks like: `mongodb+srv://username:password@cluster.mongodb.net/myDatabase`

8. **Add to Render**:
   - Go back to Render dashboard
   - Click your service → **"Environment"** tab
   - Add/Update `MONGODB_URI` with your MongoDB connection string

---

## 📋 STEP 2: Update Frontend Config (Already Done! ✅)

The frontend is already updated! Here's what was changed:

### Created: `frontend/js/config.js` and `js/config.js`
```javascript
// Automatically detects environment and uses correct API URL
const API_CONFIG = {
  production: 'https://online-skill-platform.onrender.com',
  development: 'http://localhost:5000',
  getApiUrl: function() {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? this.production : this.development;
  }
};
```

### Updated Files:
- ✅ `frontend/login.html` - Uses config.js
- ✅ `frontend/register.html` - Uses config.js
- ✅ `frontend/dashboard.html` - Uses config.js
- ✅ `login.html` - Uses config.js
- ✅ `register.html` - Uses config.js
- ✅ `dashboard.html` - Uses config.js

---

## 📋 STEP 3: Update Config with Your Render URL

⚠️ **IMPORTANT**: After your backend is deployed to Render, update the production URL:

1. Edit `frontend/js/config.js`:
   ```javascript
   production: 'https://YOUR-ACTUAL-RENDER-URL.onrender.com',
   ```

2. Edit `js/config.js` (same change):
   ```javascript
   production: 'https://YOUR-ACTUAL-RENDER-URL.onrender.com',
   ```

3. Replace `YOUR-ACTUAL-RENDER-URL` with your actual Render URL

---

## 📋 STEP 4: Deploy Frontend to GitHub Pages

### 4.1 Commit and Push Changes

```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"

# Add all changes
git add .

# Commit with message
git commit -m "Fix CORS error - Add environment-aware API configuration"

# Push to GitHub
git push origin main
```

### 4.2 Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/vamsivalluri-19/online-skill-platform`
2. Click **"Settings"** tab
3. Scroll to **"Pages"** in left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site will be live at: `https://vamsivalluri-19.github.io/online-skill-platform/`

---

## 📋 STEP 5: Test Your Deployment

### 5.1 Test Backend

Open in browser or use curl:
```
https://your-app.onrender.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2026-02-07T..."
}
```

### 5.2 Test Frontend

1. Open: `https://vamsivalluri-19.github.io/online-skill-platform/`
2. Open browser console (F12)
3. You should see:
   ```
   🌐 Environment: Production (GitHub Pages)
   🔗 API URL: https://online-skill-platform.onrender.com
   ✅ API Configuration loaded
   ```

4. Try to register/login:
   - Go to Register page
   - Fill out the form
   - Click "Sign Up"
   - Should successfully register and redirect to dashboard

---

## 🔧 Troubleshooting

### Issue: "Backend is not responding"

**Solution**:
1. Check if Render service is running (dashboard.render.com)
2. Free tier sleeps after 15 mins - first request takes 30-60 seconds to wake up
3. Check Render logs for errors

### Issue: CORS Error Still Happening

**Solution**:
1. Make sure you updated `frontend/js/config.js` with correct Render URL
2. Commit and push changes to GitHub
3. Wait 1 minute for GitHub Pages to rebuild
4. Hard refresh browser (Ctrl+Shift+R)

### Issue: "Cannot POST /api/auth/register"

**Solution**:
1. Check Render environment variables are set correctly
2. Make sure `MONGODB_URI` is valid
3. Check Render logs for detailed error

### Issue: Free Tier Slow

**Solution**:
- First request takes 30-60 seconds (cold start)
- Subsequent requests are fast
- Upgrade to paid tier ($7/month) for always-on service

---

## 📝 Environment Variables Checklist

Make sure these are set in Render:

- ✅ `NODE_ENV=production`
- ✅ `MONGODB_URI=mongodb+srv://...`
- ✅ `JWT_SECRET=your-secret-key`
- ✅ `FRONTEND_URL=https://vamsivalluri-19.github.io`
- ✅ `PORT=10000` (optional, Render sets automatically)

---

## 🎯 Quick Commands Reference

### Start Backend Locally
```powershell
cd backend
npm install
npm start
```

### Deploy Frontend to GitHub
```powershell
git add .
git commit -m "Update deployment"
git push origin main
```

### View Render Logs
```powershell
# From Render dashboard → Your Service → "Logs" tab
```

---

## 🎉 Success Indicators

You'll know everything is working when:

1. ✅ Backend Health Check: `https://your-app.onrender.com/api/health` returns OK
2. ✅ Frontend loads: `https://vamsivalluri-19.github.io/online-skill-platform/`
3. ✅ Console shows: "Environment: Production" and correct API URL
4. ✅ Registration/Login works without CORS errors
5. ✅ Dashboard loads and displays user data

---

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Guide](https://www.mongodb.com/docs/atlas/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 🆘 Need Help?

If you encounter issues:

1. Check Render logs (most issues show here)
2. Check browser console (F12) for frontend errors
3. Verify all environment variables are set correctly
4. Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

---

**Updated**: February 7, 2026
**Status**: Ready to Deploy! 🚀
