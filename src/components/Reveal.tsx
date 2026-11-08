import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { useInView } from '@/lib/useInView';

export default function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx(
        'transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)]',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
