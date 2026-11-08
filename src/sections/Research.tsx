import { Brain, Cpu, FileText, Radio, ShieldCheck } from 'lucide-react';
import { research } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const icons = [Radio, Brain, Cpu, ShieldCheck];

export default function Research() {
  return (
    <Section id="research" className="bg-ink-900/30">
      <SectionHeading index="04" label="research" title="Research interests">
        {research.statement}
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {research.areas.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={a.title} delay={i * 70}>
              <div className="card card-hover h-full p-5">
                <Icon className="h-5 w-5 text-volt" />
                <h3 className="mt-3 font-semibold text-white">{a.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{a.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10">
        <div className="card p-6">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <FileText className="h-4 w-4 text-volt" /> publications
          </div>
          {research.publications.length === 0 ? (
            <p className="mt-3 text-sm text-slate-400">
              Papers in progress — publications will appear here. Meanwhile, see the{' '}
              <a href="#projects" className="link-underline text-slate-200">
                M.Sc. thesis on Alzheimer's detection with CNNs
              </a>
              .
            </p>
          ) : (
            <ol className="mt-4 space-y-4">
              {research.publications.map((p) => (
                <li key={p.title} className="text-sm">
                  <p className="font-medium text-white">
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="link-underline">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </p>
                  <p className="text-slate-400">{p.authors}</p>
                  <p className="font-mono text-xs text-slate-500">
                    {p.venue} · {p.year}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
