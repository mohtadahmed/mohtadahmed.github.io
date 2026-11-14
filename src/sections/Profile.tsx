import { ArrowUpRight } from 'lucide-react';
import { awards, certifications, education, leadership, research, skills, training, volunteering } from '@/data/profile';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import Row from '@/components/Row';

export function Research() {
  return (
    <Section id="research" index="05" title="Research interests">
      <Reveal>
        <p className="font-medium">{research.title}</p>
        <p className="mt-2 leading-relaxed text-muted">{research.statement}</p>
      </Reveal>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {research.areas.map((a, i) => (
          <Reveal key={a.title} delay={i * 50}>
            <div className="border-l border-line pl-4 transition-colors hover:border-accent">
              <h3 className="text-sm font-medium">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="label mb-3 mt-10">Broader interests</p>
        <div className="flex flex-wrap gap-2">
          {research.broader.map((b) => (
            <span key={b} className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-fg">
              {b}
            </span>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <p className="label mb-2 mt-10">Publications</p>
        {research.publications.length === 0 ? (
          <p className="text-sm text-subtle">None yet — published work will be listed here.</p>
        ) : (
          <ul className="divide-y divide-line">
            {research.publications.map((p) => (
              <li key={p.title} className="py-3 text-sm">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-0.5 font-medium">
                    {p.title} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="font-medium">{p.title}</span>
                )}
                <p className="text-muted">{p.authors}</p>
                <p className="font-mono text-xs text-subtle">
                  {p.venue} · {p.year}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" index="06" title="Skills">
      <div className="divide-y divide-line">
        {skills.map((g, i) => (
          <Row key={g.title} delay={i * 30} meta={g.title}>
            <p className="flex flex-wrap gap-y-1 text-sm leading-relaxed text-muted">
              {g.items.map((s, j) => (
                <span key={s} className="whitespace-nowrap">
                  <span className="transition-colors hover:text-fg">{s}</span>
                  {j < g.items.length - 1 && <span className="mx-2 text-subtle/50">/</span>}
                </span>
              ))}
            </p>
          </Row>
        ))}
      </div>
    </Section>
  );
}

export function Awards() {
  return (
    <Section id="awards" index="07" title="Awards">
      <div className="divide-y divide-line">
        {awards.map((a, i) => (
          <Row key={a.title} delay={i * 40} meta={a.date || '—'}>
            <h3 className="font-medium">{a.title}</h3>
            <p className="text-sm text-muted">{a.org}</p>
            {a.detail && <p className="mt-1 text-sm text-subtle">{a.detail}</p>}
          </Row>
        ))}
      </div>
    </Section>
  );
}

function MiniList({ title, items }: { title: string; items: { a: string; b: string; c?: string }[] }) {
  return (
    <Reveal>
      <p className="label mb-3">{title}</p>
      {items.length === 0 ? (
        <p className="text-sm text-subtle">Coming soon.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((x) => (
            <li key={x.a + x.b} className="text-sm">
              <p>{x.a}</p>
              <p className="text-muted">{x.b}</p>
              {x.c && <p className="font-mono text-xs text-subtle">{x.c}</p>}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}

export function Leadership() {
  return (
    <Section id="leadership" index="08" title="Leadership & Activities">
      <div className="divide-y divide-line">
        {leadership.map((l, i) => (
          <Row key={l.role + l.org} delay={i * 40} meta={`${l.start} — ${l.end}`}>
            <div className="group flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white">
                {l.logo ? (
                  <img src={l.logo} alt="" loading="lazy" className="h-full w-full object-contain p-0.5 grayscale transition duration-300 group-hover:grayscale-0" />
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500">{l.org.slice(0, 2)}</span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{l.role}</h3>
                <p className="text-sm text-muted">{l.org}</p>
              </div>
            </div>
          </Row>
        ))}
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        <MiniList title="Volunteering" items={volunteering.map((v) => ({ a: v.role, b: v.org, c: v.date }))} />
        <MiniList title="Industrial training" items={training.map((t) => ({ a: t.title, b: t.org, c: t.date }))} />
        <MiniList title="Certifications" items={certifications.map((c) => ({ a: c.title, b: c.issuer, c: c.date }))} />
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" index="09" title="Education">
      <div className="divide-y divide-line">
        {education.map((e, i) => (
          <Row key={e.degree} delay={i * 40} meta={e.years}>
            <h3 className="font-medium">{e.degree}</h3>
            <p className="text-sm text-muted">
              {e.institution} <span className="text-subtle">·</span> <span className="font-mono text-xs">{e.result}</span>
            </p>
            {e.note && <p className="mt-1 text-sm text-subtle">{e.note}</p>}
          </Row>
        ))}
      </div>
    </Section>
  );
}
