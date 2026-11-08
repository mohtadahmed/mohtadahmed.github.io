import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: { 950: '#05070d', 900: '#0a0f1a', 850: '#0e1522', 800: '#131b2b', 700: '#1e293b' },
        volt: { DEFAULT: '#22d3ee', 400: '#22d3ee', 500: '#06b6d4' },
        amp: { DEFAULT: '#a3e635', 400: '#a3e635' },
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        pulseDot: { '0%,100%': { opacity: '.35' }, '50%': { opacity: '1' } },
        flow: { to: { strokeDashoffset: '-200' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        flow: 'flow 6s linear infinite',
        fadeUp: 'fadeUp .6s ease-out both',
      },
    },
  },
  plugins: [typography],
};
