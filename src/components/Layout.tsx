import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandPalette from './CommandPalette';

/** Scrolls to #hash targets after navigation, or to top on page change. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const tick = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else if (tries++ < 20) requestAnimationFrame(tick);
      };
      tick();
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <ScrollManager />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      {/* key on pathname replays the soft fade on each page change */}
      <main id="main" key={pathname} className="flex-1 animate-fadeUp">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
