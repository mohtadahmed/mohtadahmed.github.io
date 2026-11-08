import { profile } from '@/data/profile';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-wide flex flex-col items-center justify-between gap-4 py-8 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="hidden font-mono text-xs sm:block">
          press <kbd className="rounded border border-line px-1.5 py-0.5">⌘K</kbd> to search
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
