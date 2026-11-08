import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className="grid h-8 w-8 place-items-center rounded-full text-muted transition hover:bg-fg/5 hover:text-fg"
    >
      <span className="relative h-4 w-4">
        <Sun className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${dark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
        <Moon className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${dark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
      </span>
    </button>
  );
}
