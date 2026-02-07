# 🚀 Deploy to Render - Step-by-Step Guide (2026)

## ⚠️ Current Status
- **Frontend**: ✅ LIVE at https://vamsivalluri-19.github.io/online-skill-platform/
- **Backend**: ⏳ NOT YET DEPLOYED - You'll get "Connection error" until you complete this guide
- **Database**: ⏳ Needs setup
- **Time to Complete**: ~15 minutes

---

## 📋 REQUIRED BEFORE YOU START

1. **GitHub Account** (you already have this)
2. **Render Account** - Created at https://render.com (Free)
3. **MongoDB Atlas Account** - Created at https://www.mongodb.com/cloud/atlas (Free)

---

## 🎯 STEP 1: Create MongoDB Database (5 minutes)

### Why? 
Your backend needs a database to store user accounts and course data.

### Instructions:

1. **Go to MongoDB Atlas**
   - URL: https://www.mongodb.com/cloud/atlas
   - Click "Sign Up" (use Google or email)

2. **Create First Cluster**
   - Click "Build a Cluster"
   - Select **"Free"** tier
   - Choose region closest to you (USA recommended)
   - Click "Create Cluster"
   - Wait 1-2 minutes for it to initialize

3. **Set Up Database User**
   - Left sidebar → "Database Access"
   - Click "Add New Database User"
   - Username: `vamsiv` (or any username)
   - Password: Generate secure password (copy it!)
   - Database User Privileges: "Read and write to any database"
   - Click "Create Database User"

4. **Allow Network Access**
   - Left sidebar → "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"
   - ⚠️ This is necessary for Render to connect

5. **Get Connection String**
   - Click "Clusters" tab
   - Click "Connect"
   - Select "Connect your application"
   - Driver: "Node.js"
   - Version: "Latest"
   - Copy the connection string
   - It looks like: `mongodb+srv://vamsiv:PASSWORD@cluster.mongodb.net/myDatabase?retryWrites=true&w=majority`
   - **Replace `PASSWORD` with your actual password from step 3**
   - **Example**: `mongodb+srv://vamsiv:MySecure123@cluster.mongodb.net/vrlearn?retryWrites=true&w=majority`

✅ **Save this connection string - you'll need it in Step 2**

---

## 🎯 STEP 2: Deploy Backend to Render (7 minutes)

### Instructions:

1. **Go to Render**
   - URL: https://render.com
   - Click "Get Started for Free"
   - Sign up (recommend using GitHub)
   - Allow Render to access your GitHub account

2. **Create New Web Service**
   - Dashboard → Click **"New +"**
   - Select **"Web Service"**

3. **Connect Your Repository**
   - Under "GitHub" section:
   - Click **"Connect GitHub"**
   - Authorize Render
   - Select repo: `online-skill-platform` (from vamsivalluri-19)
   - Click "Connect"

4. **Configure Deployment Settings**
   - **Name**: `online-skill-platform` (or similar)
   - **Environment**: Select `Node`
   - **Region**: `Oregon` (or closest to you)
   - **Branch**: `main`
   - **Root Directory**: `backend` ← **IMPORTANT!**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (select free tier)

5. **Add Environment Variables**
   - Scroll down to **"Environment"** section
   - Click **"Add Environment Variable"**
   - Add each of these (click "Add Environment Variable" between each):

   ```
   Variable 1:
   Name: NODE_ENV
   Value: production
   [Add Environment Variable button]
   
   Variable 2:
   Name: MONGODB_URI
   Value: mongodb+srv://vamsiv:YOUR-PASSWORD@cluster.mongodb.net/vrlearn?retryWrites=true&w=majority
   [Replace YOUR-PASSWORD with your actual MongoDB password]
   [Add Environment Variable button]
   
   Variable 3:
   Name: JWT_SECRET
   Value: your-super-secret-jwt-key-12345-change-this
   [Generate a random string or use: aB3cD4eF5gH6iJ7kL8mN9oP0qR1sT2uV3wX4yZ5aB6cD7eF8]
   [Add Environment Variable button]
   
   Variable 4:
   Name: FRONTEND_URL
   Value: https://vamsivalluri-19.github.io
   ```

6. **Review and Deploy**
   - Scroll down
   - Click **"Create Web Service"**
   - **Wait 2-3 minutes** for deployment
   - You'll see: ✅ "Deploy succeeded" when done

7. **Get Your Backend URL**
   - At top of page, you'll see your service name with a URL
   - Format: `https://online-skill-platform-xxxxx.onrender.com`
   - **Copy this URL**
   - Go to: https://github.com/vamsivalluri-19/online-skill-platform
   - Edit `js/config.js` and update line 9:
     ```javascript
     production: 'https://online-skill-platform-xxxxx.onrender.com',
     ```
   - Also edit `frontend/js/config.js` (same line 9, same change)
   - Commit and push:
     ```powershell
     git add js/config.js frontend/js/config.js
     git commit -m "Update Render backend URL"
     git push origin main
     ```

---

## 🎯 STEP 3: Verify Everything Works (3 minutes)

### Test 1: Check Backend is Running
```
Visit: YOUR-RENDER-URL/api/health
Replace YOUR-RENDER-URL with your actual Render URL
```

**You should see:**
```json
{
  "status": "ok",
  "message": "Server is running",
  "mongodb": "connected",
  "environment": "production"
}
```

**If you see "mongodb": "disconnected":**
- Wait 30 seconds and refresh
- Check MongoDB connection string in Render env variables
- Verify MongoDB Atlas IP whitelist is set to 0.0.0.0/0

