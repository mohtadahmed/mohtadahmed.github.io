import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404');
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pt-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative text-center">
        <p className="font-mono text-sm text-red-400">ERR_OPEN_CIRCUIT</p>
        <h1 className="mt-2 text-7xl font-extrabold text-white sm:text-8xl">
          4<span className="text-volt">0</span>4
        </h1>
        <p className="mt-4 text-slate-400">The trace you followed doesn't connect to anything.</p>
        <Link to="/" className="btn-primary mt-8">
          Return to home
        </Link>
      </div>
    </div>
  );
}
