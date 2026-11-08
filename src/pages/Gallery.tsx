import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Aperture, Calendar, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { clsx } from 'clsx';
import { gallery, type GalleryItem } from '@/data/gallery';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import PageHeader from './PageHeader';

function Lightbox({ items, index, onClose, onNav }: { items: GalleryItem[]; index: number; onClose: () => void; onNav: (d: number) => void }) {
  const item = items[index];
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onNav]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onNav(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 font-mono text-xs text-slate-400">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 hover:text-white" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => onNav(-1)}
          className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-900/80 text-slate-300 hover:text-volt sm:grid"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <img key={item.src} src={item.src} alt={item.title} className="max-h-[75vh] max-w-full animate-fadeUp rounded-lg object-contain shadow-2xl" />
        <button
          onClick={() => onNav(1)}
          className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-ink-900/80 text-slate-300 hover:text-volt sm:grid"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="px-4 pb-6 pt-4 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-semibold text-white">{item.title}</p>
        {item.caption && <p className="mt-1 text-sm text-slate-400">{item.caption}</p>}
        <div className="mt-2 flex flex-wrap justify-center gap-4 font-mono text-[11px] text-slate-500">
          <span className="text-volt">{item.category}</span>
          {item.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {item.location}
            </span>
          )}
          {item.date && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {item.date}
            </span>
          )}
          {item.camera && (
            <span className="flex items-center gap-1">
              <Aperture className="h-3 w-3" /> {item.camera}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  useDocumentTitle('Gallery');
  const cats = useMemo(() => ['All', ...Array.from(new Set(gallery.map((g) => g.category)))], []);
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<number | null>(null);
  const items = useMemo(() => gallery.filter((g) => cat === 'All' || g.category === cat), [cat]);

  const nav = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <PageHeader path="/gallery" title={<>Gallery <span className="text-slate-600">&</span> <span className="text-gradient">photography</span></>}>
        Frames I've captured and moments worth keeping — photography, travel, events and campus life.
        <p className="mt-3 font-mono text-xs text-slate-500">
          {gallery.length} photos · {cats.length - 1} collections
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={clsx(
                'rounded-full border px-3.5 py-1.5 font-mono text-xs transition',
                cat === c ? 'border-volt/50 bg-volt/10 text-volt' : 'border-white/10 text-slate-400 hover:text-white',
              )}
            >
              {c}
              <span className="ml-1.5 text-slate-600">{c === 'All' ? gallery.length : gallery.filter((g) => g.category === c).length}</span>
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button
              key={g.src + i}
              onClick={() => setOpen(i)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/[0.06] text-left"
            >
              <img src={g.src} alt={g.title} loading="lazy" className="w-full transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-mono text-[10px] uppercase tracking-wider text-volt">{g.category}</span>
                <span className="font-medium text-white">{g.title}</span>
                {g.location && <span className="text-xs text-slate-400">{g.location}</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && items[open] && <Lightbox items={items} index={open} onClose={close} onNav={nav} />}
    </>
  );
}
