import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { formatDate, type Post } from '@/lib/blog';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      {post.cover && (
        <div className="aspect-[1200/630] overflow-hidden border-b border-white/[0.06]">
          <img src={post.cover} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="rounded border border-volt/30 bg-volt/10 px-1.5 py-0.5 text-volt">{post.category}</span>
          {post.sample && <span className="rounded border border-yellow-400/30 bg-yellow-400/10 px-1.5 py-0.5 text-yellow-300">sample</span>}
          <span className="text-slate-500">{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-3 font-semibold leading-snug text-white transition group-hover:text-volt">{post.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-400">{post.excerpt}</p>
        <p className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
          <Clock className="h-3 w-3" /> {post.readingMinutes} min read
        </p>
      </div>
    </Link>
  );
}
