import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, MapPin, PenLine } from 'lucide-react';
import { profile, stats } from '@/data/profile';
import CircuitBackground from '@/components/CircuitBackground';
import SocialLinks from '@/components/SocialLinks';

function useTyping(words: string[], speed = 55, pause = 1600) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && text === '') {
      t = setTimeout(() => {
        setDeleting(false);
        setI((n) => n + 1);
      }, 200);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

/** Tiny oscilloscope trace — a nod to the EEE side. */
function Scope() {
  const pts = Array.from({ length: 121 }, (_, k) => {
    const x = k * 2.5;
    const y = 30 - 18 * Math.sin(k / 6) * Math.exp(-((k - 60) ** 2) / 2600) - 4 * Math.sin(k / 1.7) * 0.3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 300 60" className="h-12 w-full" aria-hidden>
      <defs>
        <pattern id="scope-grid" width="25" height="15" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V15" fill="none" stroke="#334155" strokeOpacity=".5" strokeWidth=".5" />
        </pattern>
      </defs>
      <rect width="300" height="60" fill="url(#scope-grid)" />
      <polyline points={pts} fill="none" stroke="#a3e635" strokeWidth="1.6" className="drop-shadow-[0_0_4px_#a3e635]" />
    </svg>
  );
}

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <CircuitBackground />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
        <div className="animate-fadeUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amp/30 bg-amp/10 px-3 py-1 font-mono text-xs text-amp">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-amp" />
            {profile.availability}
          </div>

          <p className="font-mono text-sm text-slate-400">
            <span className="text-volt">~$</span> whoami
          </p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name.split(' ')[0]} <span className="text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="mt-5 min-h-[3.5rem] font-mono sm:min-h-[2rem] text-lg text-slate-300 sm:text-xl" aria-label={profile.roles.join(', ')}>
            <span className="text-volt">&gt;</span> <span aria-hidden>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-2.5 translate-y-0.5 animate-blink bg-volt" aria-hidden />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#projects" className="btn-primary">
              View my work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/blog" className="btn-ghost">
              <PenLine className="h-4 w-4" /> Read the blog
            </Link>
            <Link to="/#contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <SocialLinks />
            <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </div>
        </div>

        {/* Profile "chip" */}
        <div className="relative mx-auto w-full max-w-sm animate-fadeUp [animation-delay:150ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-volt/20 via-transparent to-amp/20 blur-2xl" />
          <div className="card hud relative overflow-hidden p-3">
            {/* IC pins */}
            <div className="pointer-events-none absolute inset-y-10 -left-[3px] flex flex-col justify-between" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-sm bg-slate-600" />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-10 -right-[3px] flex flex-col justify-between" aria-hidden>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-sm bg-slate-600" />
              ))}
            </div>
            <div className="flex items-center justify-between px-1 pb-2 font-mono text-[10px] text-slate-500">
              <span>U1 · MA-2017-EEE</span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-amp/80" />
              </span>
            </div>
            <img
              src={profile.avatar}
              alt={profile.name}
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              fetchPriority="high"
            />
            <div className="mt-3 rounded-lg border border-white/[0.06] bg-ink-950/80 p-2">
              <div className="mb-1 flex justify-between font-mono text-[10px] text-slate-500">
                <span>CH1 · signal</span>
                <span className="text-amp">● live</span>
              </div>
              <Scope />
            </div>
          </div>

          <div className="absolute -left-4 top-16 hidden rounded-lg border border-white/10 bg-ink-900/90 px-3 py-2 font-mono text-[11px] text-slate-300 shadow-xl backdrop-blur sm:block">
            <span className="text-volt">{'{ }'}</span> Django · React
          </div>
          <div className="absolute -right-4 top-1/2 hidden rounded-lg border border-white/10 bg-ink-900/90 px-3 py-2 font-mono text-[11px] text-slate-300 shadow-xl backdrop-blur sm:block">
            <span className="text-amp">⚡</span> B.Sc. + M.Sc. EEE
          </div>
          <div className="absolute -left-2 bottom-24 hidden rounded-lg border border-white/10 bg-ink-900/90 px-3 py-2 font-mono text-[11px] text-slate-300 shadow-xl backdrop-blur sm:block">
            <span className="text-volt">📡</span> MQTT · SCADA
          </div>
        </div>

        {/* Stats */}
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-2">
          {stats.map((s) => (
            <div key={s.label} className="card px-4 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Link
        to="/#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 hover:text-volt md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </Link>
    </section>
  );
}
