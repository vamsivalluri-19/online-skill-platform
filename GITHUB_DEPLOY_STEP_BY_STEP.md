# 🚀 DEPLOY TO GITHUB - STEP BY STEP GUIDE (PowerShell)

**Account:** vamsivalluri-19  
**Time Required:** 10-15 minutes  
**Cost:** FREE ✅

---

## 📋 TABLE OF CONTENTS
1. [PART 1: Prepare Your Computer](#part-1-prepare-your-computer)
2. [PART 2: Initialize Git Locally](#part-2-initialize-git-locally)
3. [PART 3: Create GitHub Repository](#part-3-create-github-repository)
4. [PART 4: Push Files to GitHub](#part-4-push-files-to-github)
5. [PART 5: Enable GitHub Pages](#part-5-enable-github-pages)
6. [VERIFICATION](#verification)

---

## ✅ PART 1: Prepare Your Computer

### Step 1.1: Check if Git is Installed

**Open PowerShell and run:**

```powershell
git --version
```

**Expected Output:**
```
git version 2.x.x (or higher)
```

### Step 1.2: If Git is NOT Installed

**Download & Install Git:**
1. Go to: https://git-scm.com/download/win
2. Download the installer
3. Run installer with default settings
4. Restart PowerShell

### Step 1.3: Configure Git (Do This Once)

**Open PowerShell and run:**

```powershell
git config --global user.name "vamsivalluri-19"
git config --global user.email "your-email@gmail.com"
git config --global core.autocrlf true
```

**Verify configuration:**

```powershell
git config --global --list
```

---

## ✅ PART 2: Initialize Git Locally

### Step 2.1: Navigate to Your Project

**Copy-paste this in PowerShell:**

```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"
```

**Verify you're in the right folder:**

```powershell
pwd
```

**Should show:**
```
C:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform
```

### Step 2.2: Check Current Folder Structure

```powershell
ls -la
```

**Should show:**
```
.github/
.gitignore          ← (Already created by me)
.hintrc
app.json            ← (Deployment config)
backend/
CHECKLIST.md
deploy.ps1
DEPLOYMENT_GUIDE.md
deploy.sh
frontend/
QUICK_DEPLOY.md
README.md
README_DEPLOY.md
render.yaml
```

### Step 2.3: Initialize Git Repository

```powershell
git init
```

**Output:**
```
Initialized empty Git repository in C:\Users\VAMSI VALLURI\...
```

### Step 2.4: Verify Git Configuration

```powershell
git config user.name
git config user.email
```

**Should show:**
```
vamsivalluri-19
your-email@gmail.com
```

---

## ✅ PART 3: Create GitHub Repository

### Step 3.1: Go to GitHub New Repository

**Open in browser:**
```
https://github.com/new
```

### Step 3.2: Fill in Repository Details

**Important - Use EXACT values:**

| Field | Value |
|-------|-------|
| **Repository name** | `online-skill-platform` |
| **Description** | `Online Learning Platform - MERN Stack` |
| **Visibility** | 🔵 **PUBLIC** (REQUIRED!) |
| **Initialize** | ❌ DO NOT check "Add README" |
| **Initialize** | ❌ DO NOT add .gitignore |
| **Initialize** | ❌ DO NOT add license |

### Step 3.3: Create Repository

Click: **"Create repository"** button

You'll see this page with instructions. **COPY YOUR URL** from "…or push an existing repository":

Example URL:
```
https://github.com/vamsivalluri-19/online-skill-platform.git
```

---

## ✅ PART 4: Push Files to GitHub

### Step 4.1: Add Remote Origin (Copy Your URL)

**In PowerShell, run:**

```powershell
git remote add origin https://github.com/vamsivalluri-19/online-skill-platform.git
```

**Verify it worked:**

```powershell
git remote -v
```

**Should show:**
```
origin  https://github.com/vamsivalluri-19/online-skill-platform.git (fetch)
origin  https://github.com/vamsivalluri-19/online-skill-platform.git (push)
```

### Step 4.2: Stage All Files

```powershell
git add .
```

**Verify files are staged:**

```powershell
git status
```

**Should show green "Changes to be committed" section with all files**

### Step 4.3: Create Initial Commit

```powershell
git commit -m "Initial commit: Online Skill Platform - MERN Stack"
```

**Output example:**
```
[main (root-commit) abc1234] Initial commit: Online Skill Platform - MERN Stack
 50 files changed, 15000 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 app.json
 ...
```

### Step 4.4: Rename Branch to Main (if needed)

```powershell
git branch -M main
```

### Step 4.5: Push to GitHub

```powershell
git push -u origin main
```

**First time might ask for credentials:**
- GitHub username: `vamsivalluri-19`
- Password: Use your GitHub password or Personal Access Token

**Expected output:**
```
Enumerating objects: 50, done.
Counting objects: 100% (50/50), done.
Delta compression using up to 8 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (50/50), 2.50 MiB | 5.00 MiB/s
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/vamsivalluri-19/online-skill-platform.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### Step 4.6: Verify Push was Successful

```powershell
git log --oneline
```

**Should show your commit:**
```
abc1234 (HEAD -> main, origin/main) Initial commit: Online Skill Platform - MERN Stack
```

---

## ✅ PART 5: Enable GitHub Pages

### Step 5.1: Go to Your GitHub Repository

**Go to:**
```
https://github.com/vamsivalluri-19/online-skill-platform
```

### Step 5.2: Open Settings

Click: **Settings** (top right menu) → **Pages** (left sidebar)

### Step 5.3: Configure GitHub Pages

**Find the "Build and deployment" section:**

1. **Source:** Click dropdown → Select **"Deploy from a branch"**
2. **Branch:** Click first dropdown → Select **"main"**
3. **Folder:** Click second dropdown → Select **"/ (root)"**
4. Click: **Save**

**Wait 1-2 minutes...**

### Step 5.4: Check Deployment Status

Refresh the page. You should see:

```
✅ Your site is live at: https://vamsivalluri-19.github.io/online-skill-platform/
```

---

## ✅ VERIFICATION

### Step 1: Check GitHub Repository

1. Go to: https://github.com/vamsivalluri-19/online-skill-platform
2. Verify:
   - ✅ All folders visible (backend, frontend, .github)
   - ✅ All files visible (CHECKLIST.md, QUICK_DEPLOY.md, etc.)
   - ✅ "main" branch is selected
   - ✅ Shows "X commits"

### Step 2: Check GitHub Pages

1. Go to: https://github.com/vamsivalluri-19/online-skill-platform/settings/pages
2. Verify:
   - ✅ Source: "Deploy from a branch"
   - ✅ Branch: "main"
   - ✅ Shows: "Your site is live at https://vamsivalluri-19.github.io/online-skill-platform/"

### Step 3: Test Your Website

**Open in browser:**
```
https://vamsivalluri-19.github.io/online-skill-platform/
```

You should see your landing page!

---

## 📊 FOLDER STRUCTURE ON GITHUB

After successful push, your GitHub should have:

```
online-skill-platform/
├── .github/
│   └── workflows/
├── .gitignore
├── .hintrc
├── app.json
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── css/
│   ├── js/
│   ├── .env
│   ├── courses.html
│   ├── dashboard.html
│   ├── index.html
│   ├── login.html
│   └── register.html
├── CHECKLIST.md
├── DEPLOYMENT_GUIDE.md
├── deploy.ps1
├── deploy.sh
├── QUICK_DEPLOY.md
├── README.md
├── README_DEPLOY.md
└── render.yaml
```

---

## 🎯 WHAT YOU NOW HAVE

✅ **GitHub Repository:** https://github.com/vamsivalluri-19/online-skill-platform  
✅ **Live Website:** https://vamsivalluri-19.github.io/online-skill-platform/  
✅ **All Files:** Uploaded to GitHub (50+ files)  
✅ **Version Control:** Full git history  

---

## ⚙️ NEXT STEPS

Now that frontend is on GitHub Pages:

1. **Deploy Backend** on Render.com
   - Follow: QUICK_DEPLOY.md (Step 6)

2. **Set Up Database** on MongoDB Atlas
   - Follow: QUICK_DEPLOY.md (Step 5)

3. **Connect Frontend to Backend**
   - Update API URLs in frontend files
   - Push to GitHub (auto-deploys!)

---

## 🐛 TROUBLESHOOTING DEPLOYMENT

### ❌ "Please tell me who you are"
```powershell
git config --global user.name "vamsivalluri-19"
git config --global user.email "your-email@gmail.com"
```

### ❌ "fatal: destination path already exists"
```powershell
# You already have a .git folder, that's OK
# Just continue with: git status
```

### ❌ "Authentication failed" when pushing
```powershell
# Generate GitHub Personal Access Token:
# 1. Go to: https://github.com/settings/tokens
# 2. Click: Generate new token
# 3. Copy the token
# 4. Paste token as password when Git asks
```

### ❌ Website not showing
- Wait 2-3 minutes (GitHub Pages takes time)
- Hard refresh: Ctrl+Shift+Del (clear cache)
- Check GitHub → Settings → Pages (verify it's enabled)

### ❌ Only showing "404 Not Found"
- Check if it's PUBLIC repository
- Verify Settings → Pages has correct branch/folder
- Ensure index.html exists in root of frontend/

---

## 💡 TIPS & TRICKS

### Make Future Commits Faster

Instead of doing all steps 4.1-4.5 next time:

```powershell
# After editing files, just run:
git add .
git commit -m "Your message here"
git push origin main
```

### Check What Changed

```powershell
git status
```

### View Commit History

```powershell
git log --oneline --graph
```

### Undo Last Commit (if needed)

```powershell
git reset --soft HEAD~1
```

---

## 🎉 CONGRATULATIONS!

You've successfully deployed to GitHub with:
- ✅ Public repository
- ✅ All files organized in folders
- ✅ GitHub Pages enabled
- ✅ Live website online

**Next:** Deploy backend on Render.com! 🚀

---

**Questions? Check:**
- CHECKLIST.md
- QUICK_DEPLOY.md
- DEPLOYMENT_GUIDE.md

**Happy Deploying!** 🎊
