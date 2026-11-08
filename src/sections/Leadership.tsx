import { BadgeCheck, HandHeart, Users, Wrench } from 'lucide-react';
import { certifications, leadership, training, volunteering } from '@/data/profile';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading index="07" label="leadership" title="Leadership & activities">
        Clubs, olympiads and communities I've helped build alongside my studies.
      </SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.role + l.org} delay={(i % 3) * 70}>
            <article className="card card-hover flex h-full gap-4 p-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white">
                {l.logo ? (
                  <img src={l.logo} alt="" loading="lazy" className="h-full w-full object-contain p-1" />
                ) : (
                  <Users className="h-6 w-6 text-ink-800" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-white">{l.role}</h3>
                <p className="text-sm text-slate-400">{l.org}</p>
                <p className="mt-1 font-mono text-[11px] text-slate-500">
                  {l.start} — {l.end}
                </p>
                {l.detail && <p className="mt-2 text-sm text-slate-500">{l.detail}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <HandHeart className="h-5 w-5 text-volt" /> Volunteering
            </h3>
            <ul className="mt-4 space-y-4">
              {volunteering.map((v) => (
                <li key={v.org} className="text-sm">
                  <p className="text-slate-200">{v.role}</p>
                  <p className="text-slate-400">{v.org}</p>
                  {v.date && <p className="font-mono text-[11px] text-slate-500">{v.date}</p>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <Wrench className="h-5 w-5 text-amp" /> Industrial training
            </h3>
            <ul className="mt-4 space-y-4">
              {training.map((t) => (
                <li key={t.title} className="text-sm">
                  <p className="text-slate-200">{t.title}</p>
                  <p className="text-slate-400">{t.org}</p>
                  <p className="font-mono text-[11px] text-slate-500">{t.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="card h-full p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <BadgeCheck className="h-5 w-5 text-sky-300" /> Certifications
            </h3>
            {certifications.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">Certificates coming soon.</p>
            ) : (
              <ul className="mt-4 space-y-4">
                {certifications.map((c) => (
                  <li key={c.title} className="text-sm">
                    <p className="text-slate-200">
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="link-underline">
                          {c.title}
                        </a>
                      ) : (
                        c.title
                      )}
                    </p>
                    <p className="text-slate-400">{c.issuer}</p>
                    <p className="font-mono text-[11px] text-slate-500">{c.date}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
