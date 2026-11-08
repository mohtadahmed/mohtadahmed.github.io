import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404');
  return (
    <div className="container-narrow flex min-h-[70vh] flex-col items-start justify-center">
      <p className="font-mono text-xs text-accent">404 · open circuit</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page doesn't exist.</h1>
      <p className="mt-3 text-muted">The link may be broken, or the page may have moved.</p>
      <Link to="/" className="mt-8 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90">
        Back home
      </Link>
    </div>
  );
}
