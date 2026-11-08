import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';
import { navItems } from './nav';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="font-mono text-lg font-bold text-white">
            mohtad<span className="text-volt">.</span>ahmed
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate-500">{profile.headline}</p>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-slate-400 transition hover:text-volt">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-mono text-xs text-slate-500">
          <h3 className="uppercase tracking-widest">System status</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulseDot rounded-full bg-amp" /> all systems operational
            </li>
            <li>location: {profile.location.split(',').slice(-2).join(',').trim()}</li>
            <li>stack: react · vite · tailwind</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-6 text-center font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.fullName} · built with ⚡ and too much coffee
      </div>
    </footer>
  );
}
