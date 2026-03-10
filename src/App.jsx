import { useState } from "react";
import FlowerCodeMap from "./FlowerCodeMap.jsx";
import TheWatcher from "./TheWatcher.jsx";

const pages = [
  { id: "flower", label: "Flower Code", icon: "🌸" },
  { id: "watcher", label: "The Watcher", icon: "◈" },
];

export default function App() {
  const [page, setPage] = useState("flower");

  return (
    <div style={{ minHeight: "100vh", background: "#1a1612" }}>
      {/* Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        padding: "16px 24px 0",
        background: "#1a1612",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {pages.map(p => (
          <button
            key={p.id}
            onClick={() => setPage(p.id)}
            style={{
              padding: "10px 24px",
              background: page === p.id ? "#2a231c" : "transparent",
              border: page === p.id
                ? "1px solid rgba(139, 115, 85, 0.4)"
                : "1px solid transparent",
              borderBottom: page === p.id
                ? "1px solid #1a1612"
                : "1px solid rgba(255,255,255,0.06)",
              borderRadius: "6px 6px 0 0",
              color: page === p.id ? "#e8ddd0" : "#6b5d4f",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', 'Courier New', monospace",
              fontSize: "11px",
              letterSpacing: "1.5px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "14px" }}>{p.icon}</span>
            {p.label}
          </button>
        ))}
      </nav>

      {/* Page content */}
      {page === "flower" && <FlowerCodeMap />}
      {page === "watcher" && <TheWatcher />}
    </div>
  );
}
