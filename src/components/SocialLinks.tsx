import { Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { profile } from '@/data/profile';
import { activeSocials } from './socials';

const cls = 'grid h-8 w-8 place-items-center rounded-full text-muted transition hover:bg-fg/5 hover:text-fg';

export default function SocialLinks({ className, withEmail = true }: { className?: string; withEmail?: boolean }) {
  return (
    <div className={clsx('-ml-2 flex items-center gap-0.5', className)}>
      {activeSocials.map(({ key, label, icon: I, href }) => (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={cls}>
          <I className="h-4 w-4" />
        </a>
      ))}
      {withEmail && (
        <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className={cls}>
          <Mail className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
