# Pranav Mathur — Developer Portfolio

A modern, high-performance personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express**, and **MongoDB**.

Featuring a sleek glassmorphic UI, responsive 3-column & 4-column layouts, smooth page transitions, non-cropped smart media presentation, interactive modal galleries, and an extensive showcase of projects, hackathons, and professional experience.

---

## ✨ Features & Highlights

- 🎨 **Modern Glassmorphic Design System**: Custom HSL color palettes, dark/light theme toggle, glass panels, soft shadows, and subtle micro-animations inspired by Linear, Vercel, Apple, and GitHub Primer.
- 🏆 **Dedicated Hackathons Showcase (`/hackathons`)**:
  - Highlights national competitions: **Smart India Hackathon (SIH)**, **DronePratibimb**, and **Cognitive Chaos**.
  - **Compact Cards**: Fixed 195px cover image height, 24px headings, clamped 2-line descriptions, max 4 tech stack pills, and certificate count badges.
  - **Hackathon Detail Modal**: Comprehensive popup displaying problem statements, achievements, verified certificates, and full technology stacks.
- 🖼️ **Interactive Gallery & Lightbox**:
  - **Responsive 4-Column Grid**: Displays all event photos and certificates together (4 cols on desktop, 3 on tablet, 2 on mobile).
  - **Fullscreen Lightbox**: Zoom controls (+ / - / Reset), Next / Previous navigation, keyboard arrow shortcuts, Escape key dismiss, and outdoor backdrop click handling.
  - **Clean Header**: Displays project name, photo count, and top-right close button without bottom description clutter.
- 📸 **Smart Non-Cropped Media Display (`SmartProjectImage`)**:
  - Preserves full image aspect ratios (`object-contain`) so no faces, team members, certificates, or text are cut off.
  - Ambient blurred background layer (`blur-xl opacity-35 scale-110`) extracts image colors to eliminate empty white/black side bars while keeping cards perfectly aligned.
- 💻 **Projects Showcase (`/projects`)**: Search and filter by technology tags with direct live demo and GitHub repository links.
- 🎓 **Experience & Education (`/experience` & `/about`)**: Internships, certifications, timeline milestones, and learning journey.
- 📄 **Resume & Contact (`/resume` & `/contact`)**: Resume preview & PDF download along with a contact form connected to Express & MongoDB backend.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite 5, Tailwind CSS 3, Framer Motion, React Router 6, Lucide Icons, React Helmet Async |
| **Media & Optimization** | Cloudinary Image Optimization (`f_auto,q_auto`), Smart Canvas Ambient Blur |
| **Backend API** | Node.js, Express.js (MVC Architecture), Mongoose |
| **Database** | MongoDB / MongoDB Atlas |
| **Deployment** | Vercel (Frontend SPA), Render (Backend API) |

---

## 📁 Project Structure

```
Portfolio/
├── frontend/                     # React Single Page Application (Vite + Tailwind)
│   ├── src/
│   │   ├── components/
│   │   │   ├── hackathons/       # HackathonCard, HackathonModal, HackathonDetailsModal, HackathonTimeline
│   │   │   ├── layout/           # Navbar, NavLinkItem, Footer, Layout, PageTransition
│   │   │   ├── seo/              # PageMeta SEO component
│   │   │   └── ui/               # SmartProjectImage, ThemeToggle, Toast, SocialIcons
│   │   ├── data/                 # hackathons.ts, projects.js, experience.js, about.js
│   │   ├── pages/                # Home, About, Projects, Hackathons, Experience, Resume, Contact
│   │   ├── App.jsx               # React Router configuration
│   │   └── index.css             # Theme custom variables, glassmorphism utilities & base styles
│   ├── package.json
│   └── vite.config.js
└── backend/                      # Express REST API
    ├── config/                   # Database configuration
    ├── controllers/              # Contact controller & business logic
    ├── models/                   # Mongoose schemas
    ├── routes/                   # API routes (/api/contact, /api/health)
    ├── server.js
    └── package.json
```

---

## 🌐 Routes Overview

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Hero section, animated background orbs, quick bio, CTAs |
| `/about` | **About** | Profile summary, skills matrix, education, interactive timeline |
| `/projects` | **Projects** | Filterable project cards with live demo and GitHub links |
| `/hackathons` | **Hackathons** | National competition cards, interactive gallery grid, lightbox, and milestone timeline |
| `/experience` | **Experience** | Professional internships, verified certifications, and achievements |
| `/resume` | **Resume** | PDF resume viewer and download button |
| `/contact` | **Contact** | Contact form integrated with backend API & MongoDB storage |

---

## 🚀 Local Development Setup

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **MongoDB** (Local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

---

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/Pranav0331/Portfolio.git
cd Portfolio
```

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start local development server
npm run dev
```

The frontend app will launch at `http://localhost:5173`.

---

### 3. Backend Setup

```bash
cd ../backend

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Start backend server
npm run dev
```

The backend server will run at `http://localhost:5000`.

---

## 🔧 Building for Production

To test or verify the production bundle locally:

```bash
cd frontend
npm run build
```

This compiles optimized HTML, CSS, and JavaScript bundles inside `frontend/dist/`.

---

## 📤 Deployment Guide

### Frontend (Vercel)

1. Push your changes to your GitHub repository (`main` branch).
2. Import your repository in [Vercel](https://vercel.com).
3. Set **Root Directory** to `frontend`.
4. Add Environment Variable:
   - `VITE_API_URL` = Your backend API URL (e.g. `https://your-backend.onrender.com`)
5. Click **Deploy**. SPA routes are automatically managed via `frontend/vercel.json`.

---

### Backend (Render)

1. Create a **Web Service** on [Render](https://render.com).
2. Connect your GitHub repository and set **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add Environment Variables:
   - `MONGODB_URI` = MongoDB Atlas connection string
   - `CLIENT_URL` = Your frontend URL
   - `NODE_ENV` = `production`

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
