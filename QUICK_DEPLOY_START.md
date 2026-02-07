# 🚀 QUICK START: Deploy in 10 Minutes

## ✅ What's Been Fixed?

Your frontend now automatically uses the correct API URL:
- **Local**: `http://localhost:5000`
- **Production**: `https://online-skill-platform.onrender.com`

**No more CORS errors!** 🎉

---

## 📝 Quick Deployment Steps

### 1️⃣ Deploy Backend to Render (5 minutes)

1. Go to **[render.com](https://render.com)** → Sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect repository: `vamsivalluri-19/online-skill-platform`
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   ```
   NODE_ENV=production
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=change-this-to-random-string
   FRONTEND_URL=https://vamsivalluri-19.github.io
   ```
6. Click **"Create Web Service"**
7. Wait 2-3 minutes for deployment

### 2️⃣ Get MongoDB Connection String (2 minutes)

1. Go to **[mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)**
2. Sign up → Create **Free** cluster
3. **Database Access**: Create user (username/password)
4. **Network Access**: Allow from anywhere (0.0.0.0/0)
5. Click **"Connect"** → **"Connect your application"** → Copy connection string
6. Replace `<password>` with your actual password
7. Paste into Render env variable `MONGODB_URI`

### 3️⃣ Update Frontend Config (1 minute)

Edit `frontend/js/config.js` and `js/config.js`:
```javascript
production: 'https://YOUR-RENDER-URL.onrender.com',
```

Replace with your actual Render URL (e.g., `https://online-skill-platform-abc123.onrender.com`)

### 4️⃣ Deploy to GitHub Pages (1 minute)

```powershell
git add .
git commit -m "Update Render URL"
git push origin main
```

Then:
1. Go to GitHub repo → **Settings** → **Pages**
2. Source: **main** branch, **/ (root)** folder
3. Click **Save**

### 5️⃣ Test (1 minute)

1. Open `https://vamsivalluri-19.github.io/online-skill-platform/`
2. Press F12 (console) - should see: `Environment: Production`
3. Try Register/Login - should work without errors!

---

## 🎯 Important Notes

- **Free Render Tier**: Sleeps after 15 min of inactivity
  - First request takes 30-60 seconds to wake up
  - Subsequent requests are fast
  
- **GitHub Pages**: Updates in 1-2 minutes after push

- **MongoDB Atlas**: Free tier includes 512MB storage (plenty for testing)

---

## 🔧 Need the Full Guide?

See **[DEPLOY_COMPLETE_GUIDE.md](./DEPLOY_COMPLETE_GUIDE.md)** for:
- Detailed screenshots
- Troubleshooting steps
- Environment variables explanations
- Testing procedures

---

## ✅ Success Checklist

- [ ] Backend deployed on Render
- [ ] MongoDB Atlas connected
- [ ] Frontend config updated with Render URL
- [ ] Changes pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site loads without CORS errors
- [ ] Register/Login works

---

**Ready to deploy?** Start with Step 1! 🚀
