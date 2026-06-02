# Paul Jason Borlagdan — Portfolio

A full-stack developer portfolio. **React (Vite)** frontend with a bento-grid layout, backed by a **Node / Express** API that powers a working contact form.

## Tech

- **Frontend:** React 18, Vite
- **Backend:** Node.js, Express
- **Styling:** plain CSS with design tokens (no framework)

## Project structure

```
portfolio-app/
├── client/                 # React + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx          # composes the bento grid
│       ├── index.css        # all styles + design tokens
│       ├── data/
│       │   └── content.js   # ← EDIT YOUR CONTENT HERE
│       └── components/      # ProfileCard, TechStack, WorkProcess, etc.
└── server/                 # Node + Express backend
    ├── index.js             # /api/health and /api/contact
    └── .env.example
```

## Editing your content

Open **`client/src/data/content.js`** — your name, role, info pills, services, tech stack, stats, work process, highlights, email, and links all live there. Change the values and the site updates. No need to touch the components.

To use a real photo instead of the "PB" monogram: drop an image in `client/public/` (e.g. `avatar.jpg`) and set `avatarImage: "/avatar.jpg"` in `content.js`.

## Run locally

You need **Node.js 18+** installed.

**Option A — run both at once (from the project root):**

```bash
npm run install:all     # installs root + client + server deps
npm run dev             # starts client (5173) and server (5000) together
```

Then open http://localhost:5173

**Option B — two terminals:**

```bash
# terminal 1
cd server && npm install && npm run dev

# terminal 2
cd client && npm install && npm run dev
```

The Vite dev server proxies `/api` to the Express server, so the contact form works in development.

## Build for production

```bash
npm run build           # builds the React app into client/dist
npm start               # Express serves client/dist + the API on port 5000
```

## Deploy

Two common approaches:

1. **Frontend on Netlify/Vercel, backend on Render/Railway.**
   - Deploy `client/` as a static build (build command `npm run build`, publish dir `dist`).
   - Deploy `server/` to a Node host (Render free tier works). Point the form at it, or keep them same-origin.
2. **All-in-one on a Node host** (Render/Railway/Fly): build the client, then run the Express server, which serves both the static files and the API.

## Contact API

- `GET /api/health` → `{ status: "ok" }`
- `POST /api/contact` with `{ name, email, message }` → logs the message and returns success.
  Wire up email (nodemailer) or a database inside `server/index.js` where the `TODO` is.

---

© 2026 Paul Jason P. Borlagdan · Davao City, Philippines
