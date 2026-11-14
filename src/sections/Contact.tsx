import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { profile } from '@/data/profile';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Section id="contact" index="12" title="Contact">
      <Reveal>
        <p className="max-w-xl leading-relaxed text-muted">
          Have a project, a research idea or a teaching opportunity — or just want to talk IoT and automation? I'd love to hear
          from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1 text-2xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={copy}
            aria-label="Copy email address"
            className="grid h-8 w-8 place-items-center rounded-full text-subtle transition hover:bg-fg/5 hover:text-fg"
          >
            {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span>{profile.location}</span>
        </div>
        <SocialLinks className="mt-6" withEmail={false} />
      </Reveal>
    </Section>
  );
}
