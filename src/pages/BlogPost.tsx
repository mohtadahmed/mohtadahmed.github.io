import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Check, Clock, Link2 } from 'lucide-react';
import { formatDate, getPost, posts } from '@/lib/blog';
import { profile } from '@/data/profile';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  const [copied, setCopied] = useState(false);
  useDocumentTitle(post?.title ?? 'Not found');

  if (!post) return <NotFound />;

  const idx = posts.findIndex((p) => p.slug === slug);
  const newer = posts[idx - 1];
  const older = posts[idx + 1];

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <article className="pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link to="/blog" className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-volt">
          <ArrowLeft className="h-3.5 w-3.5" /> cd ../blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs">
          <Link to={`/blog?category=${encodeURIComponent(post.category)}`} className="rounded border border-volt/30 bg-volt/10 px-1.5 py-0.5 text-volt">
            {post.category}
          </Link>
          <span className="text-slate-500">{formatDate(post.date)}</span>
          <span className="text-slate-700">·</span>
          <span className="flex items-center gap-1 text-slate-500">
            <Clock className="h-3 w-3" /> {post.readingMinutes} min read
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">{post.title}</h1>
        <div className="mt-6 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <div className="flex items-center gap-3">
            <img src={profile.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-white">{profile.name}</p>
              <p className="text-xs text-slate-500">{profile.roles[0]}</p>
            </div>
          </div>
          <button onClick={share} className="btn-ghost !px-3 !py-1.5 font-mono text-xs">
            {copied ? <Check className="h-3.5 w-3.5 text-amp" /> : <Link2 className="h-3.5 w-3.5" />} {copied ? 'copied' : 'share'}
          </button>
        </div>
      </div>

      {post.cover && (
        <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6">
          <img src={post.cover} alt="" className="w-full rounded-2xl border border-white/[0.06]" />
        </div>
      )}

      <div
        className="prose prose-invert prose-slate mx-auto mt-10 max-w-3xl px-4 sm:px-6
          prose-headings:font-bold prose-headings:tracking-tight prose-a:text-volt prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-volt prose-blockquote:bg-white/[0.02] prose-blockquote:py-1 prose-blockquote:not-italic
          prose-code:rounded prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:border prose-pre:border-white/[0.06] prose-pre:bg-ink-900 prose-img:rounded-xl
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none
          prose-th:text-slate-200 prose-td:text-slate-400"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="chip hover:text-white">
                #{t}
              </Link>
            ))}
          </div>
        )}
        <nav className="mt-10 grid gap-4 border-t border-white/[0.06] pt-8 sm:grid-cols-2" aria-label="More posts">
          {older ? (
            <Link to={`/blog/${older.slug}`} className="card card-hover p-5">
              <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                <ArrowLeft className="h-3 w-3" /> older
              </span>
              <span className="mt-1 block font-medium text-white">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link to={`/blog/${newer.slug}`} className="card card-hover p-5 text-right">
              <span className="flex items-center justify-end gap-1 font-mono text-[11px] text-slate-500">
                newer <ArrowRight className="h-3 w-3" />
              </span>
              <span className="mt-1 block font-medium text-white">{newer.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
