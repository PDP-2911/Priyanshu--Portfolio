export function ExpenseMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#131418" />
      <g stroke="#2a2c32" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={0} y1={i * 38} x2={400} y2={i * 38} opacity={0.4} />
        ))}
      </g>
      <text x="28" y="44" fill="#a7a49c" fontSize="11" fontFamily="var(--font-data)" letterSpacing="1">
        BALANCE
      </text>
      <text x="28" y="78" fill="#f1efea" fontSize="30" fontFamily="var(--font-display)" fontWeight="600">
        $4,285.12
      </text>
      <text x="28" y="98" fill="#4fd1c5" fontSize="11" fontFamily="var(--font-data)">
        +12.4% this month
      </text>

      {/* Bars */}
      {[
        { x: 40, h: 60, c: "#e8a33d" },
        { x: 90, h: 95, c: "#3a3c42" },
        { x: 140, h: 40, c: "#3a3c42" },
        { x: 190, h: 120, c: "#e8a33d" },
        { x: 240, h: 70, c: "#3a3c42" },
        { x: 290, h: 110, c: "#3a3c42" },
        { x: 340, h: 55, c: "#e8a33d" },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={260 - b.h}
          width="24"
          height={b.h}
          rx="4"
          fill={b.c}
          opacity={0.9}
        />
      ))}
      <line x1="0" y1="262" x2="400" y2="262" stroke="#2a2c32" strokeWidth="1" />
    </svg>
  );
}

export function ScheduleMockup() {
  const rows = [
    { label: "Draft methodology", w: 0.7, done: true },
    { label: "Client review call", w: 0.4, done: true },
    { label: "Data cleanup", w: 0.85, done: false },
    { label: "Export weekly report", w: 0.55, done: false },
    { label: "Prep Q3 deck", w: 0.3, done: false },
  ];
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#131418" />
      <text x="28" y="36" fill="#a7a49c" fontSize="11" fontFamily="var(--font-data)" letterSpacing="1">
        THIS WEEK
      </text>
      {rows.map((r, i) => {
        const y = 60 + i * 44;
        return (
          <g key={i}>
            <rect
              x="24"
              y={y}
              width="352"
              height="30"
              rx="8"
              fill="#0b0c0e"
              stroke="#2a2c32"
            />
            <circle
              cx="42"
              cy={y + 15}
              r="6"
              fill={r.done ? "#4fd1c5" : "none"}
              stroke={r.done ? "#4fd1c5" : "#6b6862"}
              strokeWidth="1.5"
            />
            <text
              x="58"
              y={y + 19}
              fill={r.done ? "#6b6862" : "#f1efea"}
              fontSize="12"
              fontFamily="var(--font-body)"
              textDecoration={r.done ? "line-through" : "none"}
            >
              {r.label}
            </text>
            <rect
              x="270"
              y={y + 11}
              width="90"
              height="8"
              rx="4"
              fill="#1e2025"
            />
            <rect
              x="270"
              y={y + 11}
              width={90 * r.w}
              height="8"
              rx="4"
              fill={r.done ? "#4fd1c5" : "#e8a33d"}
            />
          </g>
        );
      })}
    </svg>
  );
}
