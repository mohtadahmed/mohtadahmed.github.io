/**
 * Animated PCB-style traces with "current" pulses flowing along them.
 * Pure SVG + CSS, no canvas — cheap and respects reduced motion.
 */
const traces = [
  'M0 120 H180 L220 160 H420 L460 120 H640',
  'M0 260 H120 L160 220 H360 L400 260 H520 L560 300 H760',
  'M1440 140 H1260 L1220 180 H1040 L1000 140 H860',
  'M1440 320 H1300 L1260 280 H1080 L1040 320 H900 L860 360 H720',
  'M0 520 H220 L260 480 H480 L520 520 H600',
  'M1440 560 H1200 L1160 600 H960 L920 560 H820',
  'M300 0 V80 L340 120 V220',
  'M1120 0 V60 L1080 100 V200',
  'M640 800 V700 L680 660 V580',
  'M900 800 V720 L860 680 V620',
];

const pads: [number, number][] = [
  [640, 120], [760, 300], [860, 140], [720, 360], [600, 520], [820, 560], [340, 220], [1080, 200], [680, 580], [860, 620],
];

export default function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="trace" x1="0" x2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset=".5" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="1" stopColor="#a3e635" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#22d3ee" stopOpacity=".25" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="1100" cy="300" r="420" fill="url(#glow)" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {traces.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="#1e293b" strokeWidth="2" />
            <path
              d={d}
              stroke="url(#trace)"
              strokeWidth="2"
              strokeDasharray="40 160"
              className="animate-flow"
              style={{ animationDelay: `${-i * 0.7}s`, animationDuration: `${5 + (i % 4)}s` }}
            />
          </g>
        ))}
      </g>
      {pads.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#05070d" stroke="#334155" strokeWidth="2" />
          <circle
            cx={x}
            cy={y}
            r="2.5"
            fill="#22d3ee"
            className="animate-pulseDot"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
