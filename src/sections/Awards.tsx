import { Award, Coins, GraduationCap, Medal, Trophy } from 'lucide-react';
import { awards, type AwardItem } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const kindIcon: Record<AwardItem['kind'], typeof Award> = {
  grant: Coins,
  award: Trophy,
  scholarship: GraduationCap,
  rank: Medal,
};

export default function Awards() {
  return (
    <Section id="awards" className="bg-ink-900/30">
      <SectionHeading index="06" label="awards" title="Awards & recognition" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((a, i) => {
          const Icon = kindIcon[a.kind];
          return (
            <Reveal key={a.title} delay={(i % 3) * 70}>
              <article className="card card-hover group h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-amp/30 bg-amp/10 text-amp transition group-hover:shadow-[0_0_18px_-4px_#a3e635]">
                    <Icon className="h-5 w-5" />
                  </span>
                  {a.date && <span className="font-mono text-xs text-slate-500">{a.date}</span>}
                </div>
                <h3 className="mt-4 font-semibold text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{a.org}</p>
                {a.detail && <p className="mt-3 text-sm text-slate-500">{a.detail}</p>}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
