import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Copy, ExternalLink, FileText, Hash, Image, Search } from 'lucide-react';
import { clsx } from 'clsx';
import { posts } from '@/lib/blog';
import { profile } from '@/data/profile';
import { homeSections } from './nav';
import { activeSocials } from './socials';

type Item = { id: string; label: string; group: string; hint?: string; run: () => void; icon: typeof Hash };

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  return open ? <Palette onClose={onClose} /> : null;
}

function Palette({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const go = (to: string) => () => navigate(to);
    return [
      ...homeSections.map((s) => ({ id: 's-' + s.id, label: s.label, group: 'Sections', run: go('/#' + s.id), icon: Hash })),
      { id: 'p-blog', label: 'Writing', group: 'Pages', run: go('/blog'), icon: FileText },
      { id: 'p-gallery', label: 'Gallery & Photography', group: 'Pages', run: go('/gallery'), icon: Image },
      ...posts.map((p) => ({
        id: 'b-' + p.slug,
        label: p.title,
        hint: p.category,
        group: 'Posts',
        run: go('/blog/' + p.slug),
        icon: FileText,
      })),
      ...activeSocials.map((s) => ({
        id: 'l-' + s.key,
        label: s.label,
        group: 'Links',
        run: () => window.open(s.href, '_blank', 'noopener'),
        icon: ExternalLink,
      })),
      {
        id: 'a-email',
        label: 'Copy email address',
        hint: profile.email,
        group: 'Actions',
        run: () => void navigator.clipboard?.writeText(profile.email),
        icon: Copy,
      },
    ];
  }, [navigate]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter((i) => (i.label + ' ' + (i.hint ?? '') + ' ' + i.group).toLowerCase().includes(t));
  }, [q, items]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const run = (i: Item) => {
    onClose();
    i.run();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[sel]) {
      run(filtered[sel]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  let lastGroup = '';
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 px-4 pt-[12vh] backdrop-blur-sm animate-fadeUp [animation-duration:.25s]" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKey}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="h-4 w-4 text-subtle" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setSel(0);
            }}
            placeholder="Jump to a section, post or link…"
            className="h-14 flex-1 bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">esc</kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-subtle">No results for “{q}”</li>}
          {filtered.map((i, idx) => {
            const header = i.group !== lastGroup ? i.group : null;
            lastGroup = i.group;
            const Icon = i.icon;
            return (
              <li key={i.id}>
                {header && <div className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-subtle">{header}</div>}
                <button
                  onMouseEnter={() => setSel(idx)}
                  onClick={() => run(i)}
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm',
                    idx === sel ? 'bg-fg/5 text-fg' : 'text-muted',
                  )}
                >
                  <Icon className={clsx('h-4 w-4 shrink-0', idx === sel ? 'text-accent' : 'text-subtle')} />
                  <span className="flex-1 truncate">{i.label}</span>
                  {i.hint && <span className="font-mono text-[11px] text-subtle">{i.hint}</span>}
                  {idx === sel && <ArrowRight className="h-3.5 w-3.5 text-accent" />}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4 border-t border-line px-4 py-2 font-mono text-[10px] text-subtle">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
