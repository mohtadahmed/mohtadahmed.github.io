/**
 * GALLERY — photography, events, travel and moments.
 *
 * To add a photo:
 *   1. Put the image in /public/images/gallery/  (JPG/WebP, ~1600px wide is plenty)
 *   2. Add an entry below. Newest first.
 * Categories drive the filter buttons on the Gallery page — add new ones freely.
 */

export type GalleryCategory = 'Photography' | 'Travel' | 'Events' | 'Clubs & Campus' | 'Moments';

export type GalleryItem = {
  src: string;
  title: string;
  category: GalleryCategory;
  caption?: string;
  location?: string;
  date?: string;
  camera?: string; // e.g. 'Canon EOS 200D · 50mm f/1.8'
};

export const gallery: GalleryItem[] = [
  // ── Your photographs (placeholders — replace src/title) ──
  { src: '/images/placeholders/photo-1.svg', title: 'Golden hour', category: 'Photography', location: 'Chittagong', camera: '' },
  { src: '/images/placeholders/photo-2.svg', title: 'Street portrait', category: 'Photography' },
  { src: '/images/placeholders/photo-3.svg', title: 'City lights', category: 'Photography' },
  { src: '/images/placeholders/photo-4.svg', title: 'Macro study', category: 'Photography' },
  { src: '/images/placeholders/photo-5.svg', title: 'Monsoon', category: 'Photography' },
  { src: '/images/placeholders/photo-6.svg', title: 'Hill tracts', category: 'Travel' },
  { src: '/images/placeholders/photo-7.svg', title: 'Sea beach sunset', category: 'Travel' },

  // ── Events & clubs (placeholders) ──
  { src: '/images/placeholders/event-1.svg', title: 'IEEE Day 2019 — Poster Presentation', category: 'Events', date: 'Oct 2019' },
  { src: '/images/placeholders/event-2.svg', title: 'EEE Fest 2023 — Project Showcasing (Champion)', category: 'Events', date: '2023' },
  { src: '/images/placeholders/event-3.svg', title: 'IEEE SB CU — Executive Committee', category: 'Clubs & Campus' },
  { src: '/images/placeholders/event-4.svg', title: 'CURI — Robotics Workshop', category: 'Clubs & Campus' },

  // ── Real photos of you ──
  { src: '/images/gallery/me-5.jpg', title: 'On the river ghat', category: 'Travel' },
  { src: '/images/gallery/me-7.jpg', title: 'Up in the hills', category: 'Travel' },
  { src: '/images/gallery/me-1.jpg', title: 'Trail day', category: 'Travel' },
  { src: '/images/gallery/me-2.jpg', title: 'Along the railway', category: 'Moments' },
  { src: '/images/gallery/me-4.jpg', title: 'Portrait', category: 'Moments' },
  { src: '/images/gallery/me-3.jpg', title: 'Candid', category: 'Moments' },
  { src: '/images/gallery/me-6.jpg', title: 'Night out', category: 'Moments' },
];
