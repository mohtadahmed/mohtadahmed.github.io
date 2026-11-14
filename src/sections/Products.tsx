import { ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';
import { products } from '@/data/profile';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function Products() {
  return (
    <Section id="products" index="03" title="Products">
      <div className="space-y-4">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="card p-6">
              {p.image && <img src={p.image} alt="" loading="lazy" className="mb-6 aspect-[16/9] w-full rounded-lg border border-line object-cover" />}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span
                    className={clsx(
                      'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[11px]',
                      p.status === 'Live' ? 'border-accent/30 text-accent' : 'border-amber-500/30 text-amber-600 dark:text-amber-400',
                    )}
                  >
                    <span className={clsx('h-1.5 w-1.5 rounded-full', p.status === 'Live' ? 'animate-pulseDot bg-accent' : 'bg-amber-500')} />
                    {p.status}
                  </span>
                </div>
                <span className="font-mono text-xs text-subtle">
                  {p.role} · {p.since}
                </span>
              </div>

              <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>

              {p.metrics && (
                <div className="mt-5">
                  <dl className="grid grid-cols-3 divide-x divide-line rounded-lg border border-line">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="px-3 py-3 sm:px-4">
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{m.value}</dd>
                        <p className="mt-0.5 text-xs text-subtle">{m.label}</p>
                      </div>
                    ))}
                  </dl>
                  {p.metricsNote && <p className="mt-2 text-xs text-subtle">{p.metricsNote}</p>}
                </div>
              )}

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {p.features && (
                  <div>
                    <p className="label mb-2">{p.metrics ? 'How it works' : 'Features'}</p>
                    <ul className="space-y-1 text-sm text-muted">
                      {p.features.map((f) => (
                        <li key={f} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-subtle">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {p.deployments && (
                  <div>
                    <p className="label mb-2">Deployed at</p>
                    <div className="space-y-3 text-sm">
                      {p.deployments.map((d) => (
                        <div key={d.group}>
                          <p className="text-fg">{d.group}</p>
                          <p className="text-muted">{d.items.join(' · ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {(p.stack || p.url) && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                  {p.stack ? <p className="font-mono text-xs text-subtle">{p.stack.join(' · ')}</p> : <span />}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-0.5 text-sm text-muted">
                      {p.url.replace(/^https?:\/\//, '')} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
