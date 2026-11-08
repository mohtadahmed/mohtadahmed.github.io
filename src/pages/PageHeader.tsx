import type { ReactNode } from 'react';

export default function PageHeader({ path, title, children }: { path: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] pb-14 pt-32">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-volt/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-slate-500">
          <span className="text-volt">~/mohtad</span>
          {path} <span className="text-slate-600">$ ls</span>
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-slate-400">{children}</div>}
      </div>
    </div>
  );
}
