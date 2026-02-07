# 🎓 Online Skill Platform - MERN Stack Learning Platform

A full-stack web application for online learning built with MongoDB, Express, React/Vanilla JS, and Node.js.

---

## 🌐 LIVE WEBSITE

### ✅ Frontend (GitHub Pages)
**Status:** Ready to activate  
**URL:** https://vamsivalluri-19.github.io/online-skill-platform/

**Activate now:**
1. Go to: https://github.com/vamsivalluri-19/online-skill-platform/settings/pages
2. Source: Deploy from a branch → main → / (root)
3. Click SAVE
4. Wait 2 minutes → Website goes LIVE!

---

### 🔌 Backend API (Render.com)
**Status:** Ready to deploy  
**URL:** https://online-skill-platform-api.onrender.com (coming soon)

**Deploy now:**
1. Go to: https://render.com
2. New Web Service → Connect GitHub
3. Select this repository
4. Build: `cd backend && npm install`
5. Start: `cd backend && npm start`
6. Add env vars: MONGODB_URI, JWT_SECRET, NODE_ENV=production
7. Deploy → Wait 3-5 minutes → Backend goes LIVE!

---

### 💾 Database (MongoDB Atlas)
**Status:** Ready to setup  
**Platform:** MongoDB Atlas (free tier)

**Setup now:**
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create M0 free cluster
3. Create admin user + whitelist 0.0.0.0/0
4. Get connection string
5. Add to Render as MONGODB_URI env var

---

## ✨ FEATURES

### 🎯 User Management
- ✅ User Registration with validation
- ✅ User Login with JWT authentication
- ✅ OAuth support (Google, GitHub, Facebook)
- ✅ Session management with localStorage
- ✅ Secure password hashing with bcryptjs

### 📚 Learning Platform
- ✅ Course catalog with descriptions
- ✅ Progress tracking
- ✅ Course recommendations
- ✅ YouTube video integration
- ✅ Resource downloads (PDFs, slides, notebooks)

### 🎨 User Experience
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Theme system (Light, Dark, High Contrast)
- ✅ Persistent theme preferences
- ✅ Beautiful gradient UI
- ✅ Smooth animations

### 🔒 Security
- ✅ JWT token-based authentication
- ✅ Password hashing and validation
- ✅ CORS protection
- ✅ Rate limiting
- ✅ Input validation with Joi

---

## 🏗️ TECH STACK

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design, gradients, animations
- **Vanilla JavaScript** - DOM manipulation, API calls
- **Font Awesome** - Icons
- **localStorage** - Client-side data persistence

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Document database
- **Mongoose** - ODM (Object Data Modeling)
- **JWT** - Authentication tokens
- **Passport.js** - OAuth authentication
- **Bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Deployment
- **GitHub Pages** - Frontend hosting (static)
- **Render.com** - Backend API hosting (Node.js)
- **MongoDB Atlas** - Cloud database (free tier)

---

## 📦 PROJECT STRUCTURE

```
online-skill-platform/
├── frontend/                    # Frontend application
│   ├── index.html              # Home page
│   ├── login.html              # Login page
│   ├── register.html           # Registration page
│   ├── dashboard.html          # Main dashboard
│   ├── courses.html            # Courses page
│   ├── css/
│   │   └── auth-style.css      # Styling
│   └── js/
│       └── script.js           # Frontend logic
│
├── backend/                     # Backend API
│   ├── server.js               # Main server
│   ├── package.json            # Dependencies
│   ├── .env.example            # Environment variables template
│   ├── config/
│   │   └── passport.js         # OAuth configuration
│   ├── middleware/
│   │   └── auth-middleware.js  # JWT verification
│   ├── models/
│   │   └── User.js             # User schema
│   ├── routes/
│   │   ├── auth.js             # Authentication routes
│   │   └── auth.routes.js      # Auth endpoints
│   └── utils/
│       └── validators.js       # Input validation
│
├── README.md                    # This file
├── render.yaml                  # Render deployment config
├── app.json                     # App configuration
└── [Documentation files]        # Deployment guides
```

