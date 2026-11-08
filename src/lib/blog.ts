/**
 * Blog posts are Markdown files in src/content/blog/.
 * File name (without .md) becomes the URL: /blog/<file-name>
 *
 * Front-matter fields:
 *   title, date (YYYY-MM-DD), category (Article | Blog | Thought | Tutorial | ...),
 *   tags: [a, b], cover (image path), excerpt, draft: true (hide), sample: true (shows "sample" badge)
 */

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  cover?: string;
  excerpt: string;
  draft: boolean;
  sample: boolean;
  body: string;
  readingMinutes: number;
};

const files = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseValue(raw: string): string | string[] | boolean {
  const v = raw.trim();
  if (v.startsWith('[') && v.endsWith(']')) {
    return v
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  if (v === 'true') return true;
  if (v === 'false') return false;
  return v.replace(/^["']|["']$/g, '');
}

function parse(path: string, source: string): Post {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const meta: Record<string, string | string[] | boolean> = {};
  let body = source;
  const m = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (m) {
    body = source.slice(m[0].length);
    for (const line of m[1].split(/\r?\n/)) {
      const i = line.indexOf(':');
      if (i > 0) meta[line.slice(0, i).trim()] = parseValue(line.slice(i + 1));
    }
  }
  const words = body.split(/\s+/).filter(Boolean).length;
  const firstPara = body.split(/\n\s*\n/).find((p) => p.trim() && !p.trim().startsWith('#') && !p.trim().startsWith('>')) ?? '';
  return {
    slug,
    title: String(meta.title ?? slug),
    date: String(meta.date ?? ''),
    category: String(meta.category ?? 'Blog'),
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    cover: meta.cover ? String(meta.cover) : undefined,
    excerpt: String(meta.excerpt ?? firstPara.replace(/[#*_`>]/g, '').slice(0, 180)),
    draft: meta.draft === true,
    sample: meta.sample === true,
    body,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

export const posts: Post[] = Object.entries(files)
  .map(([p, s]) => parse(p, s))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export const categories = Array.from(new Set(posts.map((p) => p.category)));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(d: string) {
  const dt = new Date(d + 'T00:00:00');
  if (Number.isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
