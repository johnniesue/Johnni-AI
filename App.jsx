import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

// (optional) your utility from utils.js
// import { cn } from "./utils";

function App() {
  return (
    <main className="container">
      <span className="badge">A-1 APSVC</span>
      <h1>Helper Bot is Online ✅</h1>
      <p>
        This page is served by GitHub Pages. Your GitHub Actions bot is labeling issues and
        posting checklists automatically.
      </p>
      <div className="actions">
        <a className="button" href="./">Refresh</a>
        <a className="button secondary" href="https://github.com/YOUR_USER/YOUR_REPO/actions">
          View Actions
        </a>
      </div>

      <h2>Next steps</h2>
      <ul>
        <li>Update this UI to your real FAQ/Bot page.</li>
        <li>(Optional) Add a <code>public/CNAME</code> file for your custom domain.</li>
      </ul>

      <h3>Verify build</h3>
      <pre>npm run build → publishes <strong>dist/</strong> via GitHub Pages</pre>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