---

## 🚀 DEPLOYMENT STEPS (Quick Start)

### Step 1: Activate Frontend (1 minute)
```
Go to: https://github.com/vamsivalluri-19/online-skill-platform/settings/pages
Settings:
  - Source: Deploy from a branch
  - Branch: main
  - Folder: / (root)
Click: SAVE
Wait: 1-2 minutes
Result: https://vamsivalluri-19.github.io/online-skill-platform/
```

### Step 2: Deploy Backend (5 minutes)
```
Go to: https://render.com
1. New Web Service
2. Connect GitHub → Select this repo
3. Configure:
   - Build Command: cd backend && npm install
   - Start Command: cd backend && npm start
4. Environment Variables:
   - MONGODB_URI: (from MongoDB)
   - JWT_SECRET: YourSecretKey@123
   - NODE_ENV: production
5. Deploy
Result: Your Render URL (something-api.onrender.com)
```

### Step 3: Setup Database (3 minutes)
```
Go to: https://www.mongodb.com/cloud/atlas
1. Create Free M0 Cluster
2. Create Database User (admin)
3. Whitelist IP: 0.0.0.0/0
4. Get Connection String
5. Add to Render as MONGODB_URI
Result: Connected to cloud database
```

### Step 4: Connect Frontend to Backend (2 minutes)
```
Edit: frontend/js/script.js
Find: const API_URL = 'http://localhost:3000/api'
Replace: const API_URL = 'https://your-render-url.onrender.com/api'

Then:
git add .
git commit -m "Update API URL for production"
git push origin main
Wait: 2 minutes for GitHub Pages to update
Result: Full stack connected!
```

**Total deployment time: ~20 minutes**

---

## 📖 DOCUMENTATION

Comprehensive deployment guides are included:
- **[READY_TO_LAUNCH.md](READY_TO_LAUNCH.md)** - Quick start guide
- **[DEPLOYMENT_STATUS.md](DEPLOYMENT_STATUS.md)** - Current deployment status
- **[DEPLOYMENT_LIVE_2026.md](DEPLOYMENT_LIVE_2026.md)** - Detailed deployment guide
- **[GIT_STATUS.md](GIT_STATUS.md)** - Git repository status
- **[GITHUB_DEPLOY_STEP_BY_STEP.md](GITHUB_DEPLOY_STEP_BY_STEP.md)** - Step-by-step instructions
- **[GITHUB_QUICK_COMMANDS.md](GITHUB_QUICK_COMMANDS.md)** - Quick command reference
- **[START_HERE_GITHUB.md](START_HERE_GITHUB.md)** - Getting started guide

---

## 🏃 LOCAL DEVELOPMENT

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/vamsivalluri-19/online-skill-platform.git
cd online-skill-platform
```

**2. Setup Backend**
```bash
cd backend
npm install
```

**3. Configure Environment Variables**
```bash
# In backend folder, create .env file
MONGODB_URI=mongodb+srv://admin:password@cluster.mongodb.net/online-skill-db
JWT_SECRET=your-secret-key-here
NODE_ENV=development
PORT=3000
```

**4. Start Backend Server**
```bash
npm start
# Server runs on http://localhost:3000
```

**5. Start Frontend**
```bash
# Open frontend/index.html in browser
# Or use a local server:
python -m http.server 8000
# Visit: http://localhost:8000/frontend/
```

---

## 🧪 API ENDPOINTS

### Authentication
```
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # Login user
POST   /api/auth/logout            # Logout user
GET    /api/auth/profile           # Get user profile
POST   /api/auth/refresh           # Refresh JWT token
```

### User Management
```
GET    /api/users/:id              # Get user by ID
PUT    /api/users/:id              # Update user profile
DELETE /api/users/:id              # Delete user account
```

---

## 🔐 ENVIRONMENT VARIABLES

**Backend (.env file)**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your-secret-key-minimum-32-characters-recommended
NODE_ENV=production
PORT=3000
CORS_ORIGIN=https://vamsivalluri-19.github.io/online-skill-platform
```

