# Pranav Mathur — Portfolio

Full-stack personal portfolio built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React, Vite, Tailwind CSS, Framer Motion, React Router |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB |
| Deploy | Vercel (frontend), Render (backend) |

## Project Structure

```
portfolio/
├── frontend/     # React SPA (Vite + Tailwind)
└── backend/      # Express REST API (MVC)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, profile, CTAs |
| `/about` | Education, skills, achievements, timeline |
| `/projects` | Project grid with search and tech filter |
| `/experience` | Internships, certifications, learning journey |
| `/resume` | Resume preview and download |
| `/contact` | Contact form with MongoDB storage |

## Local Development

### Prerequisites

- Node.js 18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
```

Server runs at `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

App runs at `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |

**Request body (POST /api/contact):**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I'd like to connect."
}
```

## Customization

Before deploying, update:

1. `frontend/public/profile.jpg` — your profile photo
2. `frontend/public/resume.pdf` — your resume PDF
3. `frontend/src/data/projects.js` — your projects and GitHub links
4. `frontend/src/data/about.js` — education and achievements
5. `frontend/src/data/experience.js` — internships and certifications
6. `frontend/src/components/layout/Footer.jsx` — social links

## Deployment

### Frontend (Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `frontend`.
4. Add environment variable:
   - `VITE_API_URL` = your Render backend URL (e.g. `https://your-app.onrender.com`)
5. Deploy. The included `vercel.json` handles SPA routing.

### Backend (Render)

1. Create a **Web Service** on [Render](https://render.com).
2. Connect your GitHub repo; set **Root Directory** to `backend`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Environment variables:
   - `MONGODB_URI` — MongoDB Atlas connection string
   - `CLIENT_URL` — your Vercel frontend URL
   - `NODE_ENV` — `production`
6. Deploy.

### MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a database user and get the connection string.
3. Network Access: allow `0.0.0.0/0` (or Render's IP range) for cloud deployment.

## License

MIT
