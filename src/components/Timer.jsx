import { useState, useEffect, useRef } from "react";

const TOTAL = 120;

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function Timer({ onRunningChange }) {
  const [remaining, setRemaining] = useState(TOTAL);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const updateRunning = (val) => {
    setRunning(val);
    onRunningChange?.(val);
  };

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) { clearInterval(intervalRef.current); updateRunning(false); return 0; }
          return r - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const startPause = () => { if (remaining > 0) updateRunning((r) => !r); };
  const reset = () => { clearInterval(intervalRef.current); updateRunning(false); setRemaining(TOTAL); };

  const pct = remaining / TOTAL;
  const barColor = pct > 0.5 ? "#000" : pct > 0.25 ? "#BA7517" : "#A32D2D";
  const done = remaining === 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", padding: "3rem 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, width: 260 }}>
        <span style={{ fontSize: 52, fontWeight: 500, letterSpacing: 2, fontVariantNumeric: "tabular-nums", color: done ? "green" : "inherit" }}>
          {fmt(remaining)}
        </span>
        <div style={{ width: "100%", height: 3, background: "#e5e7eb", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct * 100}%`, background: barColor, borderRadius: 2, transition: "width 0.4s linear, background 0.3s" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={startPause} disabled={done}>{running ? "Pause" : remaining < TOTAL ? "Resume" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}