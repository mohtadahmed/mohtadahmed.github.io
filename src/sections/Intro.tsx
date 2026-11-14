import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { experience, profile } from '@/data/profile';
import SocialLinks from '@/components/SocialLinks';

function useTyping(words: string[], speed = 60, pause = 1800) {
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
      }, 250);
    } else {
      t = setTimeout(() => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);
  return text;
}

/** A thin signal trace that draws itself once — the only "circuit" flourish. */
function SignalLine() {
  const d = Array.from({ length: 161 }, (_, k) => {
    const x = k * 5;
    const env = Math.exp(-((k - 80) ** 2) / 900);
    const y = 20 - 14 * env * Math.sin(k / 3.2);
    return `${k ? 'L' : 'M'}${x} ${y.toFixed(2)}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 800 40" preserveAspectRatio="none" className="h-10 w-full text-accent" aria-hidden>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.25" pathLength={1} strokeDasharray="1" className="animate-draw [animation-delay:.4s]" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Intro() {
  const typed = useTyping(profile.roles);
  const current = experience.filter((e) => e.end.toLowerCase() === 'present');

  return (
    <section className="pb-6 pt-14 sm:pt-20">
      <div className="flex items-center gap-4 animate-fadeUp">
        <img
          src={profile.avatar}
          alt={profile.name}
          width={72}
          height={72}
          className="h-16 w-16 rounded-full object-cover ring-1 ring-line sm:h-[72px] sm:w-[72px]"
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
          {profile.availability}
        </span>
      </div>

      <h1 className="mt-8 animate-fadeUp text-4xl font-semibold tracking-tight [animation-delay:80ms] sm:text-5xl">{profile.name}</h1>

      <p className="mt-3 h-6 animate-fadeUp font-mono text-sm text-muted [animation-delay:140ms]" aria-label={profile.roles.join(', ')}>
        <span className="text-accent">$</span> <span aria-hidden>{typed}</span>
        <span className="ml-px inline-block h-4 w-[7px] translate-y-[3px] animate-blink bg-accent/80" aria-hidden />
      </p>

      <p className="mt-6 max-w-2xl animate-fadeUp text-lg leading-relaxed text-muted [animation-delay:200ms]">{profile.tagline}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 animate-fadeUp text-sm text-subtle [animation-delay:260ms]">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> {profile.location}
        </span>
        {current.length > 0 && <span>Now: {current.map((c) => c.orgShort ?? c.org).join(' · ')}</span>}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 animate-fadeUp [animation-delay:320ms]">
        <Link
          to="/#projects"
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
        >
          See my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-fg/30 hover:text-fg"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        )}
        <SocialLinks className="ml-1" />
      </div>

      <div className="mt-12">
        <SignalLine />
      </div>
    </section>
  );
}
