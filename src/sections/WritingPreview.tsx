import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/lib/blog';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import PostCard from '@/components/PostCard';

export default function WritingPreview() {
  if (!posts.length) return null;
  return (
    <Section id="writing">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading index="09" label="writing" title="Latest from the blog">
          Articles, tutorials and thoughts on engineering, teaching and building.
        </SectionHeading>
        <Reveal className="mb-12 md:mb-16">
          <Link to="/blog" className="btn-ghost">
            All posts <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
