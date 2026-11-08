import type { ReactNode } from 'react';
import Reveal from './Reveal';

/** A home-page section: small mono index + title, then content. */
export default function Section({
  id,
  index,
  title,
  action,
  children,
}: {
  id: string;
  index: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-16">
      <Reveal>
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight">
            <span className="font-mono text-xs font-normal text-accent">{index}</span>
            {title}
          </h2>
          {action}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
