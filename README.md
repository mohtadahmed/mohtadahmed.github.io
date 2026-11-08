# mohtadahmed.me

Personal portfolio of **Mohtad Ahmed**: software engineer, EEE researcher and educator.
Built with React + TypeScript + Vite + Tailwind CSS and deployed to GitHub Pages at [mohtadahmed.me](https://mohtadahmed.me).

## Pages

| Route         | What it is                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `/`           | Home: hero, about, experience, projects, research, skills, awards, leadership, education, contact |
| `/blog`       | Blog list with category filters, tags and search                                                   |
| `/blog/:slug` | A single post, written in Markdown                                                                 |
| `/gallery`    | Photography / events / travel gallery with a lightbox                                              |

Press **Ctrl/⌘ + K** anywhere for quick search.

## How to update content (no coding needed)

| I want to…                                              | Edit                                                    |
| ------------------------------------------------------- | ------------------------------------------------------- |
| Change bio, contact, socials, CV link                   | `src/data/profile.ts` → `profile`, `socials`            |
| Add a job / role                                        | `src/data/profile.ts` → `experience` (newest first)     |
| Add a project                                           | `src/data/profile.ts` → `projects`                      |
| Add an award, leadership role, training, certificate    | `src/data/profile.ts` → `awards`, `leadership`, …       |
| Add a publication                                       | `src/data/profile.ts` → `research.publications`         |
| Add a photo to the gallery                              | put the image in `public/images/gallery/`, then add it to `src/data/gallery.ts` |
| Write a blog post                                       | add a `.md` file to `src/content/blog/` (see below)     |
| Replace the profile photo                               | overwrite `public/images/profile.jpg` (4:5 portrait)    |
| Add your CV for download                                | put the PDF in `public/resume/` and set `profile.resumeUrl` |

* Links left as `''` are hidden automatically. Fill them in and they will appear.
* Placeholder images are in `public/images/placeholders/`. Replace the paths with your own images.

### Writing a blog post

Create `src/content/blog/2026-12-01-my-post.md`. The URL will be `/blog/2026-12-01-my-post`.

```md
---
title: My post title
date: 2026-12-01
category: Article        # Article | Blog | Thought | Tutorial | anything
tags: [iot, django]
cover: /images/blog/my-cover.jpg
excerpt: One or two sentences for the card.
draft: false              # true = hidden
---

Your **Markdown** here. Code blocks, tables, images and quotes all work.
```

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

## Deployment

Every push to `main` builds and deploys automatically through GitHub Actions (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.