### Test 2: Check Frontend
1. Open: https://vamsivalluri-19.github.io/online-skill-platform/
2. Press F12 (Developer Tools)
3. Look at "Console" tab
4. You should see:
   ```
   🌐 Environment: Production (GitHub Pages)
   🔗 API URL: https://your-render-url.onrender.com
   ✅ API Configuration loaded
   ```

### Test 3: Try Register/Login
1. Go to Register page
2. Fill out form:
   - Full Name: John Doe
   - Email: test@example.com
   - Password: Test123
   - Confirm: Test123
   - ✓ Agree to terms
3. Click "Create Account"
4. Should succeed and redirect to dashboard!

### Test 4: Check Live Status
Visit: https://vamsivalluri-19.github.io/online-skill-platform/status.html

Should show:
- ✅ Frontend: LIVE
- ✅ Backend: ONLINE
- ✅ Database: CONNECTED

---

## ⚠️ Troubleshooting

### "Backend not responding" Error

**Cause 1: Backend not deployed yet**
- Go to Render dashboard
- Check if your service shows "Deploy succeeded"
- If it shows "Build failed", check logs

**Cause 2: MongoDB not connected**
- Check Render → Environment Variables
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas whitelist includes 0.0.0.0/0
- Test connection string in MongoDB Compass

**Cause 3: Free Tier Slowness**
- Free Render sleeps after 15 minutes
- First request after sleep takes 30-60 seconds
- This is normal! Just wait
- Subsequent requests are fast

**Solution: Upgrade to Paid**
- Render dashboard → Your service
- Click "Plan" tab
- Upgrade to "Starter" ($7/month) for always-on

### "CORS Error" in Browser Console

**Cause**: Frontend and backend URLs don't match
**Solution**:
1. Go to GitHub
2. Edit `js/config.js` and `frontend/js/config.js`
3. Update `production:` URL to match your actual Render URL
4. Commit and push: `git commit -m "Fix Render URL"` and `git push`
5. Wait 1-2 minutes for GitHub Pages to update
6. Hard refresh browser: Ctrl+Shift+R
7. Try again

### "MongoDB connection failed"

**Cause 1**: Wrong password in connection string
- Go to MongoDB Atlas
- Check "Database Access" for your user
- Verify password is correct
- Update in Render environment variables

**Cause 2**: IP not whitelisted
- Go to MongoDB Atlas
- Click "Network Access"
- Make sure 0.0.0.0/0 is allowed
- Click "Confirm"

**Cause 3**: Wrong connection string format
- Should be: `mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/DATABASE`
- Replace USERNAME, PASSWORD, cluster name
- Example: `mongodb+srv://vamsiv:abc123@cluster123.mongodb.net/vrlearn`

---

## 📊 Performance Notes

### Free Tier Expectations
- **Response Time**: 100-500ms (slower than localhost, but acceptable)
- **Cold Start**: 30-60 seconds after 15 min inactivity (free tier feature)
- **Storage**: 512MB free tier (plenty for testing)
- **Uptime**: Good enough for dev/testing (may stop during maintenance)

### Upgrade Options
| Tier | Cost | Uptime | Space |
|------|------|--------|-------|
| Free | $0 | 99.5% | 512MB |
| Starter | $7/month | 99.99% | 10GB |
| Standard | $19/month | 99.99% | 100GB |

---

## ✅ Success Checklist

- [ ] MongoDB Atlas account created
- [ ] Database user created
- [ ] MongoDB connection string generated
- [ ] Render account created
- [ ] Backend deployed to Render
- [ ] All environment variables set:
  - [ ] NODE_ENV = production
  - [ ] MONGODB_URI = (your connection string)
  - [ ] JWT_SECRET = (random secret)
  - [ ] FRONTEND_URL = https://vamsivalluri-19.github.io
- [ ] Backend health check returns OK
- [ ] Frontend config updated with Render URL
- [ ] Changes pushed to GitHub
- [ ] Status page shows all green
- [ ] Can register/login successfully

---

## 🎯 What Happens When Deployed

1. **User visits**: https://vamsivalluri-19.github.io/online-skill-platform/
2. **Browser loads**: HTML, CSS, JavaScript from GitHub Pages
3. **Frontend detects**: "GitHub Pages" environment
4. **API URL becomes**: https://your-render-url.onrender.com
5. **User registers**: Form sent to your backend
6. **Backend receives**: Request from GitHub Pages origin
7. **Backend stores**: User data in MongoDB
8. **User logged in**: Token returned and stored locally
9. **Dashboard loads**: Shows courses from database

---

## 📞 Quick Reference

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | https://vamsivalluri-19.github.io/online-skill-platform/ | Your app |
| Status | https://vamsivalluri-19.github.io/online-skill-platform/status.html | Health check |
| Render | https://dashboard.render.com | Deploy backend |
| MongoDB | https://cloud.mongodb.com | Database |
| GitHub | https://github.com/vamsivalluri-19/online-skill-platform | Source code |

---

## 🎉 You're All Set!

Once you complete these steps, your app will be fully functional. Users anywhere in the world can:
- Create accounts
- Login
- View courses
- Track progress
- All with a real database!

**Estimated Time: 15 minutes**
**Difficulty: Easy - just following steps**

Need help? Check the troubleshooting section or Render/MongoDB dashboards for error logs.

---

**Last Updated**: February 7, 2026  
**Status**: Ready for Render Deployment 🚀
