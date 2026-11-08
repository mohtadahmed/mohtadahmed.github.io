import { ArrowUpRight, Briefcase, FlaskConical, GraduationCap, Rocket } from 'lucide-react';
import { clsx } from 'clsx';
import { experience, type Experience as Exp } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const kindStyle: Record<Exp['kind'], { icon: typeof Briefcase; cls: string }> = {
  Industry: { icon: Briefcase, cls: 'text-volt border-volt/30 bg-volt/10' },
  Teaching: { icon: GraduationCap, cls: 'text-amp border-amp/30 bg-amp/10' },
  Startup: { icon: Rocket, cls: 'text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-400/10' },
  Research: { icon: FlaskConical, cls: 'text-sky-300 border-sky-400/30 bg-sky-400/10' },
};

export default function Experience() {
  return (
    <Section id="experience" className="bg-ink-900/30">
      <div className="absolute inset-0 bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative">
        <SectionHeading index="02" label="experience" title="Where I've been building">
          Industry, startup, classroom and lab — each shaped how I engineer systems.
        </SectionHeading>

        <ol className="relative space-y-8 border-l border-dashed border-slate-700/70 pl-6 sm:pl-10">
          {experience.map((e, i) => {
            const k = kindStyle[e.kind];
            const Icon = k.icon;
            const current = e.end.toLowerCase() === 'present';
            return (
              <li key={e.role + e.org} className="relative">
                <span
                  className={clsx(
                    'absolute -left-[33px] top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-ink-950 sm:-left-[49px]',
                    current ? 'bg-amp shadow-[0_0_12px_#a3e635]' : 'bg-slate-600',
                  )}
                />
                <Reveal delay={i * 60}>
                  <article className="card card-hover p-6 sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={clsx('inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[11px]', k.cls)}>
                            <Icon className="h-3 w-3" /> {e.kind}
                          </span>
                          {current && <span className="chip !text-amp">● current</span>}
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white">{e.role}</h3>
                        <p className="text-sm text-slate-400">
                          {e.orgUrl ? (
                            <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-volt">
                              {e.org} <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            e.org
                          )}
                          <span className="text-slate-600"> · {e.location}</span>
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-slate-500">
                        {e.start} — {e.end}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-volt" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {e.tech && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {e.tech.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
