# 🎯 GITHUB DEPLOYMENT - QUICK COPY-PASTE COMMANDS

**Copy & Paste Each Section in PowerShell (in order)**

---

## ✅ Command 1: Navigate to Project Folder

```powershell
cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"
```

**Verify you're in the right place:**
```powershell
pwd
```

Should show:
```
C:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform
```

---

## ✅ Command 2: Configure Git (One Time)

```powershell
git config --global user.name "vamsivalluri-19"
git config --global user.email "your-email@gmail.com"
```

Replace `your-email@gmail.com` with your actual email!

---

## ✅ Command 3: Initialize Git Repository

```powershell
git init
```

Should output:
```
Initialized empty Git repository in C:\Users\...
```

---

## ✅ Command 4: Add All Files

```powershell
git add .
```

Check what will be added:
```powershell
git status
```

---

## ✅ Command 5: Create First Commit

```powershell
git commit -m "Initial commit: Online Skill Platform"
```

Should show:
```
[main (root-commit) abc1234] Initial commit: Online Skill Platform
 50 files changed, 15000 insertions(+)
```

---

## ✅ Command 6: Add GitHub Remote

**First, get your URL from GitHub:**

1. Go to: https://github.com/new
2. Name: `online-skill-platform`
3. Make it PUBLIC ⭐
4. Create repository
5. Copy the URL from "…or push an existing repository"
6. It looks like: `https://github.com/vamsivalluri-19/online-skill-platform.git`

**Then run:**

```powershell
git remote add origin https://github.com/vamsivalluri-19/online-skill-platform.git
```

**Replace the URL with YOUR actual GitHub URL!**

Verify:
```powershell
git remote -v
```

---

## ✅ Command 7: Rename Branch to Main

```powershell
git branch -M main
```

---

## ✅ Command 8: Push to GitHub

```powershell
git push -u origin main
```

**GitHub may ask for authentication:**
- Username: `vamsivalluri-19`
- Password: Your GitHub password (or Personal Access Token)

**Wait for it to complete...**

Should end with:
```
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## ✅ Command 9: Verify Push Success

```powershell
git log --oneline
```

Should show your commit

---

## 🌐 Command 10: Enable GitHub Pages (Browser)

1. Go to: https://github.com/vamsivalluri-19/online-skill-platform
2. Click: **Settings** (top menu)
3. Click: **Pages** (left sidebar)
4. Set:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. Click: **Save**
6. Wait 1-2 minutes

---

## 🎉 DONE!

Your website is LIVE at:

```
https://vamsivalluri-19.github.io/online-skill-platform/
```

---

## 📋 Quick Reference Table

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `cd "c:\Users\VAMSI VALLURI\OneDrive\Documents\online-skill-platform"` | Go to folder |
| 2 | `git config --global user.name "vamsivalluri-19"` | Set your name |
| 2b | `git config --global user.email "your-email@gmail.com"` | Set your email |
| 3 | `git init` | Initialize repo |
| 4 | `git add .` | Stage all files |
| 5 | `git commit -m "Initial commit: Online Skill Platform"` | Create commit |
| 6 | `git remote add origin [YOUR_URL]` | Add GitHub URL |
| 7 | `git branch -M main` | Rename to main |
| 8 | `git push -u origin main` | Push to GitHub |
| 10 | Settings → Pages → Save | Enable GitHub Pages |

---

## ⚡ Or Use the Automated Script

Instead of doing all commands manually, just run:

```powershell
.\GitHubDeploy.ps1
```

It will guide you through everything automatically!

---

## 🛠️ If Something Goes Wrong

### Error: "Git not found"
**Solution:** Install Git from https://git-scm.com/download/win

### Error: "Already exists"
**Solution:** You might already have a git repo
```powershell
git status
```

### Error: "Authentication failed"
**Solution:** Use Personal Access Token instead of password
1. Go to: https://github.com/settings/tokens
2. Generate new token
3. Use as password when prompted

### Can't push changes
**Solution:** Make sure remote is set correctly
```powershell
git remote -v
```

---

## 📚 Need Help?

- Read: `GITHUB_DEPLOY_STEP_BY_STEP.md` (detailed guide)
- Read: `QUICK_DEPLOY.md` (overview)
- Read: `CHECKLIST.md` (complete checklist)

---

**That's it! Your code is on GitHub!** 🚀
