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

  const startPause = () => { if (remaining > 0) updateRunning(!running); };
  const reset = () => { clearInterval(intervalRef.current); updateRunning(false); setRemaining(TOTAL); };

  const pct = remaining / TOTAL;
  const done = remaining === 0;

  const barColor = pct > 0.5 ? "bg-black" : pct > 0.25 ? "bg-amber-600" : "bg-red-700";

  return (
    <div className="flex flex-col items-center gap-6 sticky top-0"> 
      <div className="flex flex-col items-center gap-2.5 w-64">
        <span className={`text-6xl font-medium tracking-widest tabular-nums ${done ? "text-green-700" : "text-primary"}`}>
          {fmt(remaining)}
        </span>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-400 ease-linear ${barColor}`}
            style={{ width: `${pct * 100}%` }}
          />
        </div>
      </div>
      <div className="flex gap-2.5 mt-2">
        <button onClick={startPause} disabled={done} className="mb-6 cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none hover:bg-stronghold-red text-stronghold-platinum rounded"        >
          {running ? "Pause" : remaining < TOTAL ? "Resume" : "Start"}
        </button>
        <button onClick={reset} className="mb-6 cursor-pointer transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 jersey text-2xl inline-flex bg-stronghold-jet border-0 py-2 px-6 focus:outline-none hover:bg-stronghold-red text-stronghold-platinum rounded">
          Reset
        </button>
      </div>
    </div>
  );
}