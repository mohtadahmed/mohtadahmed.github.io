import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experience, type Experience as Exp } from '@/data/profile';
import Section from '@/components/Section';
import Row from '@/components/Row';

const VISIBLE = 3;

function Item({ e }: { e: Exp }) {
  const [open, setOpen] = useState(false);
  const shown = open ? e.bullets : e.bullets.slice(0, VISIBLE);
  const hidden = e.bullets.length - VISIBLE;
  return (
    <>
      <h3 className="font-medium">
        {e.role}
        <span className="text-subtle"> · </span>
        {e.orgUrl ? (
          <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-0.5 text-muted">
            {e.org}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="text-muted">{e.org}</span>
        )}
      </h3>
      <p className="mt-0.5 text-xs text-subtle">
        {e.kind} · {e.location}
      </p>
      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
        {shown.map((b) => (
          <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-subtle">
            {b}
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button onClick={() => setOpen((o) => !o)} className="mt-2 font-mono text-xs text-accent hover:underline">
          {open ? '− show less' : `+ ${hidden} more`}
        </button>
      )}
      {e.tech && <p className="mt-3 font-mono text-xs text-subtle">{e.tech.join(' · ')}</p>}
    </>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="divide-y divide-line">
        {experience.map((e, i) => (
          <Row
            key={e.role + e.org}
            delay={i * 50}
            meta={
              <>
                {e.start} — {e.end === 'Present' ? <span className="text-accent">Present</span> : e.end}
              </>
            }
          >
            <Item e={e} />
          </Row>
        ))}
      </div>
    </Section>
  );
}
