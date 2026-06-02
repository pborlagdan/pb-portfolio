import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

// --- API routes ---

// quick health check: GET http://localhost:5000/api/health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// contact form: POST http://localhost:5000/api/contact
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }
  // very light email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  // For now we just log the message to the server console.
  // LATER: send yourself an email (nodemailer) or save to a database here.
  console.log("📨 New contact message:");
  console.log({ name, email, message, at: new Date().toISOString() });

  res.json({ success: true, message: "Thanks! Your message was received — I'll reply soon." });
});

// --- Serve the built React app in production ---
// After `npm run build` in /client, this serves client/dist.
const clientDist = path.join(__dirname, "../client/dist");
app.use(express.static(clientDist));
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
