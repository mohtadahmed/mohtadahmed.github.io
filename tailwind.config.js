import typography from '@tailwindcss/typography';

const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: v('bg'),
        surface: v('surface'),
        fg: v('fg'),
        muted: v('muted'),
        subtle: v('subtle'),
        line: v('line'),
        accent: v('accent'),
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
        draw: { from: { strokeDashoffset: '1' }, to: { strokeDashoffset: '0' } },
        pulseDot: { '0%,100%': { opacity: '.4' }, '50%': { opacity: '1' } },
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
      },
      animation: {
        fadeUp: 'fadeUp .7s cubic-bezier(.2,.7,.2,1) both',
        draw: 'draw 2.2s cubic-bezier(.6,.1,.2,1) both',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [typography],
};
