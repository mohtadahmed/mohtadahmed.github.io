import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { formatDate, type Post } from '@/lib/blog';
import Reveal from './Reveal';

export default function PostRow({ post, delay = 0 }: { post: Post; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/blog/${post.slug}`} className="group grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
        <span className="pt-0.5 font-mono text-xs text-subtle">{formatDate(post.date)}</span>
        <span className="min-w-0">
          <span className="flex items-start justify-between gap-4">
            <span className="font-medium transition-colors group-hover:text-accent">{post.title}</span>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-subtle opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </span>
          <span className="mt-1 line-clamp-2 block text-sm text-muted">{post.excerpt}</span>
          <span className="mt-2 flex items-center gap-2 font-mono text-[11px] text-subtle">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            {post.sample && (
              <>
                <span>·</span>
                <span className="text-amber-600 dark:text-amber-400">sample</span>
              </>
            )}
          </span>
        </span>
      </Link>
    </Reveal>
  );
}
