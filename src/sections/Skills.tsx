import { Code2, Wrench, Zap } from 'lucide-react';
import { skills, type SkillGroup } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const domains: { key: SkillGroup['domain']; title: string; sub: string; icon: typeof Code2; color: string }[] = [
  { key: 'software', title: 'Software Stack', sub: 'bits', icon: Code2, color: 'text-volt' },
  { key: 'hardware', title: 'Hardware & EEE', sub: 'volts', icon: Zap, color: 'text-amp' },
  { key: 'tools', title: 'AI, Design & Delivery', sub: 'tools', icon: Wrench, color: 'text-sky-300' },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="05" label="skills" title={<>Bits <span className="text-slate-600">&</span> <span className="text-gradient">volts</span></>}>
        A software engineer's toolbox with an electrical engineer's instincts.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-3">
        {domains.map((d, di) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.key} delay={di * 90}>
              <div className="card hud h-full p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-semibold text-white">
                    <Icon className={`h-5 w-5 ${d.color}`} /> {d.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">/{d.sub}</span>
                </div>
                <div className="mt-5 space-y-5">
                  {skills
                    .filter((s) => s.domain === d.key)
                    .map((g) => (
                      <div key={g.title}>
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-500">{g.title}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {g.items.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[13px] text-slate-300 transition hover:border-volt/40 hover:text-white"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
