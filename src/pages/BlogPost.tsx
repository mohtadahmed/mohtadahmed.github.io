import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Check, Link2 } from 'lucide-react';
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
    <article className="container-narrow pb-20 pt-12 sm:pt-16">
      <Link to="/blog" className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" /> Writing
      </Link>

      <header className="mt-10">
        <p className="flex flex-wrap items-center gap-2 font-mono text-xs text-subtle">
          <Link to={`/blog?category=${encodeURIComponent(post.category)}`} className="text-accent hover:underline">
            {post.category}
          </Link>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingMinutes} min read</span>
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
        <div className="mt-6 flex items-center justify-between border-b border-line pb-6">
          <div className="flex items-center gap-3">
            <img src={profile.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
            <div className="text-sm">
              <p className="font-medium">{profile.name}</p>
              <p className="text-subtle">{profile.roles[0]}</p>
            </div>
          </div>
          <button onClick={share} className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted transition hover:text-fg">
            {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Link2 className="h-3.5 w-3.5" />} {copied ? 'Copied' : 'Share'}
          </button>
        </div>
      </header>

      {post.cover && <img src={post.cover} alt="" className="mt-8 w-full rounded-xl border border-line" />}

      <div
        className="prose prose-zinc mt-8 max-w-none dark:prose-invert
          prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-accent prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-muted
          prose-code:rounded prose-code:bg-fg/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-pre:border prose-pre:border-line prose-pre:bg-surface prose-pre:text-fg prose-img:rounded-xl
          [&_blockquote_p]:before:content-none [&_blockquote_p]:after:content-none [&_pre_code]:bg-transparent [&_pre_code]:p-0"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs">
          {post.tags.map((t) => (
            <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="text-subtle transition hover:text-accent">
              #{t}
            </Link>
          ))}
        </div>
      )}

      <nav className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="More posts">
        {older ? (
          <Link to={`/blog/${older.slug}`} className="group">
            <span className="flex items-center gap-1 font-mono text-xs text-subtle">
              <ArrowLeft className="h-3 w-3" /> Older
            </span>
            <span className="mt-1 block font-medium transition-colors group-hover:text-accent">{older.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {newer && (
          <Link to={`/blog/${newer.slug}`} className="group sm:text-right">
            <span className="flex items-center gap-1 font-mono text-xs text-subtle sm:justify-end">
              Newer <ArrowRight className="h-3 w-3" />
            </span>
            <span className="mt-1 block font-medium transition-colors group-hover:text-accent">{newer.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
