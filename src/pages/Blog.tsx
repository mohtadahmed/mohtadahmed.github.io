import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { clsx } from 'clsx';
import { categories, posts } from '@/lib/blog';
import PostRow from '@/components/PostRow';
import PageHeader from './PageHeader';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function Blog() {
  useDocumentTitle('Writing');
  const [params, setParams] = useSearchParams();
  const cat = params.get('category') ?? 'All';
  const tag = params.get('tag') ?? '';
  const q = params.get('q') ?? '';

  const update = (k: string, v: string) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v);
    else next.delete(k);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return posts.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (!tag || p.tags.includes(tag)) &&
        (!t || (p.title + p.excerpt + p.tags.join(' ') + p.body).toLowerCase().includes(t)),
    );
  }, [cat, tag, q]);

  // Group by year for a calm, archive-style list
  const byYear = useMemo(() => {
    const m = new Map<string, typeof filtered>();
    filtered.forEach((p) => {
      const y = p.date.slice(0, 4) || 'Undated';
      m.set(y, [...(m.get(y) ?? []), p]);
    });
    return [...m.entries()];
  }, [filtered]);

  const isFiltered = cat !== 'All' || tag || q;

  return (
    <div className="container-narrow pb-20">
      <PageHeader path="/writing" title="Writing">
        Articles, tutorials, notes and thoughts on software, electronics, IoT, teaching and the things in between.
      </PageHeader>

      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="-ml-3 flex flex-wrap gap-1">
          {['All', ...categories].map((c) => (
            <button key={c} onClick={() => update('category', c === 'All' ? '' : c)} className={clsx('tab', cat === c && 'tab-active')}>
              {c}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-56">
          <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" />
          <input
            value={q}
            onChange={(e) => update('q', e.target.value)}
            placeholder="Search…"
            aria-label="Search posts"
            className="w-full border-b border-transparent bg-transparent py-1.5 pl-6 text-sm placeholder:text-subtle focus:border-line focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </label>
      </div>

      {(isFiltered || tag) && (
        <button onClick={() => setParams({}, { replace: true })} className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-subtle hover:text-fg">
          <X className="h-3 w-3" /> clear{tag && ` #${tag}`} · {filtered.length} result{filtered.length === 1 ? '' : 's'}
        </button>
      )}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-subtle">No posts found.</p>
      ) : (
        byYear.map(([year, list]) => (
          <section key={year} className="mt-10">
            <h2 className="label">{year}</h2>
            <div className="mt-2 divide-y divide-line">
              {list.map((p, i) => (
                <PostRow key={p.slug} post={p} delay={i * 40} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
