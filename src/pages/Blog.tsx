import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, Search, X } from 'lucide-react';
import { clsx } from 'clsx';
import { categories, formatDate, posts } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import Reveal from '@/components/Reveal';
import PageHeader from './PageHeader';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function Blog() {
  useDocumentTitle('Blog');
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

  const allTags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(), []);
  const isFiltered = cat !== 'All' || tag || q;
  const [lead, ...rest] = filtered;

  return (
    <>
      <PageHeader path="/blog" title={<>Blog <span className="text-slate-600">&</span> <span className="text-gradient">writing</span></>}>
        Articles, tutorials, notes and thoughts — on software, electronics, IoT, teaching and life in between.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((c) => (
              <button
                key={c}
                onClick={() => update('category', c === 'All' ? '' : c)}
                className={clsx(
                  'rounded-full border px-3.5 py-1.5 font-mono text-xs transition',
                  cat === c ? 'border-volt/50 bg-volt/10 text-volt' : 'border-white/10 text-slate-400 hover:text-white',
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              value={q}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Search posts…"
              aria-label="Search posts"
              className="w-full rounded-lg border border-white/10 bg-ink-900 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-600 focus:border-volt/50 focus:outline-none"
            />
          </label>
        </div>

        {allTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => update('tag', tag === t ? '' : t)}
                className={clsx('chip transition', tag === t ? '!border-amp/40 !text-amp' : 'hover:text-white')}
              >
                #{t}
              </button>
            ))}
          </div>
        )}

        {isFiltered && (
          <button onClick={() => setParams({}, { replace: true })} className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-slate-500 hover:text-volt">
            <X className="h-3 w-3" /> clear filters · {filtered.length} result{filtered.length === 1 ? '' : 's'}
          </button>
        )}

        {filtered.length === 0 ? (
          <p className="py-24 text-center font-mono text-sm text-slate-500">No posts found. Try another filter.</p>
        ) : (
          <>
            {lead && !isFiltered ? (
              <Reveal className="mt-10">
                <Link to={`/blog/${lead.slug}`} className="card card-hover group grid overflow-hidden md:grid-cols-2">
                  {lead.cover && (
                    <div className="aspect-[1200/630] overflow-hidden md:aspect-auto">
                      <img src={lead.cover} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    </div>
                  )}
                  <div className="flex flex-col justify-center p-6 sm:p-10">
                    <span className="font-mono text-[11px] text-amp">// latest</span>
                    <div className="mt-3 flex items-center gap-2 font-mono text-[11px]">
                      <span className="rounded border border-volt/30 bg-volt/10 px-1.5 py-0.5 text-volt">{lead.category}</span>
                      {lead.sample && <span className="rounded border border-yellow-400/30 bg-yellow-400/10 px-1.5 py-0.5 text-yellow-300">sample</span>}
                      <span className="text-slate-500">{formatDate(lead.date)}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-white transition group-hover:text-volt sm:text-3xl">{lead.title}</h2>
                    <p className="mt-3 text-slate-400">{lead.excerpt}</p>
                    <p className="mt-5 flex items-center gap-1.5 font-mono text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" /> {lead.readingMinutes} min read
                    </p>
                  </div>
                </Link>
              </Reveal>
            ) : null}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(isFiltered ? filtered : rest).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