**Frontend (frontend/js/script.js)**
```javascript
const API_URL = 'https://your-render-backend.onrender.com/api';
```

---

## 📊 FEATURES BREAKDOWN

### 👤 User Authentication
- [x] Email/password registration
- [x] Secure login with JWT
- [x] Password hashing
- [x] OAuth integration ready
- [x] Session persistence
- [x] Logout functionality

### 📚 Course Management
- [x] Display courses
- [x] Course descriptions
- [x] Progress tracking
- [x] Video links (YouTube)
- [x] Resource downloads
- [x] Course recommendations

### 🎨 User Interface
- [x] Responsive design
- [x] Mobile-first approach
- [x] Theme switcher
- [x] Dark mode support
- [x] High contrast mode
- [x] Smooth animations

### 🔒 Security
- [x] CORS protection
- [x] Rate limiting
- [x] Input validation
- [x] Password hashing
- [x] JWT authentication
- [x] Helmet.js headers

---

## 🐛 TROUBLESHOOTING

### Frontend not loading?
- Check if GitHub Pages is enabled in Settings
- Verify repository is PUBLIC
- Clear browser cache (Ctrl+F5)
- Wait 2-5 minutes for deployment

### Backend not responding?
- Check Render service logs
- Verify MONGODB_URI is correct
- Ensure database user credentials are saved
- Check IP whitelist in MongoDB Atlas

### Database connection failing?
- Verify connection string in MongoDB Atlas
- Check username and password
- Ensure IP is whitelisted (use 0.0.0.0/0 for dev)
- Check MongoDB user has proper permissions

### Login not working?
- Open browser console (F12) for error messages
- Verify API URL is correct in frontend
- Check backend is running on Render
- Check MongoDB connection

---

## 📈 PERFORMANCE

- Frontend: Static HTML/CSS/JS (~100KB)
- Backend: Node.js on Render (cold start ~3-5 seconds)
- Database: MongoDB Atlas free tier (512MB storage)
- Load time: ~2-3 seconds (first visit)
- Subsequent visits: ~1-2 seconds

---

## 🎯 FUTURE ENHANCEMENTS

- [ ] React/Vue frontend migration
- [ ] GraphQL API
- [ ] Video streaming integration
- [ ] Payment processing
- [ ] Certificate generation
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] AI-powered recommendations

---

## 👨‍💻 AUTHOR

**Developer:** Vamsi Valluri  
**GitHub:** https://github.com/vamsivalluri-19  
**Email:** vamsivalluri19@gmail.com  

---

## 📄 LICENSE

This project is open source and available under the MIT License.

---

## 🤝 SUPPORT

Need help? Check the documentation files or contact the author.

### Quick Links
- **Repo:** https://github.com/vamsivalluri-19/online-skill-platform
- **GitHub Pages:** https://vamsivalluri-19.github.io/online-skill-platform/
- **Render Dashboard:** https://dashboard.render.com
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas

---

## ✅ DEPLOYMENT CHECKLIST

- [x] Code on GitHub
- [ ] GitHub Pages activated
- [ ] Backend deployed on Render
- [ ] Database setup on MongoDB Atlas
- [ ] API URL updated in frontend
- [ ] Full stack tested
- [ ] Website live and working

---

## 🎉 STATUS

**Repository:** Active ✅  
**Code:** On GitHub ✅  
**Frontend:** Ready to deploy ⏳  
**Backend:** Ready to deploy ⏳  
**Database:** Ready to setup ⏳  

**Next Step:** Follow the "DEPLOYMENT STEPS" section above!

---

**Last Updated:** February 7, 2026  
**Status:** Ready for Production Deployment 🚀

