import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-volt">
        <span className="text-slate-500">{index}</span>
        <span>// {label}</span>
        <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-volt/60 to-transparent" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-2xl text-slate-400">{children}</p>}
    </Reveal>
  );
}
