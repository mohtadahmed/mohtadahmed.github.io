import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import { gallery } from '@/data/gallery';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

export default function GalleryPreview() {
  const pics = gallery.slice(0, 5);
  if (!pics.length) return null;
  return (
    <Section id="gallery-preview" className="bg-ink-900/30">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading index="10" label="gallery" title={<>Through my <span className="text-gradient">lens</span></>}>
          Photography, travel, events and moments away from the keyboard.
        </SectionHeading>
        <Reveal className="mb-12 md:mb-16">
          <Link to="/gallery" className="btn-ghost">
            <Camera className="h-4 w-4" /> Open gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <Reveal>
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4">
          {pics.map((g, i) => (
            <Link
              key={g.src + i}
              to="/gallery"
              className={
                'group relative overflow-hidden rounded-xl border border-white/[0.06] ' +
                (i === 0 ? 'col-span-2 row-span-2' : '')
              }
            >
              <img src={g.src} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-2 left-3 font-mono text-[11px] text-white opacity-0 transition group-hover:opacity-100">{g.title}</span>
            </Link>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
