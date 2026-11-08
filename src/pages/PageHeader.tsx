import type { ReactNode } from 'react';

export default function PageHeader({ path, title, children }: { path: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="pb-8 pt-14 sm:pt-20">
      <p className="font-mono text-xs text-subtle">
        <span className="text-accent">~</span>
        {path}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {children && <div className="mt-4 max-w-2xl leading-relaxed text-muted">{children}</div>}
    </header>
  );
}
