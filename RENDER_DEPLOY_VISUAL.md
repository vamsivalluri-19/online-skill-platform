# 🚀 DEPLOY BACKEND TO RENDER - STEP BY STEP VISUAL GUIDE

**Follow these 5 steps to deploy your backend to Render RIGHT NOW**

---

## ✅ STEP 1 — Go to Render Website

**Click here**: https://render.com

You should see this page:
```
┌─────────────────────────────────┐
│  Render                         │
│  ┌─────────────────────────╖   │
│  │ Sign Up / Sign In       ║   │
│  └─────────────────────────╜   │
└─────────────────────────────────┘
```

---

## ✅ STEP 2 — Sign Up with GitHub

1. Click **Sign Up**
2. Choose **Continue with GitHub**
3. Authorize Render to access your GitHub

Now you're in the <mark>Render Dashboard</mark>.

---

## ✅ STEP 3 — Create New Web Service

On the dashboard:
1. Click the **+ New** button (top right)
2. Select **Web Service**

You'll see your GitHub repos list.

3. **Find and click**: `online-skill-platform`
4. Click **Connect**

---

## ✅ STEP 4 — Configure Your Backend

You'll see a form. Fill in these **EXACTLY**:

### Basic Settings:
```
┌──────────────────────────────────────┐
│ Name:             online-skill-     │
│                   platform           │
│                                      │
│ Root Directory:   backend   ← MUST BE THIS!
│                                      │
│ Runtime:          Node               │
│                                      │
│ Region:           (any - keep default)
│                                      │
│ Branch:           main               │
└──────────────────────────────────────┘
```

### Build & Start Commands:
```
Build Command:    npm install
Start Command:    npm start
```

### Plan:
```
Select: FREE (free tier)
```

---

## ✅ STEP 5 — Add Environment Variables

Still on same page, scroll down to **Environment**:

Click **Add Environment Variable** and paste these ONE BY ONE:

```
KEY:                    VALUE:
──────────────────────────────────────────
NODE_ENV                production
JWT_SECRET              your-secret-key-12345
FRONTEND_URL            https://vamsivalluri-19.github.io/online-skill-platform
```

**For MONGODB_URI** (optional - test first):
- Get from: https://www.mongodb.com/cloud/atlas
- Or skip for now

---

## ✅ STEP 6 — Deploy!

1. Scroll down
2. Click **Create Web Service** button
3. **Wait 2-5 minutes** ⏳

You'll see:
```
┌─────────────────────────────────┐
│ Building...                     │
│ ████████░░░░░░░░░░  50%        │
│                                 │
│ Deploying...                    │
│ Waiting for startup...          │
│                                 │
│ ✅ Live!                        │
│ URL: https://online-skill-    │
│ platform-xyz.onrender.com       │
└─────────────────────────────────┘
```

---

## ✅ STEP 7 — Test Your Backend

Once it shows **Live**, copy the URL from Render.

Open this in your browser (add `/api/health`):
```
https://online-skill-platform-xyz.onrender.com/api/health
```

You should see:
```json
{
  "status": "ok",
  "message": "Server is running",
  "mongodb": "connected",
  "environment": "production"
}
```

✅ **If you see this, your backend is LIVE!**

---

## 🎉 FINAL STEP

**Copy your Render URL from the dashboard** and send it to me here.

Example:
```
https://online-skill-platform-xyz.onrender.com
```

Then I will:
1. Update `config.js` with your actual Render URL (if different)
2. Push to GitHub
3. Your website will be **100% WORKING**

---

## ⚠️ Common Issues

**Build failed?**
- Check Root Directory is `backend`
- Check Start Command is `npm start`
- View logs in Render

**Still showing error after 5 min?**
- Hard refresh your website: `Ctrl + Shift + R`
- Wait another 2 minutes
- Check backend logs in Render dashboard

**Deployment stuck?**
- Check Render logs for errors
- Usually it's missing environment variables
- Add them and try again

---

**👉 DO THIS NOW:**
1. Go to https://render.com
2. Follow steps 1-7
3. Send me the URL

**You'll be LIVE in 10 minutes!** 🚀
