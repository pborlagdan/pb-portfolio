import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During `npm run dev`, any request to /api is forwarded to the
// Node/Express server running on port 5000, so the contact form works locally.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
