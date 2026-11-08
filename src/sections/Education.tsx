import { GraduationCap } from 'lucide-react';
import { education } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Education() {
  return (
    <Section id="education" className="bg-ink-900/30">
      <SectionHeading index="08" label="education" title="Education" />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={(i % 2) * 80}>
            <article className="card card-hover h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <GraduationCap className="h-6 w-6 shrink-0 text-volt" />
                <span className="font-mono text-xs text-slate-500">{e.start ? `${e.start} — ${e.end}` : e.end}</span>
              </div>
              <h3 className="mt-4 font-semibold text-white">{e.degree}</h3>
              <p className="text-sm text-slate-400">{e.institution}</p>
              <p className="mt-3 inline-block rounded-md border border-amp/30 bg-amp/10 px-2 py-0.5 font-mono text-xs text-amp">{e.result}</p>
              {e.note && <p className="mt-3 text-sm text-slate-500">{e.note}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
