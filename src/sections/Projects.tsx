import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, FileText } from 'lucide-react';
import { clsx } from 'clsx';
import { projects, type Project } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { GithubIcon } from '@/components/BrandIcons';

function ProjectLinks({ p }: { p: Project }) {
  const items = [
    p.links.live && { href: p.links.live, label: 'Live', icon: ArrowUpRight },
    p.links.github && { href: p.links.github, label: 'Code', icon: GithubIcon },
    p.links.caseStudy && { href: p.links.caseStudy, label: 'Case study', icon: BookOpen },
    p.links.paper && { href: p.links.paper, label: 'Paper', icon: FileText },
  ].filter(Boolean) as { href: string; label: string; icon: React.ComponentType<{ className?: string }> }[];
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ href, label, icon: I }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('/') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition hover:border-volt/40 hover:text-volt"
        >
          <I className="h-3.5 w-3.5" /> {label}
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
    <Section id="projects">
      <SectionHeading index="03" label="projects" title={<>Things I've <span className="text-gradient">shipped</span></>}>
        From factory-floor SCADA to AI on MRI scans — a selection of products, research and experiments.
      </SectionHeading>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={clsx(
              'rounded-full border px-3.5 py-1.5 font-mono text-xs transition',
              cat === c ? 'border-volt/50 bg-volt/10 text-volt' : 'border-white/10 text-slate-400 hover:text-white',
            )}
          >
            {c}
            <span className="ml-1.5 text-slate-600">{c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80}>
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06]">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-ink-950/80 px-2 py-0.5 font-mono text-[11px] text-volt backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  {p.period && <span className="shrink-0 font-mono text-[11px] text-slate-500">{p.period}</span>}
                </div>
                <p className="mt-2 text-sm text-slate-400">{p.summary}</p>
                {p.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="font-mono text-volt">›</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <ProjectLinks p={p} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="mb-4 mt-14 font-mono text-sm text-slate-500">// more projects & experiments</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Reveal key={p.title}>
                <article className="card card-hover flex h-full flex-col p-5">
                  <span className="font-mono text-[11px] text-volt">{p.category}</span>
                  <h4 className="mt-2 font-semibold text-white">{p.title}</h4>
                  <p className="mt-2 flex-1 text-sm text-slate-400">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <ProjectLinks p={p} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
