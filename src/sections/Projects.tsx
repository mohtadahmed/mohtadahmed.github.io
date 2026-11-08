import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';
import { projects, type Project } from '@/data/profile';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

function Links({ p }: { p: Project }) {
  const items = [
    ['Live', p.links.live],
    ['Code', p.links.github],
    ['Case study', p.links.caseStudy],
    ['Paper', p.links.paper],
  ].filter(([, href]) => href) as [string, string][];
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {items.map(([label, href]) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-0.5 text-muted">
          {label} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const cats = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [cat, setCat] = useState('All');
  const list = projects.filter((p) => cat === 'All' || p.category === cat);
  const featured = list.filter((p) => p.featured);
  const others = list.filter((p) => !p.featured);

  return (
    <Section id="projects" index="03" title="Projects">
      <Reveal className="mb-6 -ml-3 flex flex-wrap gap-1" >
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={clsx('tab', cat === c && 'tab-active')} aria-pressed={cat === c}>
            {c}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 60}>
            <article className="card card-hover flex h-full flex-col p-5">
              {p.image && <img src={p.image} alt="" loading="lazy" className="-mx-5 -mt-5 mb-5 aspect-[16/9] w-[calc(100%+2.5rem)] max-w-none rounded-t-xl border-b border-line object-cover" />}
              <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-subtle">
                <span className="text-accent">{p.category}</span>
                {p.period && <span>{p.period}</span>}
              </div>
              <h3 className="mt-2 font-medium leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              {p.highlights.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-subtle">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto space-y-3 pt-4">
                <p className="font-mono text-xs text-subtle">{p.tech.join(' · ')}</p>
                <Links p={p} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <Reveal>
            <p className="label mb-2 mt-12">Smaller projects & experiments</p>
          </Reveal>
          <div className="divide-y divide-line">
            {others.map((p) => (
              <Reveal key={p.title}>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-sm text-muted">{p.summary}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="font-mono text-xs text-subtle">{p.tech.slice(0, 3).join(' · ')}</span>
                    <Links p={p} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
