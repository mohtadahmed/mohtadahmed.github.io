import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/lib/blog';
import { gallery } from '@/data/gallery';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import PostRow from '@/components/PostRow';

const more = (to: string, label: string) => (
  <Link to={to} className="group inline-flex items-center gap-1 text-sm text-muted transition hover:text-fg">
    {label} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
  </Link>
);

export function Writing() {
  if (!posts.length) return null;
  return (
    <Section id="writing" index="10" title="Writing" action={more('/blog', 'All posts')}>
      <div className="divide-y divide-line">
        {posts.slice(0, 3).map((p, i) => (
          <PostRow key={p.slug} post={p} delay={i * 50} />
        ))}
      </div>
    </Section>
  );
}

export function GalleryStrip() {
  const pics = gallery.slice(0, 4);
  if (!pics.length) return null;
  return (
    <Section id="gallery-preview" index="11" title="Through the lens" action={more('/gallery', 'Gallery')}>
      <Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pics.map((g, i) => (
            <Link key={g.src + i} to="/gallery" className="group relative aspect-square overflow-hidden rounded-lg bg-line">
              <img src={g.src} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
