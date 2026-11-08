import { Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { profile } from '@/data/profile';
import { activeSocials } from './socials';

export default function SocialLinks({ className, withEmail = true }: { className?: string; withEmail?: boolean }) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      {activeSocials.map(({ key, label, icon: I, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-volt/40 hover:text-volt"
        >
          <I className="h-4 w-4" />
        </a>
      ))}
      {withEmail && (
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          title="Email"
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-volt/40 hover:text-volt"
        >
          <Mail className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
