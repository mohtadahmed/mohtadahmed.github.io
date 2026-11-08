import type { ReactNode } from 'react';
import Reveal from './Reveal';

/** Two-column list row: small mono meta (dates) on the left, content on the right. */
export default function Row({ meta, children, delay = 0 }: { meta?: ReactNode; children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
        <div className="pt-0.5 font-mono text-xs text-subtle">{meta}</div>
        <div className="min-w-0">{children}</div>
      </div>
    </Reveal>
  );
}
