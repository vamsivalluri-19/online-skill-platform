# 🖱️ RENDER DEPLOYMENT - VISUAL CLICK-BY-CLICK GUIDE

## PHASE 1: SIGN UP & CREATE ACCOUNT (1 minute)

### Click 1️⃣
```
Go to: https://render.com

Look for: BIG BUTTON "Sign Up with GitHub"
Click it → Authorize render to access your GitHub
```

---

## PHASE 2: DEPLOY BACKEND (2 minutes)

### Click 2️⃣
```
After login, look for: "New" button (TOP RIGHT)
Drop-down menu appears
Select: "Web Service"
```

### Click 3️⃣
```
Look for: "Connect GitHub Repository"
You'll see your repos listed
Find: "online-skill-platform"
Click: "Connect"
```

### Click 4️⃣ 
```
FORM appears with fields:
┌─────────────────────────────────────┐
│ Name: online-skill-platform-api     │
│ Runtime: Node                        │
│ Region: Oregon (or any)              │
│ Branch: main                         │
│ Build Command: npm install           │
│ Start Command: npm start             │
└─────────────────────────────────────┘

Fill these in
Then click: "Create Web Service"
```

### ⏳ Wait 3-5 minutes
```
Render will:
- Pull your code from GitHub
- Install packages (npm install)
- Start your server (npm start)

You'll see green checkmarks and logs scrolling.
When you see: "✓ Your service is live!" 
Your URL is ready! (looks like):
https://online-skill-platform-api-a1b2c3d4.onrender.com

COPY THIS URL! You need it next.
```

---

## PHASE 3: ADD ENVIRONMENT VARIABLES (2 minutes)

### Click 5️⃣
```
In Render dashboard, find your service
Left sidebar: "Environment"
Click it
```

### Click 6️⃣
```
Click: "Add Environment Variable"
(or the + button)

A form appears:
┌──────────────────────────┐
│ Key: JWT_SECRET          │
│ Value: your_secret_12345 │
└──────────────────────────┘

Click "Save"
```

### Click 7️⃣ (Repeat 3 more times)
```
ADD THESE VARIABLES ONE BY ONE:

Variable 2:
Key: NODE_ENV
Value: production
Click "Save"

Variable 3:
Key: FRONTEND_URL
Value: https://vamsivalluri-19.github.io/online-skill-platform
Click "Save"

Variable 4 (OPTIONAL):
Key: MONGODB_URI
Value: mongodb+srv://... (if you have MongoDB Atlas)
Click "Save"

Service will auto-restart.
Wait for green checkmark again ✓
```

---

## PHASE 4: TEST BACKEND (1 minute)

### In Browser:
```
Paste your Render URL + /api/health

Like:
https://online-skill-platform-api-a1b2c3d4.onrender.com/api/health

Press Enter

You should see:
{"status":"ok","timestamp":"...","environment":"production"}

✅ BACKEND IS WORKING!
```

---

## PHASE 5: UPDATE FRONTEND API URL (2 minutes)

### Open PowerShell
```
Click Windows Start
Type: PowerShell
Open: "Windows PowerShell"

Paste this:
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"

Press Enter
```

### Copy-Paste This Command
```
Replace XXX with your actual Render URL!

.\update-backend-url.ps1 -RenderUrl "https://online-skill-platform-api-XXXXX.onrender.com"

Press Enter

Script will:
- Update js/script.js
- Update frontend/js/script.js  
- Commit to Git
- Push to GitHub

DONE! ✓
```

---

## PHASE 6: TEST FULL WEBSITE (2 minutes)

### Wait
```
⏳ Wait 1-2 minutes for GitHub Pages to update
```

### Hard Refresh Browser
```
Press: Ctrl + F5 (Windows)

Go to: https://vamsivalluri-19.github.io/online-skill-platform/
```

### Try Register
```
Click "Register" button
Enter:
  Email: test@example.com
  Password: Test@1234
  
Click "Submit"

Should see: "Registration successful!" ✅
```

### Try Login
```
Click "Login" button
Enter:
  Email: test@example.com
  Password: Test@1234
  
Click "Login"

Should see: Dashboard with courses ✅
```

---

## 🎯 SUMMARY

| Step | Action | Time | Status |
|------|--------|------|--------|
| 1 | Sign up Render | 1 min | ⏳ DO THIS |
| 2 | Deploy backend | 5 min | ⏳ DO THIS |
| 3 | Add env vars | 2 min | ⏳ DO THIS |
| 4 | Test /api/health | 1 min | ⏳ DO THIS |
| 5 | Update frontend | 2 min | ⏳ DO THIS |
| 6 | Test website | 2 min | ⏳ DO THIS |

**Total Time: 13 minutes**

---

## 🎉 WHEN YOU'RE DONE

Your website will be LIVE at:
```
https://vamsivalluri-19.github.io/online-skill-platform/
```

Users can:
- ✅ Register new accounts
- ✅ Login with email/password
- ✅ See dashboard with courses
- ✅ Everything works!

---

## ☎️ Need Help?

**Issue: Can't find "Web Service" button?**
- Look for: "New" button → dropdown menu

**Issue: Environment variables not saving?**
- Click the field, enter value, click "Save" button

**Issue: Service says "Build failed"?**
- Check environment variables are set, wait and it will retry

**Issue: Still getting CORS error?**
- Hard refresh (Ctrl+F5)
- Wait full 2 minutes for GitHub Pages to update

---

**START NOW:** → https://render.com

