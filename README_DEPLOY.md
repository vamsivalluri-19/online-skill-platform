# 🎓 Online Skill Platform - VNR Learning

A comprehensive online learning platform built with **MERN Stack** (MongoDB, Express, React, Node.js).

[![GitHub](https://img.shields.io/badge/GitHub-vamsivalluri--19-blue?logo=github)](https://github.com/vamsivalluri-19/online-skill-platform)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)](#)

---

## 📺 Live Demo

| Component | URL |
|-----------|-----|
| **🌐 Frontend** | [https://vamsivalluri-19.github.io/online-skill-platform/](https://vamsivalluri-19.github.io/online-skill-platform/) |
| **⚙️ Backend API** | [https://online-skill-platform-api.onrender.com/](https://online-skill-platform-api.onrender.com/) |
| **📦 GitHub Repo** | [vamsivalluri-19/online-skill-platform](https://github.com/vamsivalluri-19/online-skill-platform) |

---

## ✨ Features

### 🎯 Core Features
- ✅ **User Authentication** - Secure login/register with JWT
- ✅ **Course Management** - Browse, enroll, and track progress
- ✅ **Dashboard** - Personal learning hub with stats
- ✅ **Course Recommendations** - AI-powered suggestions
- ✅ **Progress Tracking** - Visual progress indicators
- ✅ **Certificates** - Download completion certificates
- ✅ **Resource Downloads** - PDFs, slides, notebooks
- ✅ **YouTube Integration** - Direct video learning links
- ✅ **Social Login** - GitHub, Google, Facebook auth
- ✅ **Theme Support** - Light, Dark, High Contrast modes
- ✅ **Responsive Design** - Works on all devices
- ✅ **Security** - Helmet.js, CORS, Rate limiting

### 📱 Pages Included
- `index.html` - Landing page
- `login.html` - User authentication
- `register.html` - New user signup
- `dashboard.html` - Main learning dashboard
- `courses.html` - Course catalog

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome Icons
- Responsive Grid Layout
- LocalStorage for data persistence

### Backend
- **Node.js** + Express.js
- **MongoDB** Atlas (Database)
- **JWT** Authentication
- **Passport.js** (OAuth)
- Helmet.js (Security)
- CORS & Rate Limiting

---

## 🚀 Quick Deploy (15 minutes)

Follow the **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** guide for step-by-step deployment instructions.

Or dive deeper with **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**.

### TL;DR
```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repo at https://github.com/new
# 3. Push code
git remote add origin https://github.com/vamsivalluri-19/online-skill-platform.git
git push -u origin main

# 4. Enable GitHub Pages (Settings → Pages)
# 5. Deploy Backend on Render.com
# 6. Set environment variables
# 7. Done! ✅
```

---

## 📋 Installation (Local Development)

### Prerequisites
- Node.js v14+ 
- MongoDB installed or Atlas account
- Git

### Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your MongoDB URI and JWT secret
# MONGODB_URI=mongodb+srv://...
# JWT_SECRET=your-secret-key

# Start development server
npm run dev
```

### Frontend Setup
```bash
cd frontend

# Serve with any HTTP server
# Option 1: Python
python -m http.server 5500

# Option 2: Node http-server
npx http-server
```

Visit: `http://localhost:5500`

---

## 📁 Project Structure

```
online-skill-platform/
├── frontend/
│   ├── index.html            # Landing page
│   ├── login.html            # Login page
│   ├── register.html         # Registration page
│   ├── dashboard.html        # Main dashboard
│   ├── courses.html          # Courses listing
│   ├── css/
│   │   └── auth-style.css    # Styling
│   └── js/
│       └── script.js         # Frontend logic
│
├── backend/
│   ├── server.js             # Main server file
│   ├── package.json          # Dependencies
│   ├── config/               # Configuration
│   ├── models/               # Database models
│   ├── routes/               # API routes
│   ├── middleware/           # Custom middleware
│   └── utils/                # Helper functions
│
├── .github/                  # GitHub configuration
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── render.yaml              # Render deployment config
├── app.json                 # App.json for hosting
├── QUICK_DEPLOY.md          # Quick deployment guide
├── DEPLOYMENT_GUIDE.md      # Full deployment guide
└── README.md                # This file
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this

# Environment
NODE_ENV=development
PORT=3000

# Frontend URL
FRONTEND_URL=http://localhost:5500

# OAuth (Optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
```

---

## 📚 API Documentation

### Base URL
- **Local:** `http://localhost:3000`
- **Production:** `https://online-skill-platform-api.onrender.com`

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/profile` | Get user profile |
| PUT | `/api/auth/profile` | Update profile |

### Course Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get course details |
| POST | `/api/courses/enroll` | Enroll in course |

---

## 🎨 Features Showcase

### Dashboard Features
- 📊 Learning Statistics (Hours, Courses, Certificates)
- 🎬 Active Courses with Progress Bars
- 📝 Recent Activity Timeline
- 🎯 Personalized Recommendations
- ⭐ Course Ratings & Reviews
- 📥 Resource Downloads (PDF, Slides, Notebooks)
- 🎓 Certificate Management
- 📱 Responsive Mobile View

### Security Features
- 🔒 JWT Authentication
- 🛡️ Helmet.js Protection
- ⏱️ Rate Limiting
- 🔐 Password Hashing (bcryptjs)
- 🌐 CORS Protection
- 🔄 Secure Token Refresh

### User Experience
- 🌓 Dark/Light/High-Contrast Themes
- 🎨 Beautiful Gradient Designs
- ✨ Smooth Animations
- 📱 Mobile-First Responsive
- ♿ Accessibility Features
- 🚀 Fast Loading

---

## 🐛 Known Issues & Limitations

- Free Render tier has 15-minute inactivity sleep (wakes on request)
- MongoDB free tier: 512MB storage limit
- GitHub Pages: Static content only (no server-side rendering)

---

## 🔄 Updates & Maintenance

Regular updates push to GitHub automatically trigger:
- ✅ Frontend rebuild on GitHub Pages
- ✅ Backend redeploy on Render
- ✅ Database syncing

---

## 📞 Support

### Issues?
1. Check logs in Render dashboard
2. Review [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
3. Check browser console (F12)
4. Verify environment variables

### Need Help?
- Create a GitHub issue
- Check existing documentation
- Review backend logs in Render

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Developer

Created by **vamsivalluri-19**

- 🔗 **GitHub:** [vamsivalluri-19](https://github.com/vamsivalluri-19)
- 📧 **Email:** your-email@gmail.com
- 💼 **Portfolio:** [your-portfolio.com](https://your-portfolio.com)

---

## 🌟 Show Your Support

If you found this project helpful:
- ⭐ Star the repository
- 🔄 Fork the project
- 📢 Share with friends
- 💬 Leave feedback

---

## 🗺️ Roadmap

### In Progress
- [ ] Mobile app (React Native)
- [ ] Live chat support
- [ ] Video streaming optimization
- [ ] Advanced analytics

### Planned
- [ ] AI-powered course recommendations
- [ ] Gamification (badges, points)
- [ ] Instructor dashboard
- [ ] Payment integration

---

## 📖 Documentation

- [Quick Deploy Guide](./QUICK_DEPLOY.md) - 15-minute setup
- [Full Deployment Guide](./DEPLOYMENT_GUIDE.md) - Detailed steps
- [API Documentation](#-api-documentation) - Above ☝️

---

**Built with ❤️ for online learners worldwide.**

**[View Live Website](https://vamsivalluri-19.github.io/online-skill-platform/)** | **[GitHub Repo](https://github.com/vamsivalluri-19/online-skill-platform)** | **[Backend API](https://online-skill-platform-api.onrender.com/)**

---

*Last Updated: February 7, 2026*
