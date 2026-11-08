import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { clsx } from 'clsx';
import { profile } from '@/data/profile';
import { navItems } from './nav';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [spy, setSpy] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const active = isHome ? spy : location.pathname.startsWith('/blog') ? '/blog' : location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setSpy(''); // back at the top: no section active
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the home-page section currently on screen
  useEffect(() => {
    if (!isHome) return;
    const ids = ['about', ...navItems.filter((n) => n.to.startsWith('/#')).map((n) => n.to.slice(2))];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSpy('/#' + e.target.id)),
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
        'sticky top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent',
      )}
    >
      <nav className="container-wide flex h-14 items-center justify-between" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.name}
        </Link>

        <div className="flex items-center gap-1">
          <div className="mr-2 hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={clsx(
                  'relative rounded-full px-3 py-1.5 text-sm transition-colors',
                  active === n.to ? 'text-fg' : 'text-muted hover:text-fg',
                )}
              >
                {n.label}
                <span
                  className={clsx(
                    'absolute inset-x-3 -bottom-px h-px bg-accent transition-transform duration-300',
                    active === n.to ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </Link>
            ))}
          </div>
          <button
            onClick={onOpenPalette}
            aria-label="Search (Ctrl K)"
            title="Search  ⌘K"
            className="grid h-8 w-8 place-items-center rounded-full text-muted transition hover:bg-fg/5 hover:text-fg"
          >
            <Search className="h-4 w-4" />
          </button>
          <ThemeToggle />
          <button
            className="grid h-8 w-8 place-items-center rounded-full text-muted hover:text-fg md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          'grid overflow-hidden transition-all duration-300 md:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0">
          <div className="container-wide flex flex-col pb-4">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={clsx('border-b border-line py-3 text-sm last:border-0', active === n.to ? 'text-fg' : 'text-muted')}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
