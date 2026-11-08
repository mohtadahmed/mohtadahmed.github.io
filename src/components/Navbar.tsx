import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Command, FileDown, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { profile } from '@/data/profile';
import { navItems } from './nav';

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [spy, setSpy] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const active = isHome ? spy : location.pathname.startsWith('/blog') ? '/blog' : location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy for home page sections
  useEffect(() => {
    if (!isHome) return;
    const ids = ['home', ...navItems.filter((n) => n.to.startsWith('/#')).map((n) => n.to.slice(2))];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSpy('/#' + e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-volt/40 bg-volt/10 text-volt transition group-hover:shadow-[0_0_16px_rgba(34,211,238,.5)]">
            MA
          </span>
          <span className="hidden sm:inline">
            mohtad<span className="text-volt">.</span>ahmed
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={clsx(
                'rounded-md px-3 py-2 text-sm transition',
                active === n.to ? 'text-volt' : 'text-slate-400 hover:text-white',
              )}
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-slate-400 transition hover:border-volt/40 hover:text-white sm:flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" /> K
          </button>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" rel="noopener" className="btn-ghost hidden !py-1.5 sm:inline-flex">
              <FileDown className="h-4 w-4" /> CV
            </a>
          )}
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] px-4 pb-6 pt-2 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={clsx(
                  'rounded-lg border border-white/[0.06] px-4 py-3 font-mono text-sm',
                  active === n.to ? 'border-volt/40 text-volt' : 'text-slate-300',
                )}
              >
                <span className="text-slate-600">0{i + 1}.</span> {n.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              setOpen(false);
              onOpenPalette();
            }}
            className="btn-ghost mt-3 w-full font-mono text-xs">
            <Command className="h-3.5 w-3.5" /> Quick search
          </button>
        </div>
      )}
    </header>
  );
}
